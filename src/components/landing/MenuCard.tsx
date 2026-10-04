import { CATEGORY_LABEL } from "@/data/seedData";
import { formatMoney } from "@/utils/formatters";
import { MenuImage } from "@/components/ui/MenuImage";
import type { MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="rounded-sm bg-cream border border-sand overflow-hidden flex flex-col">
      <MenuImage src={item.imageUrl} alt={item.name} category={item.category} className="aspect-[4/3] w-full" iconSize={40} />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-lg italic text-espresso font-display">{item.name}</h3>
          <span className="text-sm whitespace-nowrap text-brassDark font-body font-medium">{formatMoney(item.price)}</span>
        </div>
        <p className="text-sm leading-relaxed text-ink/80 font-body">{item.description}</p>
        <p className="text-xs mt-3 uppercase tracking-wider text-ink/80 font-body">{CATEGORY_LABEL[item.category]}</p>
      </div>
    </article>
  );
}
