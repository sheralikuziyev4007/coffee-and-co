import type { SelectHTMLAttributes } from "react";
import { Field, type FieldOwnProps } from "./Field";
import { controlClasses } from "./fieldStyles";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "children">, FieldOwnProps {
  options: SelectOption[];
}

export function Select({ label, hideLabel, error, tone = "light", options, className = "", ...rest }: SelectProps) {
  return (
    <Field label={label} hideLabel={hideLabel} error={error} tone={tone}>
      {(a11y) => (
        <select {...a11y} className={controlClasses(tone, Boolean(error), className)} {...rest}>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      )}
    </Field>
  );
}
