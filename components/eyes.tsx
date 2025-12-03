"use client";

import { useState, useEffect, useRef } from "react";
import NextImage from "next/image";

const frames = [
  "/images/eye1.png",
  "/images/eye2.png",
  "/images/eye3.png",
  "/images/eye4.png",
];

const frameDurations = [0, 25, 25, 50];

export default function Eyes() {
  const [hovered, setHovered] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);

  const sequenceTimeoutRef = useRef<number | null>(null);
  const blinkTimeoutRef = useRef<number | null>(null);
  const blinkingRef = useRef(false);

  // Preload images using the browser Image constructor
  useEffect(() => {
    frames.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const playSequence = (sequence: number[], callback?: () => void) => {
    if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);

    let i = 0;

    const nextFrame = () => {
      if (i >= sequence.length) {
        callback?.();
        return;
      }

      const idx = sequence[i];
      setFrameIndex(idx);
      i++;

      sequenceTimeoutRef.current = window.setTimeout(
        nextFrame,
        frameDurations[idx] || 300
      );
    };

    nextFrame();
  };

  // Hover animation
  useEffect(() => {
    if (hovered) {
      blinkingRef.current = true;
      playSequence([0, 1, 2, 3], () => {
        blinkingRef.current = true;
      });
    } else {
      playSequence([3, 2, 1, 0], () => {
        blinkingRef.current = false;
      });
    }

    return () => {
      if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);
    };
  }, [hovered]);

  // Random blinking
  useEffect(() => {
    const scheduleBlink = () => {
      const delay = Math.random() * 10000 + 4000;

      blinkTimeoutRef.current = window.setTimeout(() => {
        if (!hovered && !blinkingRef.current) {
          blinkingRef.current = true;
          playSequence([0, 1, 2, 3, 2, 1, 0], () => {
            blinkingRef.current = false;
          });
        }
        scheduleBlink();
      }, delay);
    };

    scheduleBlink();

    return () => {
      if (blinkTimeoutRef.current) clearTimeout(blinkTimeoutRef.current);
      if (sequenceTimeoutRef.current) clearTimeout(sequenceTimeoutRef.current);
    };
  }, [hovered]);

  return (
    <div
      className="w-[90%] h-full relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <NextImage
        src={frames[frameIndex]}
        alt={`Eye frame ${frameIndex + 1}`}
        fill
        className="object-contain"
      />
    </div>
  );
}
