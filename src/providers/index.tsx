import RoutesProvider from "@/providers/RoutesProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Providers() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="grupodip-theme">
      <RoutesProvider />
    </ThemeProvider>
  );
}
