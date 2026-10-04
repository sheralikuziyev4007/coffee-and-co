import { useEffect, useState } from "react";

/**
 * Значение читается из localStorage при инициализации и
 * автоматически сохраняется туда при каждом изменении.
 *
 * `parse` (необязательный) проверяет прочитанные данные: если вернул null —
 * данные считаются повреждёнными и используется `initialValue`.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  parse?: (raw: unknown) => T | null
) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored === null) return initialValue;
      const raw: unknown = JSON.parse(stored);
      if (!parse) return raw as T;
      return parse(raw) ?? initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // localStorage может быть недоступен (приватный режим и т.п.) — молча игнорируем
    }
  }, [key, value]);

  return [value, setValue] as const;
}
