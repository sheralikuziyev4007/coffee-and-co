export type Category = "coffee" | "desserts" | "breakfast" | "main";

export interface MenuItem {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  /** Ссылка на изображение. Пустая строка — показывается заглушка. */
  imageUrl: string;
}

export type MenuItemInput = Omit<MenuItem, "id">;

export interface Review {
  id: string;
  authorName: string;
  /** Оценка от 1 до 5 */
  rating: number;
  text: string;
}

export interface ContactFormData {
  name: string;
  contact: string;
  message: string;
}

export interface CategoryOption {
  id: Category;
  label: string;
}
