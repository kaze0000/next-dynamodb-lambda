import { DynamoDB } from "aws-sdk";

const client = new DynamoDB.DocumentClient({
  region: process.env.AWS_REGION,
});

export default client;
