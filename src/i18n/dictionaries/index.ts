import type { Locale } from "../config";
import pt, { type Dict } from "./pt";
import es from "./es";
import en from "./en";

const DICTS: Record<Locale, Dict> = { pt, es, en };

export const getDict = (locale: Locale): Dict => DICTS[locale];
export type { Dict };

/** Preenche {chaves} de um texto: fill("Quarto {n}", { n: 2 }) → "Quarto 2" */
export const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
/** Singular ou plural com o número: plural(2, ["noite", "noites"]) → "2 noites" */
export const plural = (n: number, [one, many]: string[]) => `${n} ${n === 1 ? one : many}`;
