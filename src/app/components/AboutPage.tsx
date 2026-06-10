import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Footer } from "./Footer";

/* ── helpers ── */
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── value card icons ── */
function IconPin() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 2C9.6 2 6 5.6 6 10C6 16 14 26 14 26C14 26 22 16 22 10C22 5.6 18.4 2 14 2Z" stroke="currentColor" strokeWidth="1.8" fill="none" />
      <circle cx="14" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}
function IconCrosshair() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.8" />
      <line x1="14" y1="2" x2="14" y2="7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="14" y1="21" x2="14" y2="26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="2" y1="14" x2="7" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="21" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IconWaves() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M3 9C6 6 9 12 12 9C15 6 18 12 21 9C24 6 25 8 25 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M3 14C6 11 9 17 12 14C15 11 18 17 21 14C24 11 25 13 25 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M3 19C6 16 9 22 12 19C15 16 18 22 21 19C24 16 25 18 25 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const values = [
  {
    icon: <IconPin />,
    title: "No Cap Creativity",
    body: "We got into this for the craft. Every cut, every color grade, every transition is intentional. We push creative limits so your content stands out in a saturated feed.",
  },
  {
    icon: <IconTarget />,
    title: "Stress-Free Collab",
    body: "We're the editors who actually reply fast, understand your brief the first time, and don't ghost you mid-revision. Working with us just feels... easy.",
  },
  {
    icon: <IconCrosshair />,
    title: "Real Results, Not Vibes",
    body: "We're not here to make pretty videos for the sake of it. Every edit is built with your KPIs in mind — views, shares, conversions, and growth.",
  },
  {
    icon: <IconWaves />,
    title: "We Flex for You",
    body: "Rush turnaround? 10 videos in a week? Format change last minute? We adapt. We scale. We deliver — no drama.",
  },
];

const stats = [
  {
    number: "300",
    label: "Projects Delivered",
    desc: "From 30-second reels to 60-minute documentaries.",
  },
  {
    number: "50K+",
    label: "Hours of Footage Edited",
    desc: "We've seen every type of raw file. We've fixed every mess.",
  },
  {
    number: "99%",
    label: "Client Satisfaction Rate",
    desc: "No revision nightmares. Just results that hit the brief.",
  },
  {
    number: "24/7",
    label: "Turnaround Mode",
    desc: "We work while the world sleeps so your content never waits.",
  },
];

/* ── main component ── */
export function AboutPage({ onNavigate }: { onNavigate: (p: string) => void }) {
  return (
    <div className="min-h-screen bg-background">

      {/* ══════════════════════════════════════
          1. HERO BANNER
      ══════════════════════════════════════ */}
      <section className="pt-24 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ minHeight: "340px" }}
        >
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&h=600&fit=crop"
            alt="Professional cinema camera"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Warm dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(30,16,8,0.88) 40%, rgba(30,16,8,0.45) 75%, rgba(30,16,8,0.1) 100%)",
            }}
          />
          {/* Text */}
          <div className="relative z-10 px-10 py-14 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              We Edit. We Elevate.<br />We Don't Miss.
            </h1>
            <p className="text-white/65 text-sm leading-relaxed max-w-xs">
              A video editing crew that lives and breathes content — based in
              Punjab, working globally.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          2. ABOUT US
      ══════════════════════════════════════ */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left – tall photo */}
          <FadeUp className="h-full">
            <div className="rounded-2xl overflow-hidden h-[420px] md:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=700&h=900&fit=crop"
                alt="Film crew on set"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>

          {/* Right – text */}
          <FadeUp delay={0.12} className="flex flex-col justify-center pt-4">
            <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-6">
              We Create Content<br />That Stops the Scroll
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We started as a small team of video editors with one obsession:
              making content that stops the scroll. Since then, we've grown into
              a full-scale video editing powerhouse — with editors, colorists,
              motion designers, and strategists working across India and the UAE.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              We've worked with gyms, restaurants, real estate brands, sports
              companies, hospitals, and everything in between. We don't just edit
              for aesthetics — we edit for outcomes. Your views. Your followers.
              Your revenue.
            </p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 border border-foreground/25 text-foreground text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-foreground hover:text-background transition-colors">
                OUR STORY
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => onNavigate("home")}
                className="flex items-center gap-2 border border-foreground/25 text-foreground text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-foreground hover:text-background transition-colors"
              >
                OUR SERVICES
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. OUR MISSION
      ══════════════════════════════════════ */}
      <section className="px-4 md:px-8 pb-10 max-w-7xl mx-auto">
        <FadeUp>
          <div
            className="rounded-2xl px-10 py-20 text-center"
            style={{ background: "#111111" }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Our Mission
            </h2>
            <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Make every brand impossible to ignore through the power of video.
              We believe every brand has a story worth watching. Through cinematic
              editing, creative storytelling, and high-impact visuals, we create
              content that captures attention, connects with audiences, and helps
              brands stand out in a crowded digital world.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ══════════════════════════════════════
          4. OUR VALUE
      ══════════════════════════════════════ */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
        {/* Label + headline */}
        <div className="grid md:grid-cols-[180px_1fr] gap-6 mb-14 items-start">
          <FadeUp>
            <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mt-2">
              Our Value
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
              We don't just edit videos.<br />
              We make your brand<br />
              impossible to ignore.
            </h2>
          </FadeUp>
        </div>

        {/* 4 value cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <FadeUp key={v.title} delay={i * 0.08}>
              <div className="flex flex-col gap-4">
                <div className="text-foreground/50">{v.icon}</div>
                <p className="font-bold text-foreground text-base">{v.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. THREE-PHOTO GRID
      ══════════════════════════════════════ */}
      <section className="px-4 md:px-8 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-3 h-64 md:h-80">
          <FadeUp className="h-full">
            <div className="rounded-2xl overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=600&h=500&fit=crop"
                alt="Film crew silhouettes"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="h-full">
            <div className="rounded-2xl overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1574717024453-354056afd6fc?w=600&h=500&fit=crop"
                alt="Video editing software"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.2} className="h-full">
            <div className="rounded-2xl overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=600&h=500&fit=crop"
                alt="Studio lighting setup"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. WHO WE ARE + STATS
      ══════════════════════════════════════ */}
      <section className="px-4 md:px-8 py-16 max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid md:grid-cols-[180px_1fr] gap-6 mb-16 items-start">
          <FadeUp>
            <p className="text-[10px] font-bold tracking-widest text-foreground/40 uppercase mt-2">
              Who We Are
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-8">
              Looking to create videos that people actually watch – all the way through?
            </h2>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 border border-foreground/25 text-foreground text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-foreground hover:text-background transition-colors">
                OUR STORY
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => onNavigate("home")}
                className="flex items-center gap-2 border border-foreground/25 text-foreground text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-foreground hover:text-background transition-colors"
              >
                OUR SERVICES
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </FadeUp>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-14">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.09}>
              <div className="flex flex-col gap-2">
                <span className="text-5xl md:text-6xl font-black text-foreground leading-none tracking-tight">
                  {s.number}
                </span>
                <span className="text-sm font-bold text-foreground mt-1">{s.label}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
