import { User } from "@/lib/database";
import { createContext, ReactNode, useContext, useState } from "react";

type AppContextProps = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
};

const AppContext = createContext<AppContextProps>({
  user: undefined,
  setUser: () => {},
  theme: "dark",
  setTheme: () => {},
});

export function useApp() {
  return useContext(AppContext);
}

export default function AppContextProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}