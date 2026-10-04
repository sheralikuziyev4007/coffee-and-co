import { useId, type ReactNode } from "react";
import { FIELD_TONE_CLASSES, type FieldTone } from "./fieldStyles";

export type { FieldTone };

export interface FieldOwnProps {
  label: string;
  /** Скрыть подпись визуально, оставив её для скринридеров */
  hideLabel?: boolean;
  error?: string;
  tone?: FieldTone;
}

interface FieldProps extends FieldOwnProps {
  /** Функция получает id и props для доступности и возвращает сам контрол */
  children: (a11y: {
    id: string;
    "aria-invalid": boolean;
    "aria-describedby": string | undefined;
  }) => ReactNode;
}

/** Общая обёртка: связывает <label> с контролом и выводит ошибку (role="alert"). */
export function Field({ label, hideLabel = false, error, tone = "light", children }: FieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const toneClasses = FIELD_TONE_CLASSES[tone];

  return (
    <div>
      <label htmlFor={id} className={hideLabel ? "sr-only" : `text-xs block mb-1 font-body ${toneClasses.label}`}>
        {label}
      </label>
      {children({ id, "aria-invalid": Boolean(error), "aria-describedby": error ? errorId : undefined })}
      {error && (
        <p id={errorId} role="alert" className={`text-xs mt-1 font-body ${toneClasses.error}`}>
          {error}
        </p>
      )}
    </div>
  );
}
