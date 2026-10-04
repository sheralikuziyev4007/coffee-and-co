import { forwardRef, useMemo, useState } from "react";
import { useMenu } from "@/hooks/useMenu";
import { CATEGORIES } from "@/data/seedData";
import { CATEGORY_ICONS } from "@/data/categoryIcons";
import { MenuCard } from "./MenuCard";
import { CategoryTab } from "./CategoryTab";
import type { Category } from "@/types";

export const MenuSection = forwardRef<HTMLElement>(function MenuSection(_props, ref) {
  const { menu } = useMenu();
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered = useMemo(
    () => (activeCategory === "all" ? menu : menu.filter((m) => m.category === activeCategory)),
    [menu, activeCategory]
  );

  return (
    <section ref={ref} className="bg-creamDark py-20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-ink/80 font-body">Меню</p>
        <h2 className="text-3xl md:text-4xl mb-10 italic text-espresso font-display">Что мы готовим</h2>

        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Категории меню">
          <CategoryTab active={activeCategory === "all"} label="Всё" onClick={() => setActiveCategory("all")} />
          {CATEGORIES.map((c) => (
            <CategoryTab
              key={c.id}
              active={activeCategory === c.id}
              label={c.label}
              icon={CATEGORY_ICONS[c.id]}
              onClick={() => setActiveCategory(c.id)}
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-ink/80 font-body">В этой категории пока нет позиций.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
});
