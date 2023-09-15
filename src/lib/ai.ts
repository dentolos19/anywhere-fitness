import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";

const baseUrl = "https://cock-za06.onrender.com/v1";

const openai = new OpenAI({
  baseURL: baseUrl,
  apiKey: "",
  dangerouslyAllowBrowser: true
});

export function makeChat(messages: ChatCompletionMessageParam[]) {
  return openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: false,
    messages: messages,
  });
}