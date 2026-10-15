import type { Metadata } from "next";
import NotFoundView from "@/components/NotFoundView";
import { NOINDEX } from "@/lib/site";

export const metadata: Metadata = { title: { absolute: "Página não encontrada | Méritum Hotéis" }, robots: NOINDEX ? { index: false, follow: false } : { index: false } };

export default function NotFound() {
  return <NotFoundView />;
}
