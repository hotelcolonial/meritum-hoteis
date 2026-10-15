import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SEO } from "@/lib/seo";

const PRIORITY: Record<string, number> = { home: 1, colonial: 0.9, pousada: 0.9, villa: 0.8, autopark: 0.8, gestao: 0.8, meritum: 0.7, contato: 0.6, bora: 0.6, reserva: 0.4, hospede: 0.4 };

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(SEO).map(([k, p]) => ({
    url: SITE_URL + (p.path === "/" ? "" : p.path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: PRIORITY[k] ?? 0.5,
    images: [SITE_URL + p.image],
  }));
}
