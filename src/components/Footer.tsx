import Link from "./LocaleLink";
import { Wordmark } from "./icons";
import { HOTELS, ORG, ROUTES } from "@/lib/site";
import type { Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionaries";

const social = [
  {
    key: "instagram", label: "Instagram",
    icon: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></>),
  },
  {
    key: "facebook", label: "Facebook",
    icon: <path d="M15 3h-2.5C10.6 3 10 4.6 10 6v2H8v3h2v10h3V11h2.5l.5-3H13V6.2c0-.6.2-1.2 1-1.2h2V3z" />,
  },
  {
    key: "linkedin", label: "LinkedIn",
    icon: (<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M11.5 17v-3.4c0-1.4.9-2.4 2.2-2.4s2.1 1 2.1 2.4V17" /><line x1="7.5" y1="10.5" x2="7.5" y2="17" /><circle cx="7.5" cy="7.3" r="0.6" fill="currentColor" stroke="none" /></>),
  },
] as const;

export default function Footer({ locale }: { locale: Locale }) {
  const links = social.filter((s) => ORG.social[s.key]);
  const d = getDict(locale);
  return (
    <>
      <footer id="mn-footer" className="ft">
        <div className="mn-ftgrid">
          <div className="ft__brand">
            <Link href="/" className="mn-focus" style={{ textDecoration: "none", alignSelf: "flex-start", display: "inline-flex" }}>
              <Wordmark style={{ fontSize: "30px", color: "#052744" }} label={d.nav.homeLink} />
            </Link>
            <div className="mn-ftaddr">
              <address className="ft__addrblock" style={{ fontStyle: "normal" }}>
                <span className="ft__title">{ORG.name}</span>
                <span className="ft__line">{ORG.street}</span>
                <span className="ft__line">{ORG.city}, {ORG.region}, {ORG.postalCode}</span>
                <a className="ft__line" href={`mailto:${ORG.email}`}>{ORG.email}</a>
              </address>
              <div className="ft__addrblock">
                <span className="ft__title">{d.footer.properties}</span>
                {HOTELS.map((h) => (
                  <Link key={h.key} href={h.href} className="mn-focus ft__prop">{h.name}</Link>
                ))}
              </div>
            </div>
            {links.length > 0 && (
              <div className="ft__social">
                {links.map((s) => (
                  <a key={s.key} href={ORG.social[s.key]} className="mn-focus ft__icon" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">{s.icon}</svg>
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="ft__formcol">
            <nav className="mn-ftnav" aria-label={d.footer.label}>
              <Link href={ROUTES.meritum} className="mn-ftnav__link mn-focus">{d.nav.meritum}</Link>
              <Link href="/#portfolio" className="mn-ftnav__link mn-focus">{d.nav.hotels}</Link>
              <Link href={ROUTES.gestao} className="mn-ftnav__link mn-focus">{d.nav.gestao}</Link>
              <Link href={ROUTES.bora} className="mn-ftnav__link mn-focus">{d.footer.bora}</Link>
              <Link href={ROUTES.contato} className="mn-ftnav__link mn-focus">{d.nav.contato}</Link>
            </nav>
            <Link href={ROUTES.contato + "#proprietarios"} className="mn-ftcta mn-focus">
              {d.nav.talk} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </footer>
      <div className="ft__bottom">
        <div className="mn-ftbottom">
          <div className="ft__legal">
            {/* A CONFIRMAR: páginas de Política de Privacidade e Termos de Uso */}
            <span>{d.footer.privacy}</span>
            <span>{d.footer.terms}</span>
          </div>
          <span className="ft__copy">
            © {new Date().getFullYear()} {/* " " junto do texto: mesmo HTML de antes (um nó de texto a menos) */}
            {ORG.legalName}{" " + d.footer.rights}<br />CNPJ {ORG.cnpj}
          </span>
          <span className="ft__lang">{locale.toUpperCase()}</span>
        </div>
      </div>
    </>
  );
}
