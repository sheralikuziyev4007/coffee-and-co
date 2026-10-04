import { forwardRef, useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, Instagram, Send, Check, ExternalLink } from "lucide-react";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/data/contactInfo";
import { validateContactForm, type FormErrors } from "@/utils/validators";
import type { ContactFormData } from "@/types";

const EMPTY_FORM: ContactFormData = { name: "", contact: "", message: "" };

export const Contact = forwardRef<HTMLElement>(function Contact(_props, ref) {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<number>();

  // Не оставляем «висящий» таймер при размонтировании
  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = validateContactForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(EMPTY_FORM);
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section ref={ref} className="bg-espresso py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-4 text-brass font-body">Контакты</p>
          <h2 className="text-3xl md:text-4xl mb-8 italic text-cream font-display">Ждём вас в гости</h2>
          <ul className="space-y-4 text-cream/80 font-body">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-brass shrink-0" aria-hidden="true" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brass shrink-0" aria-hidden="true" />
              <a href={CONTACT_INFO.phoneHref} className="hover:text-brass transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-brass shrink-0" aria-hidden="true" />
              <span>{CONTACT_INFO.hours}</span>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={18} className="text-brass shrink-0" aria-hidden="true" />
              <span>{CONTACT_INFO.instagramHandle}</span>
            </li>
          </ul>

          <div className="mt-8">
            <iframe
              title="Карта: расположение Coffee&Co"
              src={CONTACT_INFO.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-56 rounded-sm border border-cream/20 bg-espressoDark"
            />
            <a
              href={CONTACT_INFO.mapLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-xs text-cream/80 hover:text-brass transition-colors font-body"
            >
              Открыть карту целиком <ExternalLink size={12} aria-hidden="true" />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4 self-start" aria-label="Форма обратной связи">
          <Input
            tone="dark"
            label="Ваше имя"
            placeholder="Ваше имя"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            error={errors.name}
          />
          <Input
            tone="dark"
            label="Телефон или email"
            placeholder="Телефон или email"
            autoComplete="email"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            error={errors.contact}
          />
          <Textarea
            tone="dark"
            label="Сообщение"
            placeholder="Сообщение"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            error={errors.message}
          />

          <Button type="submit" className="flex items-center gap-2 focus-visible:ring-offset-espresso">
            Отправить <Send size={14} aria-hidden="true" />
          </Button>

          <div role="status" aria-live="polite">
            {submitted && (
              <p className="text-sm flex items-center gap-2 text-green-400">
                <Check size={14} aria-hidden="true" /> Сообщение отправлено, мы скоро свяжемся с вами.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
});
