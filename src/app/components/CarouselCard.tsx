import { useRef, useState } from 'react';

interface CarouselCardProps {
  video: string;
  label?: string;
  index: number;
  relPos: number;
  cardW: number;
  cardH: number;
  style?: React.CSSProperties;
  onExpand?: (index: number) => void;
}

export function CarouselCard({ video, label, index, relPos, cardW, cardH, style, onExpand }: CarouselCardProps) {
  const absRel = Math.abs(relPos);
  const isFront = absRel < 0.6;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (video && onExpand) onExpand(index);
  };

  return (
    <div
      className="absolute rounded-[18px] overflow-hidden select-none cursor-pointer"
      style={{
        width: cardW,
        height: cardH,
        top: '50%',
        left: '50%',
        marginLeft: -cardW / 2,
        marginTop: -cardH / 2,
        boxShadow: isFront
          ? '0 24px 60px rgba(0,0,0,0.55)'
          : '0 10px 28px rgba(0,0,0,0.28)',
        ...style,
      }}
      onClick={handleClick}
    >
      {/* Video */}
      {video ? (
        <video
          ref={videoRef}
          src={video}
          className="w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          draggable={false}
        />
      ) : (
        <div
          className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex items-center justify-center"
        >
          <span className="text-white/30 text-xs font-medium tracking-wide">Add Video</span>
        </div>
      )}

      {/* Depth vignette — heavier on edge cards */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to top,
            rgba(0,0,0,${0.52 + absRel * 0.18}) 0%,
            rgba(0,0,0,${0.06 + absRel * 0.22}) 50%,
            rgba(0,0,0,${absRel * 0.2}) 100%)`,
        }}
      />

      {/* Orange glow on center card only */}
      {isFront && (
        <div
          className="absolute inset-0 rounded-[18px] pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1.5px rgba(255,107,53,0.6)' }}
        />
      )}

      {/* Mute/Unmute button — only on cards with video */}
      {video && isFront && (
        <button
          onClick={toggleMute}
          className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-colors hover:bg-white/30"
          style={{
            background: 'rgba(0,0,0,0.45)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
          aria-label={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
          )}
        </button>
      )}

      {/* Label */}
      {label && (
        <div className="absolute bottom-3 left-3 right-3">
          <span
            className="text-white font-semibold leading-tight"
            style={{
              fontSize: cardW < 160 ? 10 : 13,
              textShadow: '0 1px 8px rgba(0,0,0,0.9)',
            }}
          >
            {label}
          </span>
        </div>
      )}

      {/* Index badge */}
      <div className="absolute top-2.5 left-2.5">
        <span
          className="font-bold tracking-widest uppercase rounded-full"
          style={{
            fontSize: cardW < 160 ? 8 : 10,
            padding: cardW < 160 ? '2px 7px' : '3px 9px',
            background: 'rgba(255,255,255,0.13)',
            backdropFilter: 'blur(8px)',
            color: 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(255,255,255,0.18)',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
