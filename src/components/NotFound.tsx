import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 bg-espresso text-center">
      <p className="text-brass text-sm font-body">Ошибка 404</p>
      <h1 className="text-4xl italic text-cream font-display">Такой страницы нет</h1>
      <Link to="/">
        <Button>Вернуться на главную</Button>
      </Link>
    </div>
  );
}
