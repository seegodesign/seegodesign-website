'use client';

import { useEffect, useRef } from 'react';
import type p5Type from 'p5';

export function AnimatedWavesBackground() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<p5Type | null>(null);

  useEffect(() => {
    let cancelled = false;

    const start = async () => {
      const p5 = (await import('p5')).default;
      if (cancelled || !hostRef.current) return;

        const sketch = (p: p5Type) => {
          const waves: {
            amplitude: number;
            frequency: number;
            speed: number;
            phase: number;
            offset: number;
            color: [number, number, number, number];
          }[] = [];
          const waveCount = 6;
          const backgroundColorDark: [number, number, number] = [10, 21, 36];
          const backgroundColorLight: [number, number, number] = [255, 255, 255];
          const pointSpacing = 96;

        const createWaves = () => {
          waves.length = 0;
          for (let i = 0; i < waveCount; i += 1) {
            waves.push({
              amplitude: p.random(30, 110),
              frequency: p.random(0.0025, 0.0075),
              speed: p.random(0.00025, 0.0007),
              phase: p.random(Math.PI * 2),
              offset: p.random(0.2, 0.85),
              color: [
                p.random(80, 140),
                p.random(170, 230),
                p.random(220, 255),
                p.random(30, 90),
              ],
            });
          }
        };

        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
          canvas.parent(hostRef.current as HTMLDivElement);
          canvas.style('display', 'block');
          p.pixelDensity(1);
          createWaves();
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
          createWaves();
        };

          p.draw = () => {
            p.clear();
            const isLight = document.documentElement.dataset.theme === 'light';
            const backgroundColor = isLight ? backgroundColorLight : backgroundColorDark;
            p.background(...backgroundColor);

            const time = p.millis();
            for (const wave of waves) {
              const centerY = p.height * wave.offset;
              const verticalDrift = Math.sin(time * wave.speed * 0.6 + wave.phase) * wave.amplitude * 0.8;
            const fillAlpha = Math.max(12, Math.floor(wave.color[3] * 0.2));
            p.stroke(...wave.color);
            p.strokeWeight(1.5);
            p.noFill();
            p.beginShape();
            for (let x = -40; x <= p.width + 40; x += 18) {
              const angle = x * wave.frequency + wave.phase + time * wave.speed;
              const y = centerY + Math.sin(angle) * wave.amplitude + verticalDrift;
              p.curveVertex(x, y);
            }
            p.endShape();

            // const pulse = Math.sin(time * 0.002 + wave.phase) * 0.5 + 0.5;
            const pointAlpha = Math.min(120, wave.color[3] + 20);
            // const pointSize = 3 + pulse * 2.5;
            p.noStroke();
            p.fill(wave.color[0], wave.color[1], wave.color[2], pointAlpha);
            // for (let x = 0; x <= p.width; x += pointSpacing) {
            //   const angle = x * wave.frequency + wave.phase + time * wave.speed;
            //   const y = centerY + Math.sin(angle) * wave.amplitude + verticalDrift;
            //   p.circle(x, y, pointSize);
            //   p.circle(x + pointSpacing * 0.5, y + Math.sin(angle + 0.5) * 6, pointSize * 0.75);
            // }

            p.noStroke();
            p.fill(wave.color[0], wave.color[1], wave.color[2], fillAlpha);
            p.beginShape();
            for (let x = -40; x <= p.width + 40; x += 18) {
              const angle = x * wave.frequency + wave.phase + time * wave.speed;
              const y = centerY + Math.sin(angle) * wave.amplitude + verticalDrift;
              p.curveVertex(x, y);
            }
            p.vertex(p.width + 40, p.height + 40);
            p.vertex(-40, p.height + 40);
            p.endShape(p.CLOSE);
            wave.amplitude *= Math.sin(time * 0.0003 + wave.phase) * 0.002 + 1;
          }
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
