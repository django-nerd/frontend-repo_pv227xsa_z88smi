import { useEffect, useRef } from 'react';

export default function RetroParticles() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    let width, height, raf;

    function resize() {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }

    const palette = ['#ff9ab7', '#a5d8ff', '#ffe066', '#b2f2bb', '#d0bfff'];
    const dots = Array.from({ length: 80 }).map(() => ({
      x: Math.random(),
      y: Math.random(),
      r: 2 + Math.random() * 2,
      c: palette[Math.floor(Math.random() * palette.length)],
      vx: (Math.random() - 0.5) * 0.0015,
      vy: (Math.random() - 0.5) * 0.0015,
    }));

    function step() {
      ctx.clearRect(0, 0, width, height);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > 1) d.vx *= -1;
        if (d.y < 0 || d.y > 1) d.vy *= -1;
        const x = d.x * width, y = d.y * height;
        ctx.beginPath();
        ctx.arc(x, y, d.r * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = d.c;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener('resize', resize);
    step();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 -z-10 h-full w-full" />;
}
