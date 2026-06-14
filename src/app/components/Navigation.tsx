import { useState, useRef, useEffect } from "react";

const serviceLinks = [
  { label: "Social Media Reels & Shorts", accent: false },
  { label: "Brand Films & Commercials", accent: false },
  { label: "Event Coverage & Highlight Reels", accent: false },
  { label: "YouTube Video Editing", accent: false },
  { label: "UGC Video Editing", accent: true },
  { label: "Motion Graphics & Titlles", accent: true },
];

interface NavigationProps {
  onNavigate?: (page: string) => void;
}

export function Navigation({ onNavigate }: NavigationProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="hidden md:flex items-center gap-8">
      <a
        href="#"
        onClick={() => onNavigate?.("home")}
        className="text-sm text-foreground hover:text-[#FF6B35] transition-colors"
      >
        Home
      </a>

      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onNavigate?.("about"); }}
        className="text-sm text-foreground hover:text-[#FF6B35] transition-colors"
      >
        About Us
      </a>

      {/* Services with dropdown */}
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setServicesOpen((v) => !v)}
          className="flex items-center gap-1 text-sm text-foreground hover:text-[#FF6B35] transition-colors"
        >
          Services
          <span
            className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-current text-[10px] font-bold leading-none transition-transform duration-200"
            style={{ transform: servicesOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            +
          </span>
        </button>

        {servicesOpen && (
          <div
            className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-64 rounded-2xl shadow-xl overflow-hidden z-50"
            style={{
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Caret */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-2 overflow-hidden">
              <div
                className="w-3 h-3 rotate-45 mx-auto mt-1"
                style={{
                  background: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            </div>

            <ul className="py-3">
              {serviceLinks.map((s, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={() => setServicesOpen(false)}
                    className={`block px-5 py-2.5 text-sm leading-snug transition-colors hover:bg-white/10 ${s.accent ? "text-[#FF6B35] font-medium" : "text-white/90"
                      }`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <a
        href="#blog"
        className="text-sm text-foreground hover:text-[#FF6B35] transition-colors"
      >
        Blog
      </a>

      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onNavigate?.("faqs"); }}
        className="text-sm text-foreground hover:text-[#FF6B35] transition-colors"
      >
        FAQs
      </a>

      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onNavigate?.("contact"); }}
        className="text-sm text-foreground hover:text-[#FF6B35] transition-colors"
      >
        Contact
      </a>
    </nav>
  );
}
