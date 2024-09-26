"use client";

import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/chat/index.mjs";

const ai = new OpenAI({
  // baseURL: settings.aiBaseUrl,
  // apiKey: settings.aiApiKey,
  baseURL: "",
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

export function createChatCompletions(messages: ChatCompletionMessageParam[]) {
  return ai.chat.completions.create({
    // model: settings.aiModel,
    model: "",
    stream: false,
    messages: messages,
  });
}