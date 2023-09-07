import { Theme } from "@mui/material";
import { createGlobalState } from "react-hooks-global-state";
import { User } from "./database";

const initialState: {
  user: User | undefined;
  theme: Theme | undefined;
} = {
  user: undefined,
  theme: undefined,
};

export const { useGlobalState } = createGlobalState(initialState);