import { Coffee, Facebook, Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { NAV_LINKS, type SectionKey } from "@/data/navigation";
import { SOCIAL_LINKS } from "@/data/contactInfo";

interface FooterProps {
  onNavigate: (sectionKey: SectionKey) => void;
}

const SOCIAL_ICONS = {
  instagram: Instagram,
  telegram: Send,
  facebook: Facebook,
} as const;

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-espressoDark py-10">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 items-center">
        <div className="flex items-center gap-2 text-cream/80">
          <Coffee size={16} aria-hidden="true" />
          <span className="text-sm italic font-display">Coffee&amp;Co</span>
        </div>

        <nav aria-label="Навигация в подвале" className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.key}
              onClick={() => onNavigate(link.key)}
              className="text-xs text-cream/70 hover:text-brass transition-colors font-body"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <ul className="flex gap-4 md:justify-end" aria-label="Социальные сети">
          {SOCIAL_LINKS.map((social) => {
            const Icon = SOCIAL_ICONS[social.id];
            return (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-cream/70 hover:text-brass transition-colors"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-cream/60 font-body">© 2026 Coffee&amp;Co. Все права защищены.</p>
        <Link to="/admin" className="text-xs text-cream/60 hover:text-brass transition-colors font-body">
          Админ-панель
        </Link>
      </div>
    </footer>
  );
}
