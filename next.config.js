/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AWS_REGION: "ap-northeast-1",
    DYNAMODB_TABLE_NAME: "TodoApp",
  },
};

module.exports = nextConfig;
