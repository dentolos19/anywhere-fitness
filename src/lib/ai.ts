import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";
import settings from "./settings";

const ai = new OpenAI({
  baseURL: settings.aiBaseUrl,
  apiKey: settings.aiApiKey,
  dangerouslyAllowBrowser: true,
});

export function makeChat(messages: ChatCompletionMessageParam[]) {
  return ai.chat.completions.create({
    model: settings.aiModel,
    stream: false,
    messages: messages,
  });
}