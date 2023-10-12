import { createBrowserRouter } from "react-router-dom";
import AuthRoutes from "./components/AuthRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import useAuthStore from "./store/client/useAuth";

const { isLoggedIn } = useAuthStore.getState();

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes isLoggedIn={isLoggedIn} />,
    children: [
      {
        path: "",
        element: <>home</>,
      },
    ],
  },
  {
    element: <AuthRoutes isLoggedIn={isLoggedIn} />,
    children: [
      {
        path: "login",
        element: <>login</>,
      },
    ],
  },
]);

export default router;
