import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "@/context/AuthProvider";
import { MenuProvider } from "@/context/MenuProvider";
import { Landing } from "@/components/landing/Landing";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { NotFound } from "@/components/NotFound";

export default function App() {
  return (
    <AuthProvider>
      <MenuProvider>
        <div className="min-h-screen bg-cream font-body">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route index element={<AdminDashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </MenuProvider>
    </AuthProvider>
  );
}
