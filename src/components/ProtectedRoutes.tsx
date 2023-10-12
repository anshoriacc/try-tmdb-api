import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
