"use client";

import { User } from "@/lib/database";
import { createGlobalState } from "react-hooks-global-state";

export const { useGlobalState } = createGlobalState({
  user: undefined,
  // theme: settings.theme,
  theme: "dark",
} as {
  user: User | undefined;
  theme: "dark" | "light";
});