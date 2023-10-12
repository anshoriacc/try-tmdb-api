import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthRoutes = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
};

export default AuthRoutes;
