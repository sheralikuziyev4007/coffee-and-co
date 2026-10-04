import type { CategoryOption, MenuItem, Review } from "@/types";

export const CATEGORIES: CategoryOption[] = [
  { id: "coffee", label: "Кофе" },
  { id: "desserts", label: "Десерты" },
  { id: "breakfast", label: "Завтраки" },
  { id: "main", label: "Основные блюда" },
];

export const CATEGORY_LABEL: Record<string, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.label])
);

// Фото лежат локально в public/images/: если файл не загрузится, показывается иконка категории.
// Ссылку на фото можно добавить через админ-панель.
export const INITIAL_MENU: MenuItem[] = [
  { id: "1", name: "Флэт уайт", category: "coffee", price: 28000, description: "Двойной эспрессо с бархатистым молоком", imageUrl: "/images/flat-white.webp" },
  { id: "2", name: "Раф на меду", category: "coffee", price: 32000, description: "Сливочный раф с цветочным мёдом", imageUrl: "/images/raf.webp" },
  { id: "3", name: "Капучино", category: "coffee", price: 24000, description: "Классика с плотной молочной пенкой", imageUrl: "/images/cappuccino.webp" },
  { id: "4", name: "Чизкейк Basque", category: "desserts", price: 38000, description: "Обожжённый снаружи, кремовый внутри", imageUrl: "/images/cheesecake.webp" },
  { id: "5", name: "Круассан миндальный", category: "desserts", price: 26000, description: "Слоёное тесто, миндальная начинка", imageUrl: "/images/croissant.webp" },
  { id: "6", name: "Овсянка с ягодами", category: "breakfast", price: 34000, description: "На кокосовом молоке, сезонные ягоды", imageUrl: "/images/oatmeal.webp" },
  { id: "7", name: "Авокадо тост", category: "breakfast", price: 42000, description: "Ржаной хлеб, авокадо, яйцо пашот", imageUrl: "/images/avocado-toast.webp" },
  { id: "8", name: "Паста Феттучини", category: "main", price: 56000, description: "Сливочный соус, грибы, пармезан", imageUrl: "/images/pasta.webp" },
];

export const REVIEWS: Review[] = [
  { id: "1", authorName: "Мадина А.", rating: 5, text: "Лучший флэт уайт в городе. Атмосфера очень уютная, часто прихожу поработать." },
  { id: "2", authorName: "Жасур К.", rating: 5, text: "Чизкейк — отдельный вид искусства. Обслуживание быстрое и приветливое." },
  { id: "3", authorName: "Дилноза Р.", rating: 4, text: "Прекрасное место для завтрака перед работой. Немного шумно в выходные." },
];
