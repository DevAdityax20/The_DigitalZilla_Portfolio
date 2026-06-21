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

function LocationIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="flex-shrink-0 mt-0.5">
      <path
        d="M7.5 1.5C5.01 1.5 3 3.51 3 6C3 9.5 7.5 13.5 7.5 13.5C7.5 13.5 12 9.5 12 6C12 3.51 9.99 1.5 7.5 1.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");

  const navLinks = [
    { label: "Home", action: () => onNavigate?.("home") },
    { label: "Services", action: () => { onNavigate?.("home"); setTimeout(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), 100); } },
    { label: "Work", action: () => { onNavigate?.("home"); setTimeout(() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }), 100); } },
    { label: "About", action: () => onNavigate?.("about") },
    { label: "Contact", action: () => onNavigate?.("contact") },
  ];

  const phoneNumbers = [
    { number: "+(91) 8559 060 809", label: "IND", tel: "+918559060809" },
    { number: "+(91) 99716 69425", label: "IND", tel: "+919971669425" },
    { number: "+(971) 522957279", label: "UAE", tel: "+971522957279" },
  ];

  const emails = [
    { address: "thedigitalzilla@gmail.com" },
    { address: "tajinder@thedigitalzilla.com" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/thedigitalzilla",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M10.5 2.5H12.5V0.5H10.5C8.84 0.5 7.5 1.84 7.5 3.5V5.5H5.5V7.5H7.5V17.5H9.5V7.5H11.5L12 5.5H9.5V3.5C9.5 2.95 9.95 2.5 10.5 2.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/thedigitalzilla",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1.5" y="1.5" width="15" height="15" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="13" cy="5" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/thedigitalzilla",
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 7V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="5" cy="5" r="0.75" fill="currentColor" />
          <path d="M8.5 13V10C8.5 8.9 9.4 8 10.5 8C11.6 8 12.5 8.9 12.5 10V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8.5 10V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const offices = [
    {
      flag: "🇮🇳",
      label: "India – Jalandhar",
      address: "Shop No. 130, Civil Line, Ranjit Nagar, Jalandhar, Punjab 144001",
      mapUrl: "https://maps.google.com/?q=Shop+No.+130,+Civil+Line,+Ranjit+Nagar,+Jalandhar,+Punjab+144001",
    },
    {
      flag: "🇮🇳",
      label: "India – Mohali",
      address: "1st floor, R&R Tower, 298F, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055",
      mapUrl: "https://maps.google.com/?q=R%26R+Tower,+Phase+8B,+Sector+74,+Mohali,+Punjab+160055",
    },
    {
      flag: "🇦🇪",
      label: "UAE – Dubai",
      address: "603 Garhoud View, Al Garhoud, Dubai – United Arab Emirates",
      mapUrl: "https://maps.google.com/?q=603+Garhoud+View,+Al+Garhoud,+Dubai",
    },
  ];

  return (
    <footer style={{ backgroundColor: "#0B0B18" }} className="text-white">
      {/* Main footer content */}
      <div className="container mx-auto max-w-6xl px-5 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1 – Stay Connected */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Stay connected</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                Join our newsletter for tips, updates, and project highlights—only the good stuff.
              </p>
            </div>

            {/* Email pill */}
            <div className="flex items-center rounded-full overflow-hidden max-w-sm" style={{ backgroundColor: "#1A1A2E" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address*"
                className="bg-transparent text-white placeholder-white/35 text-sm px-5 py-3 outline-none flex-1 min-w-0"
              />
              <button
                className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 mr-1 hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200"
                aria-label="Subscribe"
              >
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
            <div className="rounded-2xl p-5 flex items-center gap-4 mt-1" style={{ backgroundColor: "#1A1A2E" }}>
              <img
                src="https://res.cloudinary.com/dmloakbty/image/upload/q_auto/f_auto/v1781161522/tdz_logo_new_vgezjw.webp"
                alt="The Digital Zilla"
                width={160}
                height={48}
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Col 2 – Useful Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5 sm:mb-6">Useful links</h4>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      item.action();
                    }}
                    className="text-sm text-white/65 hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-[#FF6B35]">→</span>
                    {item.label}
                    {item.badge && (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#FF6B35] text-white text-[10px] font-bold leading-none">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Get In Touch */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5 sm:mb-6">Get In Touch</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/65">
              {phoneNumbers.map((phone) => (
                <li key={phone.tel}>
                  <a
                    href={`tel:${phone.tel}`}
                    className="flex items-start gap-2.5 hover:text-white transition-colors duration-200"
                  >
                    <PhoneIcon />
                    <span>{phone.number}({phone.label})</span>
                  </a>
                </li>
              ))}
              {emails.map((mail) => (
                <li key={mail.address} className="mt-1">
                  <a
                    href={`mailto:${mail.address}`}
                    className="flex items-start gap-2.5 hover:text-white transition-colors duration-200 break-all"
                  >
                    <MailIcon />
                    <span>{mail.address}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full text-white/65 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 4 – Our Office */}
          <div>
            <h4 className="text-base font-semibold text-white mb-5 sm:mb-6">Our Office</h4>
            <div className="flex flex-col gap-4 text-sm text-white/65 leading-relaxed">
              {offices.map((office) => (
                <a
                  key={office.label}
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-white transition-colors duration-200 group"
                >
                  <LocationIcon />
                  <div>
                    <span className="text-white/80 font-medium text-xs uppercase tracking-wide block mb-0.5">
                      {office.flag} {office.label}
                    </span>
                    <span className="group-hover:underline underline-offset-2">{office.address}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container mx-auto max-w-6xl px-5 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-white/45 text-center sm:text-left">
            Designed and Developed by{" "}
            <span className="text-white/70 font-semibold">The Digital Zilla</span>
          </p>
          <p className="text-xs text-white/45 text-center sm:text-right">
            Copyright © 2026 The Digital Zilla, All rights reserved.
          </p>
          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white/90 hover:scale-110 active:scale-95 transition-all duration-200 flex-shrink-0"
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
