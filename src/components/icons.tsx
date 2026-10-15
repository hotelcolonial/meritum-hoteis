import type { CSSProperties, ReactNode } from "react";

function Svg({ size, stroke, style, children }: { size: number; stroke: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.5} aria-hidden="true" style={{ flexShrink: 0, ...style }}>
      {children}
    </svg>
  );
}

const mr = { marginRight: 7 };

export const StarIcon = () => (
  <Svg size={14} stroke="currentColor" style={mr}>
    <polygon points="12 3 14.5 9 21 9.3 16 13.5 17.7 20 12 16.3 6.3 20 8 13.5 3 9.3 9.5 9" />
  </Svg>
);

const calPaths = (
  <>
    <rect x={3} y={4.5} width={18} height={16} rx={1} />
    <line x1={3} y1={9} x2={21} y2={9} />
    <line x1={8} y1={2.5} x2={8} y2={6} />
    <line x1={16} y1={2.5} x2={16} y2={6} />
  </>
);
const personPaths = (
  <>
    <circle cx={12} cy={8} r={3.4} />
    <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
  </>
);

export const CalSmIcon = () => <Svg size={14} stroke="currentColor" style={mr}>{calPaths}</Svg>;
export const PersonSmIcon = () => <Svg size={14} stroke="currentColor" style={mr}>{personPaths}</Svg>;
export const CalIcon = () => <Svg size={16} stroke="rgba(255,255,255,0.7)">{calPaths}</Svg>;
export const PersonIcon = () => <Svg size={16} stroke="rgba(255,255,255,0.7)">{personPaths}</Svg>;
export const ChevWhite = () => (
  <Svg size={13} stroke="rgba(255,255,255,0.85)">
    <polyline points="6 9 12 15 18 9" />
  </Svg>
);
export const CheckIcon = () => (
  <svg className="bk-opt__check" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2.5 7.5l3 3 6-7" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
export const CloseIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" aria-hidden="true">
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
);

export function Wordmark({ style, label = "Méritum Hotéis, página inicial" }: { style?: CSSProperties; label?: string }) {
  return (
    <>
      <span className="mn-wordmark" style={style} aria-hidden="true">
        <span className="mn-wordmark__a">Méritum</span>
        <span className="mn-wordmark__b">Hotéis</span>
      </span>
      <span className="sr-only">{label}</span>
    </>
  );
}
