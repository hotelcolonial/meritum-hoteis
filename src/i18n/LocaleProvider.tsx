"use client";

import { createContext, useContext, type ReactNode } from "react";
import { DEFAULT_LOCALE, type Locale } from "./config";
import { getDict, type Dict } from "./dictionaries";

const Ctx = createContext<Locale>(DEFAULT_LOCALE);

/** Idioma da página para os componentes de cliente (cabeçalho, barra de reservas, links...). */
export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <Ctx.Provider value={locale}>{children}</Ctx.Provider>;
}

export const useLocale = (): Locale => useContext(Ctx);
export const useDict = (): Dict => getDict(useContext(Ctx));
