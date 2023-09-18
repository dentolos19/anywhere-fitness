import { User } from "@/lib/database";
import settings from "@/lib/settings";
import { createGlobalState } from "react-hooks-global-state";

export const { useGlobalState } = createGlobalState({
  user: undefined,
  theme: settings.theme,
} as {
  user: User | undefined;
  theme: "dark" | "light";
});