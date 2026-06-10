import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Footer } from "./Footer";

const faqs = [
  {
    q: "What types of videos do you specialise in?",
    a: "We specialise in social media reels & shorts, brand films & commercials, event coverage & highlight reels, YouTube video editing, UGC content, and motion graphics. Basically — if it moves on a screen, we make it slap.",
  },
  {
    q: "How long does a typical project take?",
    a: "Turnaround depends on the scope. Short-form reels can be delivered in 24–48 hours. Brand films and longer edits typically take 5–10 business days. We always discuss timelines upfront so there are zero surprises.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Absolutely. We have a full team operating out of Dubai, UAE, and work with clients across the globe. Time zones are not a barrier — we work while the world sleeps.",
  },
  {
    q: "What do I need to provide to get started?",
    a: "Just your raw footage (or a brief if we're producing from scratch), your brand guidelines, and a clear idea of what you want to achieve. We'll take it from there — including scripting, storyboarding, editing, colour grading, and sound design.",
  },
  {
    q: "How many revisions are included?",
    a: "We offer unlimited revisions until you're genuinely happy. We don't believe in cookie-cutter edits — every project gets treated like it's going on our own reel.",
  },
  {
    q: "What's your pricing model?",
    a: "Pricing is project-based and depends on scope, length, and complexity. We offer retainer packages for clients who need ongoing content. Reach out for a custom quote — we'll find a package that fits your budget and goals.",
  },
  {
    q: "Do you offer motion graphics and animation?",
    a: "Yes! Motion graphics, kinetic typography, animated logos, lower thirds, and full 2D animation packages are all part of our toolkit.",
  },
  {
    q: "How do I share raw footage with you?",
    a: "We accept footage via Google Drive, Dropbox, WeTransfer, or any major cloud platform. For larger projects we can set up a shared folder system so collaboration stays seamless throughout.",
  },
];

function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Animated separator line */}
      <motion.div
        className="h-px bg-foreground/10 w-full origin-left"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.07 + 0.1, ease: "easeOut" }}
      />

      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-5 py-7 text-left group"
      >
        {/* Number */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.07 + 0.2 }}
          className="text-xs font-semibold text-[#FF6B35] pt-1 flex-shrink-0 w-8"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>

        {/* Question */}
        <span className="flex-1 text-lg md:text-xl font-semibold text-foreground leading-snug group-hover:text-[#FF6B35] transition-colors duration-200">
          {item.q}
        </span>

        {/* Toggle icon */}
        <div
          className={`flex-shrink-0 w-9 h-9 rounded-full border border-foreground/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#FF6B35] group-hover:text-[#FF6B35] ${
            open ? "bg-[#FF6B35] border-[#FF6B35] text-white rotate-45" : "text-foreground"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1V13M1 7H13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-13 pb-7 pl-[52px]">
              {/* Orange accent bar */}
              <motion.div
                className="h-0.5 bg-[#FF6B35] rounded-full mb-4 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ width: "48px" }}
              />
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQsPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl bg-[#FF6B35] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full opacity-5 blur-3xl bg-[#FF6B35] pointer-events-none" />

        <div className="container mx-auto max-w-4xl">
          <motion.button
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onBack}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M15 9H3M3 9L8 4M3 9L8 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </motion.button>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-widest text-[#FF6B35] uppercase mb-4"
          >
            Got Questions?
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-5xl md:text-7xl font-black text-foreground leading-tight mb-6"
          >
            Frequently
            <br />
            <span className="relative inline-block">
              Asked
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="14"
                viewBox="0 0 200 14"
                fill="none"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M2 10C50 4 100 2 198 8"
                  stroke="#FF6B35"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
              </svg>
            </span>{" "}
            Questions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl leading-relaxed"
          >
            Everything you need to know before we start making your content
            slap. Can't find your answer?{" "}
            <a href="#" className="text-[#FF6B35] underline underline-offset-2">
              Just reach out.
            </a>
          </motion.p>
        </div>
      </div>

      {/* FAQ list */}
      <div className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}

          {/* Final separator */}
          <div className="h-px bg-foreground/10 mt-0" />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-foreground rounded-3xl p-8 md:p-12"
          >
            <div>
              <p className="text-background text-xl md:text-2xl font-bold mb-1">
                Still have questions?
              </p>
              <p className="text-background/60 text-sm">
                We're happy to walk you through everything.
              </p>
            </div>
            <button className="flex-shrink-0 bg-[#FF6B35] text-white px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#ff5722] transition-colors flex items-center gap-2">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
