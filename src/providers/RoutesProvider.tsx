import { createBrowserRouter, RouterProvider } from "react-router";

// Pages Imports
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function RoutesProvider() {
  return <RouterProvider router={router} />;
}
