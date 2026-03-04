import { useSEO } from "@/hooks/useSEO";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

/**
 * Componente SEO — colócalo al inicio de cada página.
 * Actualiza dinámicamente los meta tags del <head> sin dependencias externas.
 *
 * @example
 * <SEO
 *   title="Grupo Dip | Construcción y Servicios en Venezuela"
 *   description="..."
 *   keywords="empresa de construcción Venezuela, obras civiles..."
 *   canonicalPath="/"
 * />
 */
export function SEO(props: SEOProps) {
  useSEO(props);
  return null;
}
