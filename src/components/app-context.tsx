import { User } from "@/lib/database";
import { createContext, ReactNode, useContext, useState } from "react";

type AppContextProps = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
};

const AppContext = createContext<AppContextProps>({
  user: undefined,
  setUser: () => {},
});

export function useApp() {
  return useContext(AppContext);
}

export default function AppContextProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState<User | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
