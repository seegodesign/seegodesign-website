'use client';

import { useEffect, useRef } from 'react';
import type p5Type from 'p5';

type Cube = {
  x: number;
  y: number;
  z: number;
  size: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  driftX: number;
  driftY: number;
  driftZ: number;
};

export function AnimatedCubesBackground() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const instanceRef = useRef<p5Type | null>(null);

  useEffect(() => {
    let cancelled = false;

    const start = async () => {
      const p5 = (await import('p5')).default;
      if (cancelled || !hostRef.current) return;

      const sketch = (p: p5Type) => {
        const cubes: Cube[] = [];
        const cubeCount = 36;
        const bounds = 520;

        const createCubes = () => {
          cubes.length = 0;
          for (let i = 0; i < cubeCount; i += 1) {
            cubes.push({
              x: p.random(-bounds, bounds),
              y: p.random(-bounds, bounds),
              z: p.random(-bounds, bounds),
              size: p.random(16, 32),
              rotX: p.random(Math.PI),
              rotY: p.random(Math.PI),
              rotZ: p.random(Math.PI),
              speedX: p.random(0.002, 0.01),
              speedY: p.random(0.002, 0.01),
              speedZ: p.random(0.002, 0.01),
              driftX: p.random(-0.15, 0.15),
              driftY: p.random(-0.15, 0.15),
              driftZ: p.random(-0.1, 0.1),
            });
          }
        };

        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
          canvas.parent(hostRef.current as HTMLDivElement);
          canvas.style('display', 'block');
          p.pixelDensity(1);
          createCubes();
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

        p.draw = () => {
          p.clear();
          p.background(10, 21, 36);
          p.orbitControl(0, 0, 0);
          p.noFill();
          p.stroke(125, 202, 47, 120);
          p.strokeWeight(1.1);

          for (const cube of cubes) {
            cube.x += cube.driftX;
            cube.y += cube.driftY;
            cube.z += cube.driftZ;
            cube.rotX += cube.speedX;
            cube.rotY += cube.speedY;
            cube.rotZ += cube.speedZ;

            if (cube.x > bounds || cube.x < -bounds) cube.driftX *= -1;
            if (cube.y > bounds || cube.y < -bounds) cube.driftY *= -1;
            if (cube.z > bounds || cube.z < -bounds) cube.driftZ *= -1;

            p.push();
            p.translate(cube.x, cube.y, cube.z);
            p.rotateX(cube.rotX);
            p.rotateY(cube.rotY);
            p.rotateZ(cube.rotZ);
            p.box(cube.size);
            p.pop();
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
    <div className="fixed inset-0 z-0 opacity-35 pointer-events-none bg-gradient-to-b from-[#0f2742] via-[#0b1828] to-[#060b14]">
      <div ref={hostRef} />
    </div>
  );
}
