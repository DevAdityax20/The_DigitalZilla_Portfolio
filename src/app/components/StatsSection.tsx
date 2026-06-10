import { motion } from "motion/react";

const stats = [
  {
    number: "300",
    label: "Projects Delivered",
    description: "From 30-second reels to 60-minute documentaries.",
  },
  {
    number: "50",
    label: "Hours of Footage Edited",
    description: "We've seen every type of raw file. We've fixed every mess.",
  },
  {
    number: "99%",
    label: "Client Satisfaction Rate",
    description: "No revision nightmares. Just results that hit the brief.",
  },
  {
    number: "24/7",
    label: "Turnaround Mode",
    description: "We work while the world sleeps so your content never waits.",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl md:text-5xl font-bold text-foreground">
                {stat.number}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {stat.label}
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
