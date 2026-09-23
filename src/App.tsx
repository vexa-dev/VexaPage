import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/Home/HomePage";
import { PoliciesPage } from "./pages/Policies/PoliciesPage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";

/** Redirige las URLs antiguas (*.html) a las nuevas rutas conservando el #ancla. */
function LegacyRedirect({ to }: { to: string }) {
  const { hash } = useLocation();
  return <Navigate to={`${to}${hash}`} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="proyectos" element={<ProjectsPage />} />
          <Route path="politicas" element={<PoliciesPage />} />
        </Route>
        <Route path="index.html" element={<LegacyRedirect to="/" />} />
        <Route path="proyectos.html" element={<LegacyRedirect to="/proyectos" />} />
        <Route path="politicas.html" element={<LegacyRedirect to="/politicas" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
