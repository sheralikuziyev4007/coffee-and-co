import type { LucideIcon } from "lucide-react";

interface CategoryTabProps {
  active: boolean;
  label: string;
  icon?: LucideIcon;
  onClick: () => void;
}

export function CategoryTab({ active, label, icon: Icon, onClick }: CategoryTabProps) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-colors border font-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass ${
        active ? "bg-espresso text-cream border-espresso" : "text-ink border-sand hover:bg-cream"
      }`}
    >
      {Icon && <Icon size={14} aria-hidden="true" />}
      {label}
    </button>
  );
}
