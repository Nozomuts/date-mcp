import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "date-mcp-server",
  version: "1.0.0",
});

const main = async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("Date MCP Server が stdio で動作中");
};

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
