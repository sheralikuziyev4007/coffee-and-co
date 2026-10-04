import { createContext } from "react";

export interface AuthContextValue {
  isAuthenticated: boolean;
  /** Возвращает true при успешном входе */
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
