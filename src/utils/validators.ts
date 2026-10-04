import type { ContactFormData, MenuItemInput } from "@/types";

export type FormErrors<T> = Partial<Record<keyof T, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[\d\s()-]{7,}$/;

export function isValidImageUrl(value: string): boolean {
  // Локальный файл из public/, например "/images/raf.webp"
  if (value.startsWith("/") && !value.startsWith("//")) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateContactForm(form: ContactFormData): FormErrors<ContactFormData> {
  const errors: FormErrors<ContactFormData> = {};

  if (!form.name.trim()) errors.name = "Укажите имя";

  const contact = form.contact.trim();
  if (!contact) {
    errors.contact = "Укажите телефон или email";
  } else if (!EMAIL_RE.test(contact) && !PHONE_RE.test(contact)) {
    errors.contact = "Введите корректный email или телефон";
  }

  if (!form.message.trim()) errors.message = "Напишите сообщение";

  return errors;
}

/** Форма позиции меню: цена хранится строкой, пока пользователь вводит значение. */
export interface MenuFormState extends Omit<MenuItemInput, "price"> {
  price: string;
}

export function validateMenuForm(form: MenuFormState): FormErrors<MenuFormState> {
  const errors: FormErrors<MenuFormState> = {};

  if (!form.name.trim()) errors.name = "Укажите название";

  if (!/^\d+$/.test(form.price.trim()) || Number(form.price) <= 0) {
    errors.price = "Укажите цену — целое число больше 0";
  }

  const image = form.imageUrl.trim();
  if (image && !isValidImageUrl(image)) {
    errors.imageUrl = "Введите ссылку (http://, https://) или путь вида /images/photo.webp";
  }

  if (!form.description.trim()) errors.description = "Добавьте описание";

  return errors;
}
