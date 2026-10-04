export type FieldTone = "light" | "dark";

export const FIELD_TONE_CLASSES: Record<FieldTone, { control: string; label: string; error: string }> = {
  light: {
    control: "bg-white text-espresso placeholder:text-ink/70",
    label: "text-ink",
    error: "text-clayDark",
  },
  dark: {
    control: "bg-espressoDark text-cream placeholder:text-cream/60",
    label: "text-cream/80",
    error: "text-clayLight",
  },
};

export function controlClasses(tone: FieldTone, hasError: boolean, extra = "") {
  const border = hasError ? (tone === "dark" ? "border-clayLight" : "border-clayDark") : tone === "dark" ? "border-cream/30" : "border-sand";
  return `w-full px-3 py-2.5 rounded-sm text-sm border font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass ${FIELD_TONE_CLASSES[tone].control} ${border} ${extra}`;
}
