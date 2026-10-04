# Coffee&Co

Лендинг кофейни с мини-админ-панелью для управления меню. Учебный проект для junior frontend-портфолио, выполненный по
[техническому заданию](./docs/TZ.md).

> **Демо:** _добавьте ссылку после деплоя на Vercel/Netlify_ (см. раздел «Деплой»)

## Скриншоты

| Админ-панель (десктоп) | Админ-панель (мобильная версия) |
| --- | --- |
| ![Админ-панель, десктоп](./docs/screenshots/admin-desktop.png) | ![Админ-панель, мобильная версия](./docs/screenshots/admin-mobile.png) |

| Лендинг (главный экран, «О кафе») | Лендинг (отзывы, контакты) |
| --- | --- |
| ![Лендинг: главный экран](./docs/screenshots/landing-1.jpg) | ![Лендинг: отзывы и контакты](./docs/screenshots/landing-2.jpg) |

## Возможности

**Лендинг**

- Header с навигацией (Главная, Меню, О нас, Отзывы, Контакты), кнопка «Забронировать столик», мобильное меню
- Hero, «О кафе», меню с карточками (фото, название, описание, цена) и фильтром по категориям
- Отзывы с рейтингом в звёздах, контакты со встроенной картой (OpenStreetMap) и формой обратной связи
- Footer: навигация, соцсети, копирайт
- Плавная прокрутка к секциям (с учётом `prefers-reduced-motion`), адаптивная вёрстка 375 / 768 / 1280+

**Админ-панель (`/admin`)**

- Авторизация (login/password), доступ к `/admin` без входа закрыт (редирект на `/admin/login`)
- Таблица позиций меню с миниатюрами, добавление, редактирование и удаление (с подтверждением «Вы уверены?»)
- Валидация формы: название, цена (целое число > 0), ссылка на изображение (http/https, необязательно), описание
- Изменения сразу отражаются на лендинге (общий Context + localStorage)
- Выход из аккаунта

**Качество**

- TypeScript без `any`, компонентный подход
- Доступность: `label` связаны с полями, `role="dialog"` + закрытие по Esc + возврат фокуса, `aria-*`, контраст текста ≥ 4.5:1
- Защита от повреждённых данных в localStorage (невалидные данные заменяются начальным меню, старый формат без `imageUrl` мигрирует)

## Стек

- React 18 + TypeScript
- React Router 7 (маршруты `/`, `/admin/login`, `/admin`)
- Vite 6
- Tailwind CSS 3
- lucide-react (иконки)
- localStorage (меню) и sessionStorage (сессия админа) — легко заменить на реальный backend

## Структура проекта

```
src/
├── components/
│   ├── landing/        # публичная часть сайта (Header, Hero, About, MenuSection, MenuCard, Reviews, Contact, Footer)
│   ├── admin/          # админ-панель (AdminLogin, AdminDashboard, ItemFormModal, ConfirmModal, ProtectedRoute)
│   ├── ui/             # переиспользуемые примитивы (Button, Input/Textarea, Select, Modal, MenuImage)
│   └── NotFound.tsx
├── context/            # MenuProvider (меню) и AuthProvider (сессия админа)
├── hooks/              # useLocalStorage, useMenu, useAuth
├── data/               # seedData, contactInfo, navigation, categoryIcons
├── utils/              # validators, menuStorage, formatters, id
├── types/              # общие TypeScript-типы
├── App.tsx             # маршруты
└── main.tsx
public/
└── images/             # локальные фото: меню, Hero и «О кафе» (внешние ссылки не используются)
docs/
├── TZ.md               # техническое задание
└── screenshots/
```

## Запуск проекта

Требуется Node.js 20+.

```bash
npm install
npm run dev
```

Откройте `http://localhost:5173`.

Другие команды:

```bash
npm run build       # проверка типов + production-сборка
npm run preview     # локальный просмотр сборки
npm run lint        # ESLint
npm run typecheck   # только проверка типов
```

## Доступ в админ-панель

Ссылка «Админ-панель» находится в подвале сайта, либо откройте `/admin`.

- **Логин:** `admin`
- **Пароль:** `admin123`

⚠️ Это демонстрационная авторизация без backend: учётные данные лежат в клиентском коде, а признак входа хранится в
`sessionStorage`. Она не защищает данные от человека, открывшего DevTools. Для реального проекта нужны серверная
аутентификация (JWT/сессии) и API вместо localStorage.

## О форме обратной связи

Форма на секции «Контакты» — frontend-мок: она валидирует поля и показывает сообщение об успехе, но данные никуда не
отправляются (нет backend/API). Для продакшена подключите email-сервис или API-эндпоинт.

## Деплой

Проект — SPA с клиентскими маршрутами, поэтому серверу нужен fallback на `index.html`. Он уже настроен:

- **Vercel:** файл `vercel.json`. Импортируйте репозиторий на [vercel.com](https://vercel.com/new) — настройки Vite определятся автоматически.
- **Netlify:** файл `public/_redirects`. Build command: `npm run build`, publish directory: `dist`.

После деплоя вставьте ссылку в раздел «Демо» выше.

## Перед публикацией замените демо-данные

- Контакты, адрес и ссылки на соцсети — в `src/data/contactInfo.ts`
- Тексты и отзывы — в `src/data/seedData.ts` и компонентах `landing/`
- Правообладатель в `LICENSE` и в подвале сайта

## Что можно улучшить дальше

- Заменить localStorage на реальный backend (Node/Express + БД либо Firebase) и серверную авторизацию
- Загрузка файлов изображений вместо ссылок
- Unit-тесты валидаторов (Vitest + Testing Library)
- Тёмная тема и i18n (RU/UZ/EN)
- Анимации при скролле (Framer Motion)

## Лицензия

[MIT](./LICENSE)
