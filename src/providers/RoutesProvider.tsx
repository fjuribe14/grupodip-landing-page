import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "@/components/Layout";

// Import Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import ContactUs from "@/pages/ContactUs";

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
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default function RoutesProvider() {
  return <RouterProvider router={router} />;
}
