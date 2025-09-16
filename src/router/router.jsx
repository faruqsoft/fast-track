import { createBrowserRouter } from "react-router";
import mainLayouts from "../layouts/mainLayouts";
import Home from "../pages/Home/Home/Home";

 export const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayouts,
    children: [
      { index:true,
         Component: Home,
         }
    ],
  },
]);