import { useEffect, useId, useRef, type ReactNode } from "react";

interface ModalProps {
  title?: string;
  /** Подпись для скринридеров, если визуального заголовка нет */
  ariaLabel?: string;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: "sm" | "md";
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Доступное модальное окно: role="dialog", закрытие по Escape и клику на фон,
 * фокус переходит внутрь, удерживается по Tab и возвращается после закрытия.
 */
export function Modal({ title, ariaLabel, onClose, children, maxWidth = "md" }: ModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    const first = dialog?.querySelector<HTMLElement>(FOCUSABLE);
    (first ?? dialog)?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;

      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];

      if (event.shiftKey && document.activeElement === firstEl) {
        event.preventDefault();
        lastEl.focus();
      } else if (!event.shiftKey && document.activeElement === lastEl) {
        event.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center px-6 z-50 bg-black/60"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : ariaLabel}
        tabIndex={-1}
        className={`w-full ${maxWidth === "sm" ? "max-w-sm" : "max-w-md"} max-h-[90vh] overflow-y-auto p-6 rounded-sm bg-cream focus:outline-none`}
      >
        {title && (
          <h2 id={titleId} className="text-lg mb-5 italic text-espresso font-display">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}
