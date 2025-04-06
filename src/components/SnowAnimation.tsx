"use client";

import React, { useEffect, useRef, useState } from "react";
import { Snowflake } from "./Snowflake";

export const SnowAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [snowflakes, setSnowflakes] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const createSnowflakes = () => {
      const snowflakesCount = 240;
      const newSnowflakes = [];

      for (let i = 0; i < snowflakesCount; i++) {
        let size;
        const sizeCategory = Math.random();

        if (sizeCategory < 0.7) {
          size = Math.random() * 0.2;
        } else if (sizeCategory < 0.9) {
          size = Math.random() * 0.5;
        } else {
          size = Math.random() * 0.8;
        }

        const posX = Math.random() * 100;

        let posY;
        if (i < snowflakesCount * 0.3) {
          posY = -10 - Math.random() * 30;
        } else if (i < snowflakesCount * 0.7) {
          posY = -50 - Math.random() * 100;
        } else {
          posY = -100 - Math.random() * 200;
        }

        const fallDuration =
          size < 0.3
            ? Math.random() * 10 + 30
            : size < 0.5
              ? Math.random() * 10 + 20
              : Math.random() * 10 + 10;

        const baseDelay = (i / snowflakesCount) * 15;
        const randomOffset = Math.random() * 4 - 4;
        const delay = Math.max(0, baseDelay + randomOffset);

        const opacity =
          size < 0.5
            ? Math.random() * 0.3 + 0.6
            : size < 1.5
              ? Math.random() * 0.2 + 0.7
              : Math.random() * 0.1 + 0.8;

        const hue = Math.random() * 20;
        const colorVariation =
          size > 1.5
            ? `rgba(${255 - hue}, ${255 - hue}, 255, ${opacity})`
            : `rgba(255, 255, 255, ${opacity})`;

        const swayFrequency = 3 + Math.random();

        const rotationDuration = Math.random() * 10 + 10;

        newSnowflakes.push(
          <div
            key={i}
            className="snowflake-wrapper"
            style={{
              position: "absolute",
              left: `${posX}%`,
              top: `${posY}px`,
              animationName: "snowfall-vertical",
              animationDuration: `${fallDuration}s`,
              animationTimingFunction: "linear",
              animationDelay: `${delay}s`,
              animationIterationCount: "infinite",
              filter:
                size > 0.5
                  ? "drop-shadow(0 0 1px rgba(255,255,255,0.5))"
                  : "none",
              zIndex: size > 0.5 ? 2 : 1,
            }}
          >
            <div
              style={{
                animationName: "snowfall-horizontal",
                animationDuration: `${swayFrequency}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                transform: `translateX(0px) rotate(0deg)`,
              }}
            >
              <div
                style={{
                  animationName: "snowfall-rotation",
                  animationDuration: `${rotationDuration}s`,
                  animationTimingFunction: "linear",
                  animationIterationCount: "infinite",
                }}
              >
                <Snowflake color={colorVariation} size={size} />
              </div>
            </div>
          </div>,
        );
      }

      setSnowflakes(newSnowflakes);
    };

    const addFallAnimations = () => {
      const existingStyle = document.getElementById("snow-animations");
      if (existingStyle) {
        existingStyle.remove();
      }

      const viewportHeight = Math.max(
        window.innerHeight,
        document.documentElement.clientHeight,
      );

      const animationDistance = viewportHeight * 2;

      const style = document.createElement("style");
      style.id = "snow-animations";

      const styleContent = `
        /* 縦方向の落下 - 線形で常に下に落ちる */
        @keyframes snowfall-vertical {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(${animationDistance}px);
          }
        }
        /* 横方向の揺れ - 左右に揺れる */
        @keyframes snowfall-horizontal {
          from {
            transform: translateX(-5px);
          }
          to {
            transform: translateX(5px);
          }
        }
        /* 回転アニメーション */
        @keyframes snowfall-rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `;

      style.textContent = styleContent;
      document.head.appendChild(style);
    };

    addFallAnimations();
    createSnowflakes();

    const handleResize = () => {
      addFallAnimations();
      createSnowflakes();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      const snowStyle = document.getElementById("snow-animations");
      if (snowStyle) {
        snowStyle.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ overflow: "visible" }}
    >
      {snowflakes}
    </div>
  );
};
