import { isLocale } from "@/i18n/config";
import { llmsText } from "@/lib/llms";

// /es/llms.txt e /en/llms.txt: resumo do site no idioma, só quando ele estiver publicado (404 antes disso)
export const dynamic = "force-static";
export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }];
}

export async function GET(_req: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const text = isLocale(locale) && locale !== "pt" ? llmsText(locale) : null;
  if (!text) return new Response("Not found", { status: 404, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
