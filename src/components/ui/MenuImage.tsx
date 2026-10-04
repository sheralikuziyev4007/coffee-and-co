import { useState } from "react";
import { CATEGORY_ICONS } from "@/data/categoryIcons";
import type { Category } from "@/types";

interface MenuImageProps {
  src: string;
  alt: string;
  category: Category;
  /** Классы контейнера (размеры, скругления) */
  className?: string;
  iconSize?: number;
}

/** Изображение позиции меню. Если ссылки нет или картинка не загрузилась — заглушка с иконкой категории. */
export function MenuImage({ src, alt, category, className = "", iconSize = 32 }: MenuImageProps) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const Icon = CATEGORY_ICONS[category];
  const showImage = Boolean(src) && failedSrc !== src;

  return (
    <div className={`overflow-hidden bg-sand/50 flex items-center justify-center text-ink/60 ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailedSrc(src)}
          className="w-full h-full object-cover"
        />
      ) : (
        <Icon size={iconSize} aria-hidden="true" />
      )}
    </div>
  );
}
