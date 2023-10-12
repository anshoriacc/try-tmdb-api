import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuthStore from "../store/client/useAuth";
import Navbar from "./Navbar";

const ProtectedRoutes: React.FC = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return (
    <>
      <Navbar />
      <section className="w-full max-w-[1200px] min-h-[calc(100vh-7rem)] mx-auto p-[1rem] space-y-4">
        <Outlet />
      </section>
    </>
  );
};

export default ProtectedRoutes;
