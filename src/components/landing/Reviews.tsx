import { forwardRef } from "react";
import { Star } from "lucide-react";
import { REVIEWS } from "@/data/seedData";

export const Reviews = forwardRef<HTMLElement>(function Reviews(_props, ref) {
  return (
    <section ref={ref} className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-xs tracking-[0.3em] uppercase mb-4 text-ink/80 font-body">Отзывы</p>
      <h2 className="text-3xl md:text-4xl mb-10 italic text-espresso font-display">Что говорят гости</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {REVIEWS.map((review) => (
          <figure key={review.id} className="p-6 rounded-sm bg-creamDark">
            <div className="flex gap-1 mb-3" role="img" aria-label={`Оценка ${review.rating} из 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill={i < review.rating ? "#C9932E" : "none"} className="text-brass" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="text-sm leading-relaxed mb-4 text-ink font-body">{review.text}</blockquote>
            <figcaption className="text-sm italic text-espresso font-display">{review.authorName}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
});
