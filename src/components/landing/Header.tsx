import { useState } from "react";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { NAV_LINKS, type SectionKey } from "@/data/navigation";

interface HeaderProps {
  onNavigate: (sectionKey: SectionKey) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (key: SectionKey) => {
    setMobileOpen(false);
    onNavigate(key);
  };

  return (
    <header className="sticky top-0 z-40 bg-espresso">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => handleNav("home")} className="flex items-center gap-2 text-cream" aria-label="Coffee&Co — на главную">
          <Coffee size={22} className="text-brass" aria-hidden="true" />
          <span className="text-xl italic font-display">Coffee&amp;Co</span>
        </button>

        <nav aria-label="Основная навигация" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNav(link.key)}
              className="text-sm text-cream/80 hover:text-brass transition-colors font-body"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="px-4 py-2 rounded-sm text-sm bg-brass text-espresso font-body"
          >
            Забронировать столик
          </button>
        </nav>

        <button
          className="md:hidden text-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" aria-label="Мобильная навигация" className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-espresso">
          {NAV_LINKS.map((link) => (
            <button key={link.key} onClick={() => handleNav(link.key)} className="text-left text-sm py-1 text-cream/80 font-body">
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="mt-1 px-4 py-2.5 rounded-sm text-sm bg-brass text-espresso font-body"
          >
            Забронировать столик
          </button>
        </nav>
      )}
    </header>
  );
}
