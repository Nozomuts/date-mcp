import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getNowZodSchema, getNowHandler } from "./tools/get-now.js";
import {
  convertToTimestampZodSchema,
  convertToTimestampHandler,
} from "./tools/convert-to-timestamp.js";

const server = new McpServer({
  name: "date-mcp-server",
  version: "1.0.0",
});

server.tool(
  "get_now",
  "Use this tool to get the current date and time.",
  getNowZodSchema.shape,
  getNowHandler
);

server.tool(
  "convert_to_timestamp",
  "Converts a datetime string in YYYY-MM-DD hh:mm:ss format with a timezone to a Unix timestamp.",
  convertToTimestampZodSchema.shape,
  convertToTimestampHandler
);

const main = async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
};

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
