import { Outlet } from "react-router";
import Header from "@/components/Header";

export default function Layout() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <span className="font-bold">Logo</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
