import { NextResponse } from "next/server";

/**
 * Recebe o formulário "Fale com a Méritum".
 * Envio por e-mail via Resend (https://resend.com), configurado por variáveis de ambiente:
 *   RESEND_API_KEY   chave da conta
 *   CONTACT_TO       e-mail que recebe os contatos (ex.: comercial@meritumhoteis.com.br)
 *   CONTACT_FROM     remetente verificado no Resend (ex.: site@meritumhoteis.com.br)
 * Sem essas variáveis o endpoint responde 503 e o site mostra a mensagem de erro.
 */

const FIELDS: Record<string, string> = {
  nome: "Nome", cargo: "Cargo", email: "E-mail", whatsapp: "WhatsApp", hotel: "Hotel",
  cidade: "Cidade", quartos: "Quartos", desafio: "Maior desafio", origem: "Página",
};

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const v = (k: string) => String(body[k] ?? "").trim().slice(0, 2000);
  const required = ["nome", "email", "whatsapp", "hotel", "cidade", "quartos"];
  if (required.some((k) => !v(k)) || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("email"))) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO, from = process.env.CONTACT_FROM;
  if (!key || !to || !from) {
    console.error("[contato] Envio não configurado (RESEND_API_KEY, CONTACT_TO, CONTACT_FROM).");
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const rows = Object.entries(FIELDS)
    .filter(([k]) => v(k))
    .map(([k, label]) => `<tr><td style="padding:4px 12px 4px 0;color:#5B6672">${label}</td><td style="padding:4px 0">${esc(v(k))}</td></tr>`)
    .join("");

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      reply_to: v("email"),
      subject: `Novo contato pelo site: ${v("hotel")} (${v("cidade")})`,
      html: `<table style="font-family:Arial,sans-serif;font-size:14px">${rows}</table>`,
    }),
  });
  if (!r.ok) {
    console.error("[contato] Falha no envio", r.status, await r.text());
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
