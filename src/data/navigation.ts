export type SectionKey = "home" | "menu" | "about" | "reviews" | "contact";

export const NAV_LINKS: { key: SectionKey; label: string }[] = [
  { key: "home", label: "Главная" },
  { key: "menu", label: "Меню" },
  { key: "about", label: "О нас" },
  { key: "reviews", label: "Отзывы" },
  { key: "contact", label: "Контакты" },
];
