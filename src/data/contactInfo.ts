// Демо-данные. Перед публикацией замените на реальные контакты кофейни.
export const CONTACT_INFO = {
  address: "ул. Амира Темура, 45, Ташкент",
  phone: "+998 71 000 00 00",
  phoneHref: "tel:+998710000000",
  hours: "Ежедневно, 08:00 – 22:00",
  instagramHandle: "@coffeeandco",
  mapEmbedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=69.2697%2C41.3061%2C69.2897%2C41.3161&layer=mapnik&marker=41.3111%2C69.2797",
  mapLinkUrl: "https://www.openstreetmap.org/?mlat=41.3111&mlon=69.2797#map=16/41.3111/69.2797",
};

export const SOCIAL_LINKS = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com/coffeeandco" },
  { id: "telegram", label: "Telegram", href: "https://t.me/coffeeandco" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com/coffeeandco" },
] as const;
