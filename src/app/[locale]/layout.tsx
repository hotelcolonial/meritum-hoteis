import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import Script from "next/script";
import "../globals.css";
import "../site.css";
import Footer from "@/components/Footer";
import Behaviors from "@/components/Behaviors";
import HashRedirect from "@/components/HashRedirect";
import WhatsAppButton from "@/components/WhatsAppButton";
import AsksuiteDock from "@/components/AsksuiteDock";
import JsonLd from "@/components/JsonLd";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getDict } from "@/i18n/dictionaries";
import { HTML_LANG, LOCALES, isLocale, type Locale } from "@/i18n/config";
import { NOINDEX, SITE_URL } from "@/lib/site";
import { organizationLd, seoText, websiteLd } from "@/lib/seo";

const serif = localFont({
  variable: "--f-serif",
  display: "swap",
  src: [
    { path: "../fonts/newsreader-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/newsreader-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/newsreader-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/newsreader-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/newsreader-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/newsreader-latin-600-italic.woff2", weight: "600", style: "italic" },
  ],
});
const sans = localFont({
  variable: "--f-sans",
  display: "swap",
  src: [
    { path: "../fonts/jost-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/jost-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/jost-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/jost-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/jost-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

// Os três idiomas são gerados no build. Outro prefixo não chega aqui: o proxy manda tudo o mais para /pt
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const home = seoText("home", isLocale(locale) ? locale : "pt");
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: home.title, template: "%s | Méritum Hotéis" },
    description: home.description,
    applicationName: "Méritum Hotéis",
    formatDetection: { telephone: false },
    robots: NOINDEX
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    verification: {
      // Preencher depois de cadastrar o domínio no Google Search Console e no Bing Webmaster Tools
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
      other: process.env.NEXT_PUBLIC_BING_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } : undefined,
    },
  };
}

export const viewport: Viewport = { themeColor: "#052744", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default async function RootLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  return (
    <html lang={HTML_LANG[locale]} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <LocaleProvider locale={locale}>
          <JsonLd data={[organizationLd(locale), websiteLd(locale)]} />
          <div className="mn-root">
            <a href="#mn-conteudo" className="mn-skip mn-focus">{getDict(locale).nav.skip}</a>
            {children}
            <Footer locale={locale} />
          </div>
          <Behaviors />
          <WhatsAppButton />
          <AsksuiteDock />
          {/* Chat de atendimento Asksuite (carrega depois que a página fica interativa) */}
          <Script id="script-infochat" src="https://cdn.asksuite.com/infochat.js?dataConfig=https://control.asksuite.com/api/companies/hotelcolonialiguacu" strategy="afterInteractive" />
          {/* URLs do site antigo (/#/a-meritum...) só existiam em português */}
          {locale === "pt" && <HashRedirect />}
        </LocaleProvider>
      </body>
    </html>
  );
}
