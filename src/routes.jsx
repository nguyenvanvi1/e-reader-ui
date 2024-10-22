import { createBrowserRouter,Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Favorite from "./pages/Favorite/Favorite";
import Counter from "./pages/Counter/Counter";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LandingPage from "./pages/LandingPage/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/marketing" replace />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // This route to test the redux counter
  {
    path: "counter",
    element: <Counter />,
  },
  {
    path: "/marketing",
    element: <LandingPage/>,
  },
]);

export default router;
