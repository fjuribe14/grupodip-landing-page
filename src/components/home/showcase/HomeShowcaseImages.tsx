import { YEARS_OF_EXPERIENCE } from "@/constants";
import useI18n from "@/hooks/useI18n";

export default function HomeShowcaseImages() {
  const { t } = useI18n();
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="h-64 rounded-xl overflow-hidden shadow-lg">
            <div
              className="w-full h-full bg-cover bg-center bg-[url('/showcase/1.webp')]"
              data-alt="Close up of steel beam connection"
            ></div>
          </div>
          <div className="h-48 rounded-xl overflow-hidden shadow-lg">
            <div
              className="w-full h-full bg-cover bg-center bg-[url('/showcase/2.webp')]"
              data-alt="Engineer looking at blueprints on site"
            ></div>
          </div>
        </div>
        <div className="space-y-4 pt-8">
          <div className="h-48 rounded-xl overflow-hidden shadow-lg">
            <div
              className="w-full h-full bg-cover bg-center bg-[url('/showcase/3.webp')]"
              data-alt="Large yellow excavator in action"
            ></div>
          </div>
          <div className="h-64 rounded-xl overflow-hidden shadow-lg">
            <div
              className="w-full h-full bg-cover bg-center bg-[url('/showcase/4.webp')]"
              data-alt="Modern soccer stadium interior"
            ></div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-2xl flex flex-col items-center">
        <span className="text-5xl font-black">{YEARS_OF_EXPERIENCE}</span>
        <span className="text-xs uppercase font-bold tracking-widest text-center mt-2">
          {t("home.showcase.experience")}
        </span>
      </div>
    </div>
  );
}
