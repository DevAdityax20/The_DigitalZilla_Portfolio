export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2L35 12V28L20 38L5 28V12L20 2Z" fill="url(#gradient1)" />
        <path d="M20 2L35 12L20 20L5 12L20 2Z" fill="url(#gradient2)" opacity="0.8" />
        <path d="M20 20L35 12V28L20 38V20Z" fill="url(#gradient3)" opacity="0.6" />
        <defs>
          <linearGradient id="gradient1" x1="5" y1="2" x2="35" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B35" />
            <stop offset="1" stopColor="#F7931E" />
          </linearGradient>
          <linearGradient id="gradient2" x1="5" y1="2" x2="35" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00B4D8" />
            <stop offset="1" stopColor="#0077B6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="20" y1="12" x2="35" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9D4EDD" />
            <stop offset="1" stopColor="#7209B7" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[#FF6B35] font-bold text-lg tracking-tight">THE DIGITAL</span>
        <span className="text-foreground font-bold text-lg tracking-tight">ZILLA</span>
      </div>
    </div>
  );
}
