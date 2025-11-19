import { useRef, useEffect } from 'react';

export default function Marquee({ children, speed = 40 }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    let start;
    let animationFrame;
    function step(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const px = -(elapsed / (1000 / speed));
      content.style.transform = `translateX(${px % content.offsetWidth}px)`;
      animationFrame = requestAnimationFrame(step);
    }
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div ref={contentRef} className="whitespace-nowrap will-change-transform">
        {children}
        {children}
      </div>
    </div>
  );
}
