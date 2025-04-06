"use client";

import React from "react";
import { useSnowAnimation } from "./useSnowAnimation";

/**
 * 雪のアニメーションを表示するキャンバスコンポーネント
 */
export const SnowCanvas: React.FC = () => {
  const { canvasRef } = useSnowAnimation();

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
};
