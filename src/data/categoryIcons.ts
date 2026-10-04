import { Coffee, Croissant, Sun, UtensilsCrossed, type LucideIcon } from "lucide-react";
import type { Category } from "@/types";

export const CATEGORY_ICONS: Record<Category, LucideIcon> = {
  coffee: Coffee,
  desserts: Croissant,
  breakfast: Sun,
  main: UtensilsCrossed,
};
