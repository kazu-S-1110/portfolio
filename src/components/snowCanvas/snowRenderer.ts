/**
 * 雪の結晶を描画するユーティリティ
 */
export function drawSnowflake(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  angle: number,
  opacity: number,
): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.globalAlpha = opacity;

  // 中心の円
  ctx.beginPath();
  ctx.arc(0, 0, size / 4, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();

  // 6方向の線（結晶の枝）
  const armLength = size / 2;
  for (let i = 0; i < 6; i++) {
    const branchAngle = (Math.PI / 3) * i;

    ctx.save();
    ctx.rotate(branchAngle);

    // メインの枝
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(armLength, 0);
    ctx.lineWidth = size / 10;
    ctx.strokeStyle = "white";
    ctx.stroke();

    // 小枝1（中間部分）
    if (size > 4) {
      ctx.beginPath();
      ctx.moveTo(armLength * 0.5, 0);
      ctx.lineTo(armLength * 0.5 + armLength * 0.3, armLength * 0.3);
      ctx.lineWidth = size / 12;
      ctx.strokeStyle = "white";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(armLength * 0.5, 0);
      ctx.lineTo(armLength * 0.5 + armLength * 0.3, -armLength * 0.3);
      ctx.stroke();
    }

    // 小枝2（先端部分）
    if (size > 6) {
      ctx.beginPath();
      ctx.moveTo(armLength * 0.8, 0);
      ctx.lineTo(armLength * 0.8 + armLength * 0.2, armLength * 0.2);
      ctx.lineWidth = size / 15;
      ctx.strokeStyle = "white";
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(armLength * 0.8, 0);
      ctx.lineTo(armLength * 0.8 + armLength * 0.2, -armLength * 0.2);
      ctx.stroke();
    }

    ctx.restore();
  }

  ctx.restore();
}
