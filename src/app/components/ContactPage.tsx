import { useState, useRef } from "react";
import { Footer } from "./Footer";
import { motion, useInView } from "motion/react";

function ClapperboardIllustration() {
  return (
    <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Main board body */}
      <rect x="60" y="90" width="220" height="165" rx="6" fill="#1a1a1a" />
      {/* Board inner lighter area */}
      <rect x="68" y="130" width="204" height="118" rx="4" fill="#2a2a2a" />

      {/* Ruled lines on board */}
      {[0,1,2,3,4].map(i => (
        <line key={i} x1="68" y1={148 + i * 22} x2="272" y2={148 + i * 22} stroke="#3a3a3a" strokeWidth="1" />
      ))}

      {/* Text labels on board */}
      <text x="80" y="148" fill="#888" fontSize="8" fontFamily="monospace">PROD.</text>
      <text x="130" y="148" fill="#ccc" fontSize="8" fontFamily="monospace">THE DIGITAL ZILLA</text>
      <text x="80" y="170" fill="#888" fontSize="8" fontFamily="monospace">ROLL</text>
      <text x="130" y="170" fill="#ccc" fontSize="8" fontFamily="monospace">01</text>
      <text x="180" y="170" fill="#888" fontSize="8" fontFamily="monospace">SCENE</text>
      <text x="220" y="170" fill="#ccc" fontSize="8" fontFamily="monospace">01A</text>
      <text x="80" y="192" fill="#888" fontSize="8" fontFamily="monospace">DIRECTOR:</text>
      <text x="155" y="192" fill="#ccc" fontSize="8" fontFamily="monospace">Tajinder Singh</text>
      <text x="80" y="214" fill="#888" fontSize="8" fontFamily="monospace">CAMERA:</text>
      <text x="155" y="214" fill="#ccc" fontSize="8" fontFamily="monospace">A</text>
      <text x="80" y="236" fill="#888" fontSize="8" fontFamily="monospace">DATE:</text>
      <text x="130" y="236" fill="#ccc" fontSize="8" fontFamily="monospace">2026</text>
      <text x="180" y="236" fill="#888" fontSize="8" fontFamily="monospace">Day·Night</text>

      {/* Clapper strips on top - black white alternating */}
      {/* Base strip */}
      <rect x="60" y="68" width="220" height="26" rx="3" fill="#111" />
      {/* White stripe sections */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={i} x={60 + i * 28} y="68" width="14" height="26" fill={i % 2 === 0 ? "#fff" : "#111"} />
      ))}
      <rect x="272" y="68" width="8" height="26" fill="#111" />

      {/* Moving clapper arm - angled */}
      <g transform="rotate(-22, 60, 68)">
        <rect x="56" y="42" width="224" height="22" rx="3" fill="#111" />
        {[0,1,2,3,4,5,6,7].map(i => (
          <rect key={i} x={60 + i * 28} y="42" width="14" height="22" fill={i % 2 === 0 ? "#fff" : "#111"} />
        ))}
      </g>

      {/* Hinge screw */}
      <circle cx="64" cy="79" r="5" fill="#555" />
      <circle cx="64" cy="79" r="2" fill="#333" />

      {/* Camera lens circle hint */}
      <circle cx="272" cy="200" r="28" fill="#111" stroke="#333" strokeWidth="2" />
      <circle cx="272" cy="200" r="20" fill="#0a0a0a" stroke="#444" strokeWidth="1.5" />
      <circle cx="272" cy="200" r="12" fill="#111" stroke="#555" strokeWidth="1" />
      <circle cx="266" cy="194" r="3" fill="#666" opacity="0.5" />
    </svg>
  );
}

function AnimatedField({ label, type = "text", multiline = false }: { label: string; type?: string; multiline?: boolean }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative pb-1">
      <label
        className={`absolute left-0 transition-all duration-200 pointer-events-none text-foreground/50 ${
          focused || value ? "-top-5 text-xs text-[#FF6B35]" : "top-2 text-sm"
        }`}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={5}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent outline-none resize-none text-sm text-foreground pt-2 border-b border-foreground/20 focus:border-foreground transition-colors duration-200"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent outline-none text-sm text-foreground py-2 border-b border-foreground/20 focus:border-foreground transition-colors duration-200"
        />
      )}
      {/* Animated focus underline */}
      <div
        className="absolute bottom-0 left-0 h-px bg-foreground transition-all duration-300 origin-left"
        style={{ width: focused ? "100%" : "0%" }}
      />
    </div>
  );
}

const offices = [
  {
    city: "JALANDHAR",
    lines: [
      "India – Shop No. 130, Civil Line,",
      "Ranjit Nagar, Jalandhar, Punjab",
      "144001",
    ],
    phone: "+(91) 8559 060 809 (IND)",
  },
  {
    city: "MOHALI",
    lines: [
      "1st floor, R&R Tower, 298F, Phase",
      "8B, Industrial Area, Sector 74,",
      "Sahibzada Ajit Singh Nagar, Punjab",
      "160055",
    ],
    phone: "+(91) 99716 69425(IND)",
  },
  {
    city: "DUBAI",
    lines: [
      "603 Garhoud View, Al",
      "Garhoud, Dubai – United Arab",
      "Emirates",
    ],
    phone: "+(971) 522957279 (UAE)",
  },
  {
    city: "Ludhiana",
    lines: [
      "Office No. 404, 4th Floor, 100",
      "Market, SCO 22–23, Feroze Gandhi",
      "Market, Ludhiana 141001",
    ],
    phone: "9877579352",
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ContactPage({ onBack }: { onBack: () => void }) {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">

      {/* ── HERO ── */}
      <section className="pt-28 pb-0 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-start gap-8">

          {/* Left – headline */}
          <div className="pt-8">
            <motion.button
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              onClick={onBack}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </motion.button>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] mb-8"
            >
              Let's Turn Ideas<br />Into Reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-muted-foreground text-sm leading-relaxed max-w-xs"
            >
              We are open and available to take on new projects.&nbsp; Let's talk vision !
            </motion.p>
          </div>

          {/* Right – clapperboard illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-end items-start pt-4 h-64 md:h-72"
          >
            <ClapperboardIllustration />
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT FORM + INFO ── */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left – contact info */}
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-10">
              Get in Touch<br />With Us
            </h2>

            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-2">Address</p>
                <p className="text-sm text-foreground leading-relaxed">
                  India – Shop No. 130, Civil Line, Ranjit<br />
                  Nagar, Jalandhar, Punjab 144001
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-2">Email</p>
                <a href="mailto:info@thedigitalzilla.com" className="text-sm text-foreground hover:text-[#FF6B35] transition-colors">
                  info@thedigitalzilla.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-2">Phone</p>
                <p className="text-sm text-foreground">+(91) 8559 060 809</p>
              </div>
            </div>
          </FadeUp>

          {/* Right – form */}
          <FadeUp delay={0.1}>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <div className="w-14 h-14 rounded-full bg-[#FF6B35] flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-foreground">Message sent!</p>
                <p className="text-sm text-muted-foreground">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-10"
                onSubmit={e => { e.preventDefault(); setSent(true); }}
              >
                <div className="grid grid-cols-2 gap-8">
                  <AnimatedField label="Name" />
                  <AnimatedField label="Email" type="email" />
                </div>
                <AnimatedField label="Message" multiline />

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#FF6B35] hover:text-white transition-colors duration-200 group"
                  >
                    SEND MESSAGE
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="h-px bg-foreground/8 mx-6 md:mx-12 lg:mx-20" />

      {/* ── OFFICE LOCATIONS ── */}
      <section className="px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {offices.map((office, i) => (
            <FadeUp key={office.city} delay={i * 0.08}>
              <p className="text-xs font-black tracking-widest text-foreground uppercase mb-4">
                {office.city}
              </p>
              <div className="flex flex-col gap-0.5 mb-4">
                {office.lines.map((line, j) => (
                  <p key={j} className="text-xs text-muted-foreground leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
              <p className="text-xs text-foreground/70">{office.phone}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── MAP ── */}
      <div className="w-full h-72 md:h-96 relative overflow-hidden">
        <iframe
          title="The Digital Zilla Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13716.56!2d75.5762!3d31.3260!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747ae15b7%3A0xd9f07d7dc1b6fab0!2sCivil%20Lines%2C%20Jalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1686000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* "Open in Maps" pill overlay */}
        <a
          href="https://maps.google.com/?q=Civil+Lines+Jalandhar+Punjab"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-4 bg-white shadow-md text-foreground text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 hover:shadow-lg transition-shadow"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1C4.8 1 3 2.8 3 5C3 7.5 7 13 7 13C7 13 11 7.5 11 5C11 2.8 9.2 1 7 1Z" stroke="#FF6B35" strokeWidth="1.5" />
            <circle cx="7" cy="5" r="1.5" stroke="#FF6B35" strokeWidth="1.5" />
          </svg>
          Open in Maps ↗
        </a>
      </div>

      <Footer />
    </div>
  );
}
