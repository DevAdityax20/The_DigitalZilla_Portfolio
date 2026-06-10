import { useState } from "react";

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5">
      <path
        d="M2.5 1.5C2.5 1.5 1 1.5 1 3C1 4.5 1.5 8.5 5.5 11.5C9.5 14.5 13 13.5 13.5 12C14 10.5 13 9.5 13 9.5L10.5 8.5C10.5 8.5 9.5 8 9 8.5L8 9.5C8 9.5 6.5 8.5 5.5 7.5C4.5 6.5 3.5 5 3.5 5L4.5 4C5 3.5 4.5 2.5 4.5 2.5L3 1.5C3 1.5 2.5 1.5 2.5 1.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5">
      <rect x="1" y="3" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.5 3.5L7.5 8.5L13.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer style={{ backgroundColor: "#0B0B18" }} className="text-white">
      {/* Main footer content */}
      <div className="container mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

          {/* Col 1 – Stay Connected */}
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Stay connected</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Join our newsletter for tips, updates, and project highlights—only the good stuff.
              </p>
            </div>

            {/* Email pill */}
            <div className="flex items-center rounded-full overflow-hidden" style={{ backgroundColor: "#1A1A2E" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address*"
                className="bg-transparent text-white placeholder-white/35 text-sm px-5 py-3 outline-none flex-1 min-w-0"
              />
              <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 mr-1 hover:bg-white/90 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="#0B0B18"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Logo card */}
            <div className="rounded-2xl p-5 flex items-center gap-4 mt-2" style={{ backgroundColor: "#1A1A2E" }}>
              {/* Colorful geometric logo */}
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                {/* Diamond / cube shape made of triangles */}
                <polygon points="26,4 38,20 26,16" fill="#E53935" />
                <polygon points="26,4 14,20 26,16" fill="#FF6B35" />
                <polygon points="14,20 26,16 26,36" fill="#FFC107" />
                <polygon points="38,20 26,16 26,36" fill="#00BCD4" />
                <polygon points="14,20 26,36 8,32" fill="#3F51B5" />
                <polygon points="38,20 26,36 44,32" fill="#9C27B0" />
                <polygon points="8,32 26,36 26,48" fill="#4CAF50" />
                <polygon points="44,32 26,36 26,48" fill="#2196F3" />
              </svg>
              <div className="leading-tight">
                <p className="text-white font-black tracking-wider text-base uppercase">THE DIGITAL</p>
                <p className="text-white font-black tracking-wider text-base uppercase">ZILLA</p>
              </div>
            </div>
          </div>

          {/* Col 2 – Useful Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Useful links</h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: "Home" },
                { label: "Services" },
                { label: "Work", badge: "10" },
                { label: "About" },
                { label: "Contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className="text-sm text-white/65 hover:text-white transition-colors flex items-center gap-2"
                  >
                    {item.label}
                    {item.badge && (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] text-white text-[10px] font-bold leading-none">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Get In Touch */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Get In Touch</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <PhoneIcon />
                <span>+(91) 8559 060 809(IND)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon />
                <span>+(91) 99716 69425(IND)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon />
                <span>+(971) 522957279 (UAE)</span>
              </li>
              <li className="flex items-start gap-2.5 mt-1">
                <MailIcon />
                <span>info@thedigitalzilla.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon />
                <span>tajinder@thedigitalzilla.com</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-white/65 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M10.5 2.5H12.5V0.5H10.5C8.84 0.5 7.5 1.84 7.5 3.5V5.5H5.5V7.5H7.5V17.5H9.5V7.5H11.5L12 5.5H9.5V3.5C9.5 2.95 9.95 2.5 10.5 2.5Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-white/65 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="13" cy="5" r="1" fill="currentColor" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-white/65 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="5" cy="5" r="0.75" fill="currentColor" />
                  <path d="M8.5 13V10C8.5 8.9 9.4 8 10.5 8C11.6 8 12.5 8.9 12.5 10V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M8.5 10V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 4 – Our Office */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">Our Office</h4>
            <div className="flex flex-col gap-5 text-sm text-white/65 leading-relaxed">
              <p>
                India – Shop No. 130, Civil Line, Ranjit Nagar, Jalandhar, Punjab 144001
              </p>
              <p>
                1st floor, R&R Tower, 298F, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055
              </p>
              <p>
                603 Garhoud View, Al Garhoud, Dubai – United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45">
            Designed and Developed by{" "}
            <span className="text-white/70 font-semibold">The Digital Zilla</span>
          </p>
          <p className="text-xs text-white/45 text-center md:text-right">
            Copyright © 2026 The Digital Zilla, All rights reserved.
          </p>
          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 transition-colors flex-shrink-0"
            aria-label="Scroll to top"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 12V4M8 4L4 8M8 4L12 8"
                stroke="#0B0B18"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
