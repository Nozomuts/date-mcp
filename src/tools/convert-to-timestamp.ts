import { z } from "zod";

export const convertToTimestampZodSchema = z.object({
  datetime: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/,
      "Invalid datetime format. Expected YYYY-MM-DD hh:mm:ss"
    )
    .describe("The datetime string in YYYY-MM-DD hh:mm:ss format."),
  timezone: z
    .enum([
      "Asia/Tokyo",
      "UTC",
      "America/New_York",
      "Europe/London",
      "Australia/Sydney",
      // 必要に応じて他のタイムゾーンを追加
    ])
    .describe(
      "The timezone string (e.g., 'Asia/Tokyo', 'UTC', 'America/New_York')."
    ),
});

type ConvertToTimestampParams = z.infer<typeof convertToTimestampZodSchema>;
type ToolResponse = {
  content: {
    type: "text";
    text: string;
  }[];
  isError: boolean;
  error?: string;
};

export const convertToTimestampHandler = async (
  params: ConvertToTimestampParams
): Promise<ToolResponse> => {
  const { datetime, timezone } = params;

  try {
    const [datePart, timePart] = datetime.split(" ");
    const [year, month, day] = datePart.split("-").map(Number);
    const [hour, minute, second] = timePart.split(":").map(Number);

    const utcDate = new Date(
      Date.UTC(year, month - 1, day, hour, minute, second)
    );

    const now = new Date();
    const formatterForOffset = new Intl.DateTimeFormat("en", {
      timeZone: timezone,
      timeZoneName: "longOffset",
    });
    const offsetString = formatterForOffset
      .formatToParts(now)
      .find((p) => p.type === "timeZoneName")
      ?.value?.replace("GMT", "");

    if (!offsetString) {
      throw new Error(`Could not determine offset for timezone: ${timezone}`);
    }

    const offsetParts = offsetString.split(":");
    const offsetHours = parseInt(offsetParts[0], 10);
    const offsetMinutes = offsetParts[1] ? parseInt(offsetParts[1], 10) : 0;
    const offsetMilliseconds =
      (offsetHours * 60 + (offsetHours < 0 ? -offsetMinutes : offsetMinutes)) *
      60 *
      1000;

    const targetTimestamp = utcDate.getTime() - offsetMilliseconds;
    const finalDate = new Date(targetTimestamp);

    const timestamp = Math.floor(finalDate.getTime() / 1000);

    return {
      content: [{ type: "text", text: String(timestamp) }],
      isError: false,
    };
  } catch (error) {
    console.error("Error converting datetime:", error);
    return {
      content: [{ type: "text", text: "" }],
      isError: true,
    };
  }
};
