import client from "@/lib/dynamodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { todoId } = req.query;

  switch (req.method) {
    case "PUT":
      try {
        if (!process.env.DYNAMODB_TABLE_NAME) {
          throw new Error("DYNAMODB_TABLE_NAME is not defined");
        }
        const { title } = req.body;
        const params = {
          TableName: process.env.DYNAMODB_TABLE_NAME,
          Key: { todoId },
          UpdateExpression: "set title = :title",
          ExpressionAttributeValues: {
            ":title": title,
          },
          ReturnValues: "ALL_NEW",
        };

        await client.update(params).promise();
        res.status(204).end();
      } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ error: "Error updating todo" });
      }
      break;

    case "DELETE":
      try {
        if (!process.env.DYNAMODB_TABLE_NAME) {
          throw new Error("DYNAMODB_TABLE_NAME is not defined");
        }
        const params = {
          TableName: process.env.DYNAMODB_TABLE_NAME,
          Key: { todoId },
        };

        await client.delete(params).promise();
        res.status(204).end();
      } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ error: "Error updating todo" });
      }
      break;

    default:
      res.status(405).end(); // Method Not Allowed
      break;
  }
}
