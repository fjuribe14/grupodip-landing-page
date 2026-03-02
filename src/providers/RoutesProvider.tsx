import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "@/components/Layout";
// Pages Imports
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    errorElement: <NotFound />,
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default function RoutesProvider() {
  return <RouterProvider router={router} />;
}
