import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "@/components/Layout";
// Pages Imports
import Home from "@/pages/Home";

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
