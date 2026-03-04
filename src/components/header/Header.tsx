import { Link } from "react-router";
import HeaderNavbarDesktop from "@/components/header/HeaderNavbarDesktop";
import HeaderNavbarMobile from "@/components/header/HeaderNavbarMobile";
import Imagotype from "@/components/Imagotype";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="relative container mx-auto px-6 h-20 flex items-center justify-between gap-5">
        <Link to="/">
          <div className="w-fit flex items-center justify-center absolute inset-0 z-50 px-6">
            <Imagotype size={"lg"} />
          </div>
        </Link>
        <HeaderNavbarDesktop />
        <HeaderNavbarMobile />
      </div>
    </header>
  );
}
