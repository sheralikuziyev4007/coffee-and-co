import { createContext } from "react";
import type { MenuItem, MenuItemInput } from "@/types";

export interface MenuContextValue {
  menu: MenuItem[];
  addItem: (item: MenuItemInput) => void;
  updateItem: (id: string, item: MenuItemInput) => void;
  deleteItem: (id: string) => void;
}

export const MenuContext = createContext<MenuContextValue | undefined>(undefined);
