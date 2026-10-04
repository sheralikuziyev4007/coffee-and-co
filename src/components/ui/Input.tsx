import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { Field, type FieldOwnProps } from "./Field";
import { controlClasses } from "./fieldStyles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, FieldOwnProps {}

export function Input({ label, hideLabel, error, tone = "light", className = "", ...rest }: InputProps) {
  return (
    <Field label={label} hideLabel={hideLabel} error={error} tone={tone}>
      {(a11y) => <input {...a11y} className={controlClasses(tone, Boolean(error), className)} {...rest} />}
    </Field>
  );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, FieldOwnProps {}

export function Textarea({ label, hideLabel, error, tone = "light", className = "", ...rest }: TextareaProps) {
  return (
    <Field label={label} hideLabel={hideLabel} error={error} tone={tone}>
      {(a11y) => <textarea {...a11y} className={controlClasses(tone, Boolean(error), `resize-none ${className}`)} {...rest} />}
    </Field>
  );
}
