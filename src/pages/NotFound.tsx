import { Link } from "react-router";
import Imagotype from "@/components/Imagotype";
import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "@/components/ui/typography";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-radial from-primary to-transparent">
      <Imagotype size={"lg"} className="mb-16" />
      <div className="flex flex-col items-center justify-center gap-2">
        <TypographyH1>404</TypographyH1>
        <TypographyH2>Page Not Found</TypographyH2>
        <TypographyP>The page you are looking for does not exist.</TypographyP>
        <Button className="mt-4" variant="outline" asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
