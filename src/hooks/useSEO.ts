import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

const SITE_URL = "https://grupodip.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.webp`;

export function useSEO({
  title,
  description,
  keywords,
  canonicalPath = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
}: SEOProps) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    // Title
    document.title = title;

    // Helper to upsert a meta tag
    function setMeta(
      selector: string,
      attr: string,
      value: string,
      attrName: "name" | "property" = "name",
    ) {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attr);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    }

    // Helper to upsert a link tag
    function setLink(rel: string, href: string) {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    }

    // Standard meta
    setMeta('meta[name="description"]', "description", description);
    if (keywords) {
      setMeta('meta[name="keywords"]', "keywords", keywords);
    }

    // Canonical
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta('meta[property="og:title"]', "og:title", title, "property");
    setMeta(
      'meta[property="og:description"]',
      "og:description",
      description,
      "property",
    );
    setMeta('meta[property="og:url"]', "og:url", canonicalUrl, "property");
    setMeta('meta[property="og:type"]', "og:type", ogType, "property");
    setMeta('meta[property="og:image"]', "og:image", ogImage, "property");
    setMeta('meta[property="og:locale"]', "og:locale", "es_VE", "property");
    setMeta(
      'meta[property="og:site_name"]',
      "og:site_name",
      "Grupo Dip",
      "property",
    );

    // Twitter Cards
    setMeta('meta[name="twitter:card"]', "twitter:card", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "twitter:title", title);
    setMeta(
      'meta[name="twitter:description"]',
      "twitter:description",
      description,
    );
    setMeta('meta[name="twitter:image"]', "twitter:image", ogImage);
  }, [title, description, keywords, canonicalPath, ogImage, ogType]);
}
