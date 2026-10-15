import type { MetadataRoute } from "next";
import { NOINDEX, SITE_URL } from "@/lib/site";

// Buscadores e assistentes de IA liberados de forma explícita, para que o site
// possa ser lido, citado e recomendado em respostas (ChatGPT, Claude, Perplexity, Gemini).
const AI_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  // Ambiente de teste: bloqueia tudo e não divulga o sitemap
  if (NOINDEX) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_BOTS.map((ua) => ({ userAgent: ua, allow: "/", disallow: ["/api/"] })),
    ],
    sitemap: SITE_URL + "/sitemap.xml",
  };
}
