import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Favorite from "./pages/Favorite/Favorite";
import Counter from "./pages/Counter/Counter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/favorite",
    element: <Favorite />,
  },
  // This route to test the redux counter
  {
    path:"counter",
    element: <Counter />,
  }
]);

export default router;
