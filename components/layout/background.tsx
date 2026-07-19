'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';
import { gsap } from '@/src/lib/gsap';

const GRID_CELL_SIZE = 50;
const GRID_ANIM_TOTAL_MS = 500;
const GRID_ANIM_LINE_OFFSET_MS = 0.05 * GRID_ANIM_TOTAL_MS;

interface Point2D {
  x: number,
  y: number
}

/**
 * Exponentially eases out a number from 0 to 1. Clamped from 0 to 1.
 *
 * @param t a clamped float from 0 to 1.
 * @returns eased float from 0 to 1
 */
function easeOutExpo(t: number) {
  const value = t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
  return Math.max(0, Math.min(1, value));
}

export function MarqueeText({ className, children }: { className?: string, children?: React.ReactNode }) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = gsap.to(divRef.current, {
      x: window.innerWidth,
      duration: 100,
      repeat: -1,
    });
    return () => { animation.kill() };
  }, []);

  return (
    <div ref={divRef} className={className}>
      Hello!
      {children}
    </div>
  );
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
    const duration = GRID_ANIM_TOTAL_MS;

    /**
     * Applies necessary styling to the function.
     */
    function applyStyling(strokeWidth: number = 1): void {
      const style = getComputedStyle(document.documentElement);
      const lineColor = style.getPropertyValue('--color-base-300').trim();
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = Math.max(0, strokeWidth);
    }

    /**
     * Primitive function to draw a single line.
     * @param p1x Point 1 X coordinate
     * @param p1y Point 1 Y coordinate
     * @param p2x Point 2 X coordinate
     * @param p2y Point 2 Y coordinate
     */
    function drawLine(p1x: number, p1y: number, p2x: number, p2y: number, inBetween: boolean = true, strokeWidth: number = 1): void {
      applyStyling(strokeWidth);

      if (inBetween) {
        p1x = Math.floor(p1x) + 0.5;
        p1y = Math.floor(p1y) + 0.5;
        p2x = Math.floor(p2x) + 0.5;
        p2y = Math.floor(p2y) + 0.5;
      }

      ctx.beginPath();
      ctx.moveTo(p1x, p1y);
      ctx.lineTo(p2x, p2y);
      ctx.stroke();
    }

    // Whether or not outer-most lines finish drawing
    let drawDone = false;

    /**
     * Draws the grid squares onto the div itself.
     * @param elapsed A non-eased float that tracks progression of the animation.
     */
    function draw(elapsed: number): void {
      // Mandatory container resizing & responsiveness checks
      const container = containerRef.current!;

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      canvas.style.width = container.offsetWidth + 'px';
      canvas.style.height = container.offsetHeight + 'px';

      // Coordinate positions as consts
      const width = canvas.width;
      const height = canvas.height;
      const centerX = (width / 2) + 0.5;
      const centerY = (height / 2) + 0.5;

      // Main center line
      const centerProgress = elapsed / duration;
      drawLine(
        centerX - (easeOutExpo(centerProgress) * width * 0.5), centerY,
        centerX + (easeOutExpo(centerProgress) * width * 0.5), centerY,
        true, 3,
      );
      drawLine(
        centerX, centerY - (easeOutExpo(centerProgress) * height * 0.5),
        centerX, centerY + (easeOutExpo(centerProgress) * height * 0.5),
        true, 3
      );

      let verticalRingsDone = false;
      let horizontalRingsDone = false;

      // Vertical "rings", i.e. horizontal lines, extending outward from center
      for (let x = cellSize; x <= width / 2; x += cellSize) {
        // Determine offset based off of cell index
        const cellIndex = Math.floor(x / cellSize);
        const lineProgress = (elapsed - (cellIndex * GRID_ANIM_LINE_OFFSET_MS)) / duration;
        const lastCell = (x + cellSize) > (width / 2);

        // Update whether this is done or not
        if (lastCell && (lineProgress >= 1)) {
          verticalRingsDone = true;
        }

        // Horizontal line on left-hand side
        drawLine(
          centerX - x, centerY - (easeOutExpo(lineProgress) * height * 0.5),
          centerX - x, centerY + (easeOutExpo(lineProgress) * height * 0.5)
        );
        // Horizontal line on right-hand side
        drawLine(
          centerX + x, centerY - (easeOutExpo(lineProgress) * height * 0.5),
          centerX + x, centerY + (easeOutExpo(lineProgress) * height * 0.5)
        );
      }

      // Horizontal "rings", i.e. vertical lines, extending outward from center
      for (let y = cellSize; y <= height / 2; y += cellSize) {
        // Determine offset based off of cell index
        const cellIndex = Math.floor(y / cellSize);
        const lineProgress = (elapsed - (cellIndex * GRID_ANIM_LINE_OFFSET_MS)) / duration;
        const lastCell = (y + cellSize) > (height / 2);

        // Update whether this is done or not
        if (lastCell && (lineProgress >= 1)) {
          horizontalRingsDone = true;
        }

        // Vertical line on top side
        drawLine(
          centerX - (easeOutExpo(lineProgress) * width * 0.5), centerY + y,
          centerX + (easeOutExpo(lineProgress) * width * 0.5), centerY + y
        );
        // Vertical line on bottom side
        drawLine(
          centerX - (easeOutExpo(lineProgress) * width * 0.5), centerY - y,
          centerX + (easeOutExpo(lineProgress) * width * 0.5), centerY - y
        );
      }

      if (verticalRingsDone && horizontalRingsDone) {
        drawDone = true;
      }
    }

    /**
     * Main animation draw loop.
     * @param timestamp timestamp in milliseconds
     */
    function loop(timestamp: number): void {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;

      draw(elapsed);

      if (!drawDone) {
        requestAnimationFrame(loop);
      }
    }

    // Necessary resize observer
    const animationLoop = () => requestAnimationFrame(loop);
    window.addEventListener('resize', animationLoop);

    // Necessary mutation observer, for the DaisyUI 'data-theme', light and dark mode
    const observer = new MutationObserver(animationLoop);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Loop the darn thing
    animationLoop();

    // Cleanup on component destruction :P
    return () => {
      window.removeEventListener('resize', animationLoop);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <canvas ref={canvasRef} className="absolute" />
      <MarqueeText className="absolute bottom-1/2" />
    </div>
  );
}
