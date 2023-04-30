// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/lib/dynamodb";
import { ErrorResponse } from "@/type/err";
import { v4 as uuid } from "uuid";
import { Todo } from "@/type/todo";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  switch (req.method) {
    case "GET":
      try {
        if (!process.env.DYNAMODB_TABLE_NAME) {
          throw new Error("DYNAMODB_TABLE_NAME is not defined");
        }
        const { Items } = await client
          .scan({ TableName: process.env.DYNAMODB_TABLE_NAME })
          .promise();
        res.status(200).json(Items);
      } catch (err) {
        res.status(500).json({ err: "Something went wrong" });
      }
      break;

    case "POST":
      try {
        if (!process.env.DYNAMODB_TABLE_NAME) {
          throw new Error("DYNAMODB_TABLE_NAME is not defined");
        }
        const { title } = req.body;
        const newTodo: Todo = {
          todoId: uuid(),
          title,
        };
        await client
          .put({
            TableName: process.env.DYNAMODB_TABLE_NAME,
            Item: newTodo,
          })
          .promise();
        res.status(200).json(newTodo);
      } catch (err) {
        res.status(500).json({ err: "Something went wrong" });
      }
      break;
    default:
      res.status(405).json({ err: "Method not supported" });
      break;
  }
}
