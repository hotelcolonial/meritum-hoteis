import { llmsText } from "@/lib/llms";

// Resumo do site em português para assistentes de IA (padrão llms.txt). Os outros idiomas ficam em /{idioma}/llms.txt.
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsText("pt"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
