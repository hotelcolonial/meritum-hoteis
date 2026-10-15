import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./site.css";
import Footer from "@/components/Footer";
import Behaviors from "@/components/Behaviors";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { organizationLd, websiteLd, SEO } from "@/lib/seo";

const serif = localFont({
  variable: "--f-serif",
  display: "swap",
  src: [
    { path: "./fonts/newsreader-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/newsreader-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/newsreader-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/newsreader-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "./fonts/newsreader-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/newsreader-latin-600-italic.woff2", weight: "600", style: "italic" },
  ],
});
const sans = localFont({
  variable: "--f-sans",
  display: "swap",
  src: [
    { path: "./fonts/jost-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "./fonts/jost-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/jost-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/jost-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/jost-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SEO.home.title, template: "%s | Méritum Hotéis" },
  description: SEO.home.description,
  applicationName: "Méritum Hotéis",
  formatDetection: { telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification: {
    // Preencher depois de cadastrar o domínio no Google Search Console e no Bing Webmaster Tools
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = { themeColor: "#052744" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={[organizationLd(), websiteLd()]} />
        <div className="mn-root">
          <a href="#mn-conteudo" className="mn-skip mn-focus">Pular para o conteúdo</a>
          {children}
          <Footer />
        </div>
        <Behaviors />
      </body>
    </html>
  );
}
