import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const services = [
  {
    id: "001",
    title: "Social Media Reels & Shorts",
    description:
      "Vertical. Punchy. Built to go viral. We craft scroll-stopping short-form content optimized for Instagram Reels, TikTok, and YouTube Shorts – with hooks that grab attention in the first 3 seconds.",
  },
  {
    id: "002",
    title: "Brand Films & Commercials",
    description:
      "Cinematic storytelling that elevates your brand. From concept to final cut, we produce high-quality brand films and commercials that connect emotionally and convert viewers into customers.",
  },
  {
    id: "003",
    title: "Event Coverage & Highlight Reels",
    description:
      "Capture every moment that matters. We turn your events – launches, conferences, weddings, concerts – into compelling highlight reels that tell the story long after the event ends.",
  },
  {
    id: "004",
    title: "YouTube Video Editing",
    description:
      "Long-form content that keeps viewers watching. We handle pacing, color grading, motion graphics, and sound design to ensure your YouTube videos retain audiences and grow your channel.",
  },
];

export function ServicesAccordion() {
  const [openId, setOpenId] = useState<string>("001");

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground mb-10 uppercase">
          What We Offer – Pick Your Vibe
        </p>

        <div className="flex flex-col gap-0">
          {services.map((service) => {
            const isOpen = openId === service.id;
            return (
              <div key={service.id} className="border-b border-border">
                <button
                  onClick={() => setOpenId(isOpen ? "" : service.id)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-2xl md:text-3xl font-bold text-foreground pr-4">
                    {service.title}
                    <sup className="text-xs font-normal text-muted-foreground ml-1 align-super">
                      /{service.id}/
                    </sup>
                  </span>
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isOpen
                        ? "bg-foreground text-background"
                        : "bg-foreground text-background"
                    }`}
                  >
                    {isOpen ? (
                      <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
                        <path
                          d="M1 1H15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M8 1V15M1 8H15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground pb-6 max-w-2xl leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
