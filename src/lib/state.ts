import { createGlobalState } from "react-hooks-global-state";
import { User } from "./database";
import settings from "./settings";

export const { useGlobalState } = createGlobalState({
  user: undefined,
  theme: settings.theme,
} as {
  user: User | undefined;
  theme: "dark" | "light";
});