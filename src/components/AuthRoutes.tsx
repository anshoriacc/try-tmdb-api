import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuthStore from "../store/client/useAuth";

const AuthRoutes: React.FC = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
};

export default AuthRoutes;
