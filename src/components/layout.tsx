import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <span className="font-bold">Logo</span>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <span className="font-bold">Logo</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
