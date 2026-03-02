import { YEARS_OF_EXPERIENCE } from "@/constants";
import useI18n from "@/hooks/useI18n";

export default function HomeShowcaseImages() {
  const { t } = useI18n();
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="h-64 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/showcase/1.webp"
              alt="Close up of steel beam connection"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="h-48 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/showcase/2.webp"
              alt="Engineer looking at blueprints on site"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="space-y-4 pt-8">
          <div className="h-48 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/showcase/3.webp"
              alt="Large yellow excavator in action"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="h-64 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/showcase/4.webp"
              alt="Modern soccer stadium interior"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
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
