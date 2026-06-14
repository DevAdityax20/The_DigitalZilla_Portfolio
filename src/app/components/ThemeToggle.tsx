import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      className="relative w-14 h-7 rounded-full p-0.5 transition-colors duration-300 focus:outline-none"
      style={{
        background: dark
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
          : 'linear-gradient(135deg, #87CEEB 0%, #FDB813 100%)',
        boxShadow: dark
          ? 'inset 0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(100,100,255,0.15)'
          : 'inset 0 1px 3px rgba(0,0,0,0.15), 0 0 8px rgba(253,184,19,0.2)',
      }}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      id="theme-toggle"
    >
      {/* Track stars (dark mode) */}
      <span
        className="absolute top-1.5 left-2 w-1 h-1 rounded-full bg-white/70 transition-opacity duration-300"
        style={{ opacity: dark ? 1 : 0 }}
      />
      <span
        className="absolute top-3.5 left-4 w-0.5 h-0.5 rounded-full bg-white/50 transition-opacity duration-300"
        style={{ opacity: dark ? 1 : 0 }}
      />

      {/* Sliding knob */}
      <span
        className="block w-6 h-6 rounded-full shadow-md transition-transform duration-300 ease-in-out"
        style={{
          transform: dark ? 'translateX(28px)' : 'translateX(0)',
          background: dark ? '#e8e8e8' : '#FDB813',
          boxShadow: dark
            ? '0 1px 4px rgba(0,0,0,0.4)'
            : '0 1px 4px rgba(0,0,0,0.2), 0 0 6px rgba(253,184,19,0.4)',
        }}
      >
        {/* Sun icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-4 h-4 absolute top-1 left-1 transition-opacity duration-300"
          style={{ opacity: dark ? 0 : 1 }}
        >
          <circle cx="12" cy="12" r="5" fill="#fff" />
          <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.41 1.41M8.34 15.66l-1.41 1.41m12.14 0l-1.41-1.41M8.34 8.34L6.93 6.93" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        {/* Moon icon */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-4 h-4 absolute top-1 left-1 transition-opacity duration-300"
          style={{ opacity: dark ? 1 : 0 }}
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" fill="#334155" />
        </svg>
      </span>
    </button>
  );
}
