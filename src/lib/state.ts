import { createGlobalState } from "react-hooks-global-state";

const initialState: {
  user:
    | {
        id: string;
        name: string;
        avatar: string;
      }
    | undefined;
} = {
  user: undefined,
};

export const { useGlobalState } = createGlobalState(initialState);