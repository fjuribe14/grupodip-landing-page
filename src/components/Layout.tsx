import { Outlet } from "react-router";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import WhatsappChat from "@/components/whatsappChat/WhatsappChat";

export default function Layout() {
  return (
    <div className="relative min-h-svh flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsappChat />
    </div>
  );
}
