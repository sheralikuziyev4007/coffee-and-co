import { forwardRef } from "react";

export const About = forwardRef<HTMLElement>(function About(_props, ref) {
  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-ink/80 font-body">О кафе</p>
        <h2 className="text-3xl md:text-4xl mb-6 italic text-espresso font-display">Место, где не торопят</h2>
        <p className="mb-4 leading-relaxed text-ink font-body">
          Coffee&amp;Co начинался как маленькая точка обжарки на 12 квадратных метрах. Сегодня это уютное пространство,
          где можно поработать, встретиться с друзьями или просто выпить хороший кофе в тишине.
        </p>
        <p className="leading-relaxed text-ink font-body">
          Зёрна обжариваем сами, десерты готовим на собственной кухне каждое утро.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="/images/interior.webp"
          alt="Интерьер кофейни Coffee&Co"
          loading="lazy"
          className="aspect-square rounded-sm object-cover w-full bg-sand/50"
        />
        <img
          src="/images/latte-art.webp"
          alt="Латте-арт в кофейне Coffee&Co"
          loading="lazy"
          className="aspect-square rounded-sm object-cover w-full mt-8 bg-sand/50"
        />
      </div>
    </section>
  );
});
