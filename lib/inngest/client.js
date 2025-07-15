import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "aceai", // Unique app ID
  name: "Aceai",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
