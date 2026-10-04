import { useContext } from "react";
import { MenuContext } from "@/context/menuContext";

export function useMenu() {
  const ctx = useContext(MenuContext);
  if (!ctx) throw new Error("useMenu must be used within a MenuProvider");
  return ctx;
}
