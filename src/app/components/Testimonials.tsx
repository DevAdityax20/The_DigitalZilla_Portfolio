import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Best editing team we've worked with, no contest. Briefs are understood immediately, delivery is fast, and the output is cinema-level quality every single time.",
    author: "CEO @ Property Buyers Australia",
  },
  {
    quote:
      "They transformed our raw footage into something we're genuinely proud of. The attention to detail and creative instincts are unmatched.",
    author: "Founder @ GrowthX Media",
  },
  {
    quote:
      "Our Instagram reach went up 340% in 3 months after we started working with The Digital Zilla. These guys know what they're doing.",
    author: "Marketing Director @ ElevateHQ",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Testimonials
          </h2>
          <span className="text-2xl">🎙️</span>
        </div>

        {/* Scrolling ticker – pure CSS for zero JS overhead */}
        <div className="relative mb-16 overflow-hidden border-y border-border py-4">
          <style>{`
            @keyframes ticker-scroll {
              from { transform: translateX(0); }
              to   { transform: translateX(-50%); }
            }
            .ticker-track {
              display: flex;
              width: max-content;
              animation: ticker-scroll 20s linear infinite;
              will-change: transform;
            }
          `}</style>
          <div className="ticker-track">
            {[...Array(2)].map((_, gi) => (
              <div key={gi} className="flex gap-8 items-center">
                {["VIDEO EDITING", "REELS", "BRAND FILMS", "COMMERCIALS", "EVENT COVERAGE", "YOUTUBE CONTENT", "MOTION GRAPHICS"].map(
                  (item, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold tracking-widest text-muted-foreground uppercase flex items-center gap-4"
                    >
                      {item}
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Big stat */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-4">
              Words From The Ones Who Know Us Best
            </p>
            <div className="text-7xl md:text-8xl font-black text-foreground leading-none">
              +340%
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Average Reel Reach Increase
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <blockquote className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              "{testimonials[0].quote}"
            </blockquote>
            <p className="text-sm text-muted-foreground">
              — {testimonials[0].author}
            </p>
          </motion.div>
        </div>

        {/* Additional testimonial cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {testimonials.slice(1).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-muted rounded-2xl p-8"
            >
              <blockquote className="text-base text-foreground leading-relaxed mb-4">
                "{t.quote}"
              </blockquote>
              <p className="text-sm text-muted-foreground">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
