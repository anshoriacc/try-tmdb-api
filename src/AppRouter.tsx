import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AuthRoutes from "./components/AuthRoutes";
import ProtectedRoutes from "./components/ProtectedRoutes";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AuthRoutes />,
    children: [
      {
        path: "signin",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
