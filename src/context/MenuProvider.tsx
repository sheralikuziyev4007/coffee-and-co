import { useMemo, type ReactNode } from "react";
import { MenuContext } from "./menuContext";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { INITIAL_MENU } from "@/data/seedData";
import { parseMenu } from "@/utils/menuStorage";
import { generateId } from "@/utils/id";
import type { MenuItem, MenuItemInput } from "@/types";

const STORAGE_KEY = "coffee-and-co:menu";

export function MenuProvider({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useLocalStorage<MenuItem[]>(STORAGE_KEY, INITIAL_MENU, parseMenu);

  const value = useMemo(
    () => ({
      menu,
      addItem: (item: MenuItemInput) => setMenu((prev) => [...prev, { ...item, id: generateId() }]),
      updateItem: (id: string, item: MenuItemInput) =>
        setMenu((prev) => prev.map((m) => (m.id === id ? { ...item, id } : m))),
      deleteItem: (id: string) => setMenu((prev) => prev.filter((m) => m.id !== id)),
    }),
    [menu, setMenu]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
