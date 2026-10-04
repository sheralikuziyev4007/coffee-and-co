import { ChevronRight } from "lucide-react";
import type { SectionKey } from "@/data/navigation";

interface HeroProps {
  onNavigate: (sectionKey: SectionKey) => void;
}

const HERO_IMAGE = "/images/latte-art.webp";

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-espresso">
      {/* Фоновое фото под тёмной подложкой: если не загрузится — остаётся однотонный фон */}
      <img
        src={HERO_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-espresso/30" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
        <p className="text-sm tracking-[0.3em] uppercase mb-6 text-brass font-body">Обжарка с 2016 года</p>
        <h1 className="text-5xl md:text-7xl leading-[1.05] mb-8 italic text-cream font-display max-w-[16ch]">
          Кофе — это пауза, которую стоит сделать красиво
        </h1>
        <p className="text-base md:text-lg mb-10 max-w-md text-cream/80 font-body">
          Небольшая обжарочная и кофейня в центре города. Свежая обжарка каждую неделю, домашние десерты каждый день.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate("menu")}
            className="px-6 py-3 rounded-sm flex items-center gap-2 bg-brass text-espresso font-body"
          >
            Смотреть меню <ChevronRight size={16} aria-hidden="true" />
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="px-6 py-3 rounded-sm border border-cream/40 hover:border-cream/70 text-cream/90 font-body transition-colors"
          >
            Как нас найти
          </button>
        </div>
      </div>

      <div className="absolute -right-24 -bottom-24 md:-right-16 md:-bottom-16 pointer-events-none z-[5]" aria-hidden="true">
        <div className="w-[380px] h-[380px] rounded-full border border-white/10" />
        <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full border border-white/10" />
        <div className="absolute top-[90px] left-[90px] w-[200px] h-[200px] rounded-full border-2 border-brass opacity-50" />
      </div>
    </section>
  );
}
