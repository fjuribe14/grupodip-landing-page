import { createBrowserRouter, RouterProvider } from "react-router";

// Pages Imports
import Home from "@/pages/Home";
import Layout from "@/components/Layout";

const router = createBrowserRouter([
  {
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
