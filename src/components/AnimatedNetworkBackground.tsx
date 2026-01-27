'use client';

import { useEffect, useRef } from 'react';
import type p5Type from 'p5';

export function AnimatedNetworkBackground() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<p5Type | null>(null);

  useEffect(() => {
    let cancelled = false;

    const start = async () => {
      const p5 = (await import('p5')).default;
      if (cancelled || !hostRef.current) return;

      const sketch = (p: p5Type) => {
        const nodes: {
          x: number;
          y: number;
          vx: number;
          vy: number;
        }[] = [];
        const density = 0.00012;
        const maxLinkDistance = 160;

        const createNodes = () => {
          nodes.length = 0;
          const area = p.width * p.height;
          const count = Math.max(35, Math.floor(area * density));
          for (let i = 0; i < count; i += 1) {
            nodes.push({
              x: p.random(p.width),
              y: p.random(p.height),
              vx: p.random(-0.4, 0.4),
              vy: p.random(-0.4, 0.4),
            });
          }
        };

        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
          canvas.parent(hostRef.current as HTMLDivElement);
          canvas.style('display', 'block');
          p.pixelDensity(1);
          createNodes();
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
          createNodes();
        };

        p.draw = () => {
          p.clear();
          const isLight = document.documentElement.dataset.theme === 'light';
          p.background(isLight ? 255 : 10, isLight ? 255 : 21, isLight ? 255 : 36);

          for (const node of nodes) {
            node.x += node.vx;
            node.y += node.vy;

            if (node.x < 0 || node.x > p.width) node.vx *= -1;
            if (node.y < 0 || node.y > p.height) node.vy *= -1;
          }

          p.push();
          p.noFill();

          for (let i = 0; i < nodes.length; i += 1) {
            for (let j = i + 1; j < nodes.length; j += 1) {
              const a = nodes[i];
              const b = nodes[j];
              const d = p.dist(a.x, a.y, b.x, b.y);
              if (d < maxLinkDistance) {
                const alpha = p.map(d, 0, maxLinkDistance, 120, 0);
                p.stroke(105, 198, 255, alpha);
                p.strokeWeight(1);
                p.line(a.x, a.y, b.x, b.y);
              }
            }
          }

          for (const node of nodes) {
            p.noStroke();
            p.fill(96, 205, 255, 180);
            p.ellipse(node.x, node.y, 5, 5);
            p.fill(96, 205, 255, 20);
            p.ellipse(node.x, node.y, 25, 25);
          }

          p.pop();
        };
      };

      instanceRef.current = new p5(sketch);
    };

    start();

    return () => {
      cancelled = true;
      if (instanceRef.current) {
        instanceRef.current.remove();
        instanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="animated-bg fixed inset-0 z-0 opacity-40 pointer-events-none bg-gradient-to-b from-[#11335c] via-[#0b1828] to-[#000000]">
      <div ref={hostRef} />
    </div>
  );
}
