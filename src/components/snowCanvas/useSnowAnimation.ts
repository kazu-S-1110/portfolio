"use client";

import { useEffect, useRef } from "react";
import { Snowflake } from "./snow";
import { drawSnowflake } from "./snowRenderer";
import { initSnowflakes, setupCanvas } from "./snowFactory";

/**
 * 雪のアニメーションを管理するカスタムフック
 */
export function useSnowAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const timeRef = useRef<number>(0);

  // アニメーションループ処理
  const createAnimationLoop = (ctx: CanvasRenderingContext2D) => {
    const animate = (timestamp: number) => {
      if (!ctx) return;

      // 経過時間を更新
      if (!timeRef.current) timeRef.current = timestamp;
      const elapsed = timestamp - timeRef.current;
      timeRef.current = timestamp;

      // キャンバスをクリア（表示用サイズ基準）
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      ctx.clearRect(0, 0, displayWidth, displayHeight);

      // 各雪片を更新して描画
      snowflakesRef.current.forEach((snowflake) => {
        // 時間に基づいた動き計算
        const time = timestamp * 0.001 + snowflake.timeOffset;

        // 速度に基づいた落下（秒単位で計算）
        snowflake.y += (snowflake.speed * elapsed) / 1000;

        // 横の揺れ
        const sway =
          Math.sin(time * snowflake.swaySpeed) * snowflake.swayFactor;

        // 回転
        snowflake.angle += (snowflake.rotationSpeed * elapsed) / 1000;

        // 画面外に出た場合は上に戻す
        if (snowflake.y > displayHeight + snowflake.size) {
          snowflake.y = -snowflake.size * 2;
          snowflake.x = Math.random() * displayWidth;
        }

        // 描画位置（横揺れを加算）
        const drawX = snowflake.x + sway;
        const drawY = snowflake.y;

        // 雪の結晶を描画
        drawSnowflake(
          ctx,
          drawX,
          drawY,
          snowflake.size,
          snowflake.angle,
          snowflake.opacity,
        );
      });

      // 次のフレームを要求
      animationRef.current = requestAnimationFrame(animate);
    };

    return animate;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 初期化と開始
    const { width, height } = setupCanvas(canvas, ctx);
    snowflakesRef.current = initSnowflakes(width, height);

    // アニメーションの開始
    const animate = createAnimationLoop(ctx);
    animationRef.current = requestAnimationFrame(animate);

    // リサイズイベントハンドラ
    const handleResize = () => {
      const { width, height } = setupCanvas(canvas, ctx);
      snowflakesRef.current = initSnowflakes(width, height);
    };

    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { canvasRef };
}
