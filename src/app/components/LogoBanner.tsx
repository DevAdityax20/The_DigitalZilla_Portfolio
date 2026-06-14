const clients = [
  {
    name: "RXN",
    svg: (
      <svg viewBox="0 0 80 32" fill="none" className="h-7 w-auto">
        <text x="0" y="25" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="28" fill="currentColor" letterSpacing="-1">RXN</text>
      </svg>
    ),
  },
  {
    name: "Property Buyers",
    svg: (
      <svg viewBox="0 0 176 32" fill="none" className="h-6 w-auto">
        <rect x="0" y="5" width="22" height="22" rx="3" fill="currentColor" opacity="0.85" />
        <text x="28" y="23" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fill="currentColor" letterSpacing="0.5">PROPERTY BUYERS</text>
      </svg>
    ),
  },
  {
    name: "GrowthX",
    svg: (
      <svg viewBox="0 0 122 32" fill="none" className="h-7 w-auto">
        <path d="M4 27L14 8L24 20L34 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="42" y="23" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="16" fill="currentColor" letterSpacing="-0.5">GrowthX</text>
      </svg>
    ),
  },
  {
    name: "ElevateHQ",
    svg: (
      <svg viewBox="0 0 134 32" fill="none" className="h-6 w-auto">
        <polygon points="16,4 29,28 3,28" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <text x="36" y="23" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="currentColor" letterSpacing="0.2">ElevateHQ</text>
      </svg>
    ),
  },
  {
    name: "Stellar Media",
    svg: (
      <svg viewBox="0 0 158 32" fill="none" className="h-6 w-auto">
        <path d="M16 3L18.9 11.6H28L20.5 16.9L23.4 25.5L16 20.2L8.6 25.5L11.5 16.9L4 11.6H13.1Z" fill="currentColor" opacity="0.9" />
        <text x="36" y="23" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="currentColor" letterSpacing="0.8">STELLAR MEDIA</text>
      </svg>
    ),
  },
  {
    name: "Vibe Studios",
    svg: (
      <svg viewBox="0 0 148 32" fill="none" className="h-7 w-auto">
        <circle cx="14" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="14" cy="16" r="4" fill="currentColor" />
        <text x="32" y="23" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="15" fill="currentColor" letterSpacing="-0.3">VIBE STUDIOS</text>
      </svg>
    ),
  },
  {
    name: "Nexus Films",
    svg: (
      <svg viewBox="0 0 146 32" fill="none" className="h-6 w-auto">
        <rect x="2" y="6" width="22" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12L8 20L18 16Z" fill="currentColor" />
        <text x="30" y="23" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fill="currentColor" letterSpacing="0.5">NEXUS FILMS</text>
      </svg>
    ),
  },
  {
    name: "Creatify",
    svg: (
      <svg viewBox="0 0 114 32" fill="none" className="h-6 w-auto">
        <path d="M14 4C7 4 2 9 2 16C2 23 7 28 14 28C19 28 23 25 25 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="30" y="23" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="currentColor" letterSpacing="-0.2">creatify</text>
      </svg>
    ),
  },
  {
    name: "Apex Creative",
    svg: (
      <svg viewBox="0 0 156 32" fill="none" className="h-6 w-auto">
        <path d="M2 28L14 4L26 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="7" y1="20" x2="21" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <text x="34" y="23" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="14" fill="currentColor" letterSpacing="0.5">APEX CREATIVE</text>
      </svg>
    ),
  },
  {
    name: "Framelab",
    svg: (
      <svg viewBox="0 0 120 32" fill="none" className="h-6 w-auto">
        <rect x="2" y="2" width="28" height="28" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="7" y="7" width="18" height="18" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <text x="36" y="23" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="15" fill="currentColor" letterSpacing="-0.3">framelab</text>
      </svg>
    ),
  },
];

/* ── CSS-only marquee — zero JS overhead, runs on compositor thread ── */
const marqueeCSS = `
@keyframes marquee-left {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes marquee-right {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}
.marquee-track {
  display: flex;
  width: max-content;
  will-change: transform;
}
.marquee-left  { animation: marquee-left  32s linear infinite; }
.marquee-right { animation: marquee-right 32s linear infinite; }
`;

function LogoTrack({ reverse = false }: { reverse?: boolean }) {
  // Only 2x duplication needed for a seamless CSS loop
  const doubled = [...clients, ...clients];

  return (
    <div className="flex overflow-hidden">
      <div
        className={`marquee-track ${reverse ? 'marquee-right' : 'marquee-left'}`}
      >
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 text-foreground/25 hover:text-foreground/65 transition-colors duration-300 cursor-default select-none"
            style={{ marginRight: 80 }}
          >
            {client.svg}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LogoBanner() {
  return (
    <section className="py-8 border-y border-border/40 overflow-hidden bg-background relative">
      {/* Inject CSS keyframes once */}
      <style>{marqueeCSS}</style>

      {/* Gradient fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--background, #fff) 40%, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--background, #fff) 40%, transparent)" }}
      />

      <div className="flex flex-col gap-7">
        <LogoTrack reverse={false} />
        <LogoTrack reverse={true} />
      </div>
    </section>
  );
}
