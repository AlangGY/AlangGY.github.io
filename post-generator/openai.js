import dotenv from "dotenv";
import OpenAI from "openai";

if (!process.env.OPEN_AI_ORG || !process.env.OPEN_AI_API_KEY) {
  dotenv.config({ path: ".env.local" });
}

export const openai = new OpenAI({
  organization: process.env.OPEN_AI_ORG,
  apiKey: process.env.OPEN_AI_API_KEY,
});
