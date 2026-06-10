import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const categories = [
  "ALL CATEGORIES",
  "ANIMATION",
  "COMMERCIALS",
  "DESIGN",
  "EVENTS",
  "PROJECT",
  "VIDEO PRODUCTION",
];

const projects = [
  {
    id: 1,
    title: "RXN Fighter Brand Film",
    category: "PROJECT",
    tag: "PROJECT",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Behind the Lens – BTS Reel",
    category: "VIDEO PRODUCTION",
    tag: "VIDEO PRODUCTION",
    img: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Urban Lifestyle Campaign",
    category: "COMMERCIALS",
    tag: "PROJECT",
    img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Product Launch Animation",
    category: "ANIMATION",
    tag: "ANIMATION",
    img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Corporate Event Highlight",
    category: "EVENTS",
    tag: "EVENTS",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Brand Identity Design Reel",
    category: "DESIGN",
    tag: "DESIGN",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Social Media Shorts Series",
    category: "VIDEO PRODUCTION",
    tag: "VIDEO PRODUCTION",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Documentary: City Pulse",
    category: "PROJECT",
    tag: "PROJECT",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
  },
  {
    id: 9,
    title: "Fashion Week Commercial",
    category: "COMMERCIALS",
    tag: "COMMERCIALS",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("ALL CATEGORIES");

  const filtered =
    activeCategory === "ALL CATEGORIES"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full">
      {/* Hero banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&h=500&fit=crop"
          alt="Our Portfolio"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-3"
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 text-sm md:text-base max-w-xs"
          >
            Take a closer look at the work behind the results.
          </motion.p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap px-6 py-8 bg-white border-b border-gray-100">
        {categories.map((cat) => {
          const active = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                active
                  ? "bg-foreground text-background"
                  : "bg-transparent text-foreground/60 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Project grid */}
      <div className="px-6 py-10 bg-[#F9F9F7]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-sm cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Tag badge */}
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-foreground text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                      {project.tag}
                    </span>

                    {/* Expand icon on hover */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                          d="M2 7H12M7 2L12 7L7 12"
                          stroke="#111"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Card footer */}
                  <div className="p-4">
                    <p className="text-sm font-semibold text-foreground">
                      {project.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {project.category}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View all button */}
          <div className="flex justify-center mt-10">
            <button className="flex items-center gap-2 bg-foreground text-background px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              VIEW ALL WORK
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
          </div>
        </div>
      </div>
    </section>
  );
}
