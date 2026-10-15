"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { localePath } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

/** next/link que mantém o idioma: em /es e /en os links internos ganham o prefixo; em português nada muda. */
export default function LocaleLink({ href, ...rest }: ComponentProps<typeof Link>) {
  const locale = useLocale();
  return <Link href={typeof href === "string" ? localePath(locale, href) : href} {...rest} />;
}
