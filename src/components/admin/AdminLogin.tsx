import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Coffee, Lock } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/hooks/useAuth";

export function AdminLogin() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isAuthenticated) return <Navigate to="/admin" replace />;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (login(username, password)) {
      setError("");
      navigate("/admin", { replace: true });
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-espresso">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-2 mb-8 justify-center text-cream">
          <Lock size={20} className="text-brass" aria-hidden="true" />
          <h1 className="text-xl italic font-display">
            <Coffee size={18} className="inline mr-1 -mt-1" aria-hidden="true" />
            Админ-панель
          </h1>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4 p-8 rounded-sm bg-espressoDark">
          <Input
            tone="dark"
            label="Логин"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            tone="dark"
            label="Пароль"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p role="alert" className="text-xs text-clayLight font-body">
              {error}
            </p>
          )}

          <Button type="submit" className="w-full focus-visible:ring-offset-espressoDark">
            Войти
          </Button>

          <p className="text-xs text-center text-cream/60 font-body">Демо-доступ: admin / admin123</p>
        </form>

        <Link to="/" className="block w-full text-center text-xs mt-6 text-cream/70 hover:text-cream font-body">
          ← Вернуться на сайт
        </Link>
      </div>
    </div>
  );
}
