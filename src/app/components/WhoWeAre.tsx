import { motion } from "motion/react";

export function WhoWeAre() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-6 uppercase">
          Who We Are
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-6 max-w-4xl leading-tight"
        >
          Looking to create videos that people actually watch – all the way
          through?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-muted-foreground max-w-2xl leading-relaxed"
        >
          We're editors, storytellers, and visual nerds who genuinely care about
          your brand. Every project gets treated like it's going on our own reel
          – because honestly, it does. No cookie-cutter templates. No
          assembly-line edits. Just strategic, creative, high-impact video that
          moves the needle for your business.
        </motion.p>
      </div>
    </section>
  );
}
