import { useState, useEffect, useRef, useCallback } from 'react';
import { CarouselCard } from './CarouselCard';

const ITEMS = [
  { video: '', label: 'Brand Film' },
  { video: '', label: 'CEO Story' },
  { video: '', label: 'Product Reel' },
  { video: '', label: 'Edit Suite' },
  { video: '', label: 'Event Coverage' },
  { video: 'https://res.cloudinary.com/dogyg03f7/video/upload/v1781082888/rxn_neww_2_wdwm0u.mp4', label: 'BTS Reel' },
  { video: 'https://res.cloudinary.com/dmloakbty/video/upload/q_auto/f_auto/v1779998914/NX_bag_-final_2_s3gbzq.mp4', label: 'Social Media' },
  { video: '', label: 'Shorts Series' },
  { video: '', label: 'Sports Action' },
];

// ── Responsive config per breakpoint ──────────────────────────────────────────
function useCarouselConfig() {
  const [vw, setVw] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handle = () => setVw(window.innerWidth);
    window.addEventListener('resize', handle, { passive: true });
    return () => window.removeEventListener('resize', handle);
  }, []);

  if (vw < 480) {
    return {
      cardW: 130, cardH: 200,
      stepX: 108,
      rotatePerStep: 10,
      scalePerStep: 0.08,
      tzPerStep: 45,
      visibleRange: 2.8,
      maskWidth: '14%',        // narrow masks — don't eat the screen
      maskOpacityStop: '30%',  // fade starts later
      containerH: 260,
      perspective: 700,
    };
  }
  if (vw < 768) {
    return {
      cardW: 155, cardH: 235,
      stepX: 130,
      rotatePerStep: 11,
      scalePerStep: 0.075,
      tzPerStep: 50,
      visibleRange: 3.2,
      maskWidth: '16%',
      maskOpacityStop: '35%',
      containerH: 300,
      perspective: 900,
    };
  }
  if (vw < 1024) {
    return {
      cardW: 180, cardH: 270,
      stepX: 155,
      rotatePerStep: 13,
      scalePerStep: 0.072,
      tzPerStep: 58,
      visibleRange: 3.8,
      maskWidth: '20%',
      maskOpacityStop: '40%',
      containerH: 340,
      perspective: 1000,
    };
  }
  return {
    cardW: 200, cardH: 300,
    stepX: 172,
    rotatePerStep: 14,
    scalePerStep: 0.072,
    tzPerStep: 60,
    visibleRange: 4.5,
    maskWidth: '26%',
    maskOpacityStop: '45%',
    containerH: 360,
    perspective: 1100,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
export function Carousel3D() {
  const cfg = useCarouselConfig();
  const [, forceRender] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [modalMuted, setModalMuted] = useState(false);

  const centerRef = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartPos = useRef(0);
  const velocityRef = useRef(0);
  const lastDragX = useRef(0);
  const lastDragTime = useRef(0);
  const momentumRef = useRef<number>();
  const autoRef = useRef<number>();

  const n = ITEMS.length;
  const wrap = (v: number) => ((v % n) + n) % n;

  const startAuto = useCallback(() => {
    stopAuto();
    autoRef.current = window.setInterval(() => {
      centerRef.current = wrap(centerRef.current + 0.012);
      forceRender(x => x + 1);
    }, 30);
  }, []);

  const stopAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  useEffect(() => {
    startAuto();
    return () => {
      stopAuto();
      if (momentumRef.current) cancelAnimationFrame(momentumRef.current);
    };
  }, [startAuto]);

  const onDragStart = (clientX: number) => {
    stopAuto();
    if (momentumRef.current) cancelAnimationFrame(momentumRef.current);
    isDragging.current = true;
    dragStartX.current = clientX;
    dragStartPos.current = centerRef.current;
    lastDragX.current = clientX;
    lastDragTime.current = performance.now();
    velocityRef.current = 0;
  };

  const onDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const now = performance.now();
    const dt = now - lastDragTime.current;
    const dx = clientX - lastDragX.current;
    if (dt > 0) velocityRef.current = dx / dt;
    lastDragX.current = clientX;
    lastDragTime.current = now;
    const totalDx = clientX - dragStartX.current;
    centerRef.current = wrap(dragStartPos.current - totalDx / cfg.stepX);
    forceRender(x => x + 1);
  };

  const onDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    let vel = -velocityRef.current / cfg.stepX * 16;
    const decay = () => {
      if (Math.abs(vel) < 0.0005) { startAuto(); return; }
      vel *= 0.92;
      centerRef.current = wrap(centerRef.current + vel);
      forceRender(x => x + 1);
      momentumRef.current = requestAnimationFrame(decay);
    };
    momentumRef.current = requestAnimationFrame(decay);
  };

  // Build sorted render list
  const cards = Array.from({ length: n }, (_, i) => {
    let rel = i - centerRef.current;
    if (rel > n / 2) rel -= n;
    if (rel < -n / 2) rel += n;
    return { i, rel };
  })
    .filter(({ rel }) => Math.abs(rel) <= cfg.visibleRange)
    .sort((a, b) => Math.abs(b.rel) - Math.abs(a.rel));

  // Smooth multi-stop fade mask gradient
  const maskGradientR = `linear-gradient(to right,
    var(--background,#fff) 0%,
    var(--background,#fff) ${cfg.maskOpacityStop},
    rgba(255,255,255,0.5) 72%,
    transparent 100%)`;

  const maskGradientL = `linear-gradient(to left,
    var(--background,#fff) 0%,
    var(--background,#fff) ${cfg.maskOpacityStop},
    rgba(255,255,255,0.5) 72%,
    transparent 100%)`;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: cfg.containerH,
        cursor: isDragging.current ? 'grabbing' : 'grab',
        touchAction: 'pan-y',
      }}
      onMouseDown={e => onDragStart(e.clientX)}
      onMouseMove={e => onDragMove(e.clientX)}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={e => onDragStart(e.touches[0].clientX)}
      onTouchMove={e => { e.preventDefault(); onDragMove(e.touches[0].clientX); }}
      onTouchEnd={onDragEnd}
    >
      {/* 3-D stage */}
      <div
        className="absolute inset-0"
        style={{ perspective: `${cfg.perspective}px`, perspectiveOrigin: '50% 48%' }}
      >
        <div
          className="absolute"
          style={{ top: 0, left: '50%', width: 0, height: '100%', transformStyle: 'preserve-3d' }}
        >
          {cards.map(({ i, rel }) => {
            const absRel = Math.abs(rel);
            const tx = rel * cfg.stepX;
            const ry = -rel * cfg.rotatePerStep;
            const scale = Math.max(0.45, 1 - absRel * cfg.scalePerStep);
            const tz = -absRel * cfg.tzPerStep;
            // Power-curve opacity — smooth fade, hits 0 at visibleRange edge
            const opacity = Math.max(0, 1 - Math.pow(absRel / (cfg.visibleRange * 0.88), 2.0));

            return (
              <CarouselCard
                key={i}
                index={i}
                video={ITEMS[i].video}
                label={ITEMS[i].label}
                relPos={rel}
                cardW={cfg.cardW}
                cardH={cfg.cardH}
                onExpand={(idx) => { stopAuto(); setExpandedIndex(idx); }}
                style={{
                  transform: `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
                  opacity,
                  zIndex: Math.round(100 - absRel * 10),
                  transition: isDragging.current ? 'none' : 'transform 0.06s linear, opacity 0.06s linear',
                  willChange: 'transform',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Left fade mask */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none z-10"
        style={{ width: cfg.maskWidth, background: maskGradientR }}
      />
      {/* Right fade mask */}
      <div
        className="absolute inset-y-0 right-0 pointer-events-none z-10"
        style={{ width: cfg.maskWidth, background: maskGradientL }}
      />

      {/* Expanded lightbox modal */}
      {expandedIndex !== null && ITEMS[expandedIndex]?.video && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => { setExpandedIndex(null); startAuto(); setModalMuted(false); }}
        >
          <div
            className="relative w-auto max-w-[min(90vw,420px)] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={modalVideoRef}
              src={ITEMS[expandedIndex].video}
              className="w-full h-full object-cover"
              autoPlay
              muted={modalMuted}
              loop
              playsInline
            />

            {/* Mute toggle */}
            <button
              onClick={() => {
                setModalMuted(m => !m);
                if (modalVideoRef.current) modalVideoRef.current.muted = !modalVideoRef.current.muted;
              }}
              className="absolute bottom-4 left-4 w-10 h-10 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 transition-colors"
              aria-label={modalMuted ? 'Unmute' : 'Mute'}
            >
              {modalMuted ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>

            {/* Close button */}
            <button
              onClick={() => { setExpandedIndex(null); startAuto(); setModalMuted(false); }}
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 transition-colors"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Label */}
            <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/15">
              <span className="text-white text-xs font-semibold tracking-wide">{ITEMS[expandedIndex].label}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
