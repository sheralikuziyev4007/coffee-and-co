import { CATEGORIES } from "@/data/seedData";
import type { Category, MenuItem } from "@/types";

const CATEGORY_IDS = new Set<string>(CATEGORIES.map((c) => c.id));

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/**
 * Проверяет и нормализует данные меню из localStorage.
 * Защищает от повреждённых данных и добавляет imageUrl к записям старого формата.
 * Возвращает null, если данные непригодны — тогда используется начальное меню.
 */
export function parseMenu(raw: unknown): MenuItem[] | null {
  if (!Array.isArray(raw)) return null;

  const result: MenuItem[] = [];
  for (const entry of raw) {
    if (
      !isRecord(entry) ||
      typeof entry.id !== "string" ||
      typeof entry.name !== "string" ||
      typeof entry.description !== "string" ||
      typeof entry.price !== "number" ||
      !Number.isFinite(entry.price) ||
      typeof entry.category !== "string" ||
      !CATEGORY_IDS.has(entry.category)
    ) {
      return null;
    }

    result.push({
      id: entry.id,
      name: entry.name,
      category: entry.category as Category,
      price: entry.price,
      description: entry.description,
      imageUrl: typeof entry.imageUrl === "string" ? entry.imageUrl : "",
    });
  }
  return result;
}
