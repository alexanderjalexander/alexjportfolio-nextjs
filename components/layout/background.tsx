'use client';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const GRID_CELL_SIZE = 50;
const GRID_ANIMATION_MS = 1000;

/**
 * Exponentially eases out a number from 0 to 1.
 * @param t a clamped float from 0 to 1.
 * @returns eased float from 0 to 1
 */
function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function GridBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const cellSize = GRID_CELL_SIZE;

  useEffect(() => {
    // Canvas & Context Elements
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;

    // Timing & Animation Control
    let startTime: number | null = null;
    const duration = GRID_ANIMATION_MS;

    /**
     * Draws the grid squares onto the div itself.
     *
     * @param progress A non-eased float that tracks progression of the animation.
     */
    function draw(progress: number) {
      // Mandatory container resizing & responsiveness checks
      const container = containerRef.current!;

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      canvas.style.width = container.offsetWidth + 'px';
      canvas.style.height = container.offsetHeight + 'px';

      // Grid offset checks n whatnot
      const offsetX = (canvas.width / 2) % cellSize;
      const offsetY = (canvas.height / 2) % cellSize;

      // Styling for grid lines & thicknesses
      const style = getComputedStyle(document.documentElement);
      const lineColor = style.getPropertyValue('--color-base-300').trim();
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      // TODO: Start from center, and then move upwards and to the left.
      for (let x = canvas.width / 2; x <= canvas.width; x += cellSize) {
        for (let y = canvas.height / 2; y <= canvas.height; y += cellSize) {
          ctx.beginPath();
          ctx.moveTo(x + 0.5, y + 0.5);
          ctx.lineTo(x + 0.5, canvas.height);
          ctx.stroke();
        }
      }
    }

    function loop(timestamp: number) {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // TODO: Progress to draw
      draw(progress);

      if (progress < 1) {
        requestAnimationFrame(loop);
      }
    }

    window.addEventListener('resize', () => requestAnimationFrame(loop));

    const observer = new MutationObserver(() => {
      requestAnimationFrame(loop);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', draw);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}
