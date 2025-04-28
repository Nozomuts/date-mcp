import { date, z } from "zod";

export const getNowZodSchema = z.object({
  format: z
    .enum(["ISO", "YYYY-MM-DD", "timestamp"])
    .optional()
    .default("ISO")
    .describe(
      "Specify the format for the date and time to retrieve. You can choose from ISO, YYYY-MM-DD, or timestamp. The default format is ISO."
    ),
});

type GetNowParams = z.infer<typeof getNowZodSchema>;
type ToolResponse = {
  content: {
    type: "text";
    text: string;
  }[];
  isError: boolean;
};

export const getNowHandler = async (
  params: GetNowParams
): Promise<ToolResponse> => {
  const { format } = params;
  const now = new Date();

  let datetimeString: string;
  try {
    switch (format) {
      case "ISO":
        datetimeString = now.toISOString();
        break;
      case "YYYY-MM-DD":
        datetimeString = `${now.getFullYear()}-${String(
          now.getMonth() + 1
        ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
        break;
      case "timestamp":
        datetimeString = String(Math.floor(now.getTime() / 1000));
        break;
      default:
        datetimeString = now.toISOString();
        break;
    }
  } catch (error) {
    console.error("Error formatting date:", error);
    // エラー発生時はデフォルトのISOフォーマットを使用
    return {
      content: [{ type: "text", text: now.toISOString() }],
      isError: true,
    };
  }

  return {
    content: [{ type: "text", text: datetimeString }],
    isError: false,
  };
};
