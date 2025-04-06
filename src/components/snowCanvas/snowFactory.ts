import { Snowflake } from "./snow";

/**
 * キャンバスを設定し、解像度を適切に調整する
 */
export function setupCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
) {
  // 現在のデバイスピクセル比を取得
  const dpr = window.devicePixelRatio || 1;

  // キャンバスの表示サイズを設定
  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;
  canvas.style.width = `${displayWidth}px`;
  canvas.style.height = `${displayHeight}px`;

  // キャンバスの実際の解像度を高くする
  canvas.width = Math.floor(displayWidth * dpr);
  canvas.height = Math.floor(displayHeight * dpr);

  // 描画コンテキストをスケールしてデバイスピクセル比に対応
  ctx.scale(dpr, dpr);

  return { width: displayWidth, height: displayHeight, dpr };
}

/**
 * デバイスの性能に応じた雪の粒子数を決定する
 */
export function determineSnowCount(): number {
  // 画面サイズに応じて雪の数を調整
  const baseCount = Math.min(window.innerWidth, 1920) / 6;

  // デバイス性能を考慮
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isLowPower =
    navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

  // デバイスに応じて数を調整
  let count = baseCount;
  if (isMobile || isLowPower) count = baseCount / 2;
  if (window.innerWidth < 768) count = baseCount / 2.5;

  // 最小/最大数を設定
  return Math.min(Math.max(Math.floor(count), 100), 800);
}

/**
 * 雪の結晶を生成する
 */
export function createSnowflake(
  width: number,
  height: number,
  index: number,
  totalCount: number,
): Snowflake {
  // サイズカテゴリ
  const sizeCategory = Math.random();
  let size;

  if (sizeCategory < 0.7) {
    size = 2 + Math.random() * 3; // 小さいサイズ (2-5px)
  } else if (sizeCategory < 0.9) {
    size = 5 + Math.random() * 3; // 中くらいのサイズ (5-8px)
  } else {
    size = 8 + Math.random() * 4; // 大きいサイズ (8-12px)
  }

  // すべての雪を画面外の上部に配置（横位置はランダム）
  const x = Math.random() * width;

  // インデックスに基づいて垂直位置を分散させて、一斉に降らないようにする
  // 最初の雪はすぐに画面に入り、最後の雪は画面上部から遠い位置に配置
  const maxInitialOffset = Math.max(height, 500); // 十分な高さを確保
  const y = -size - (index / totalCount) * maxInitialOffset;

  // 落下速度（小さい雪はゆっくり、大きい雪は速い）
  const speed =
    size < 4
      ? 25 + Math.random() * 10
      : size < 8
        ? 35 + Math.random() * 15
        : 50 + Math.random() * 20;

  // 横揺れの強さと速度（小さい雪ほど揺れやすい）
  const swayFactor = size < 4 ? 2.5 : size < 8 ? 1.8 : 1.2;
  const swaySpeed = 1 + Math.random() * 2;

  // 回転
  const angle = Math.random() * Math.PI * 2;
  const rotationSpeed = 0.2 + Math.random() * 0.8;

  // 時間オフセット（遅延効果用）
  const timeOffset = Math.random() * 100;

  // 不透明度
  const opacity =
    size < 4
      ? 0.6 + Math.random() * 0.3
      : size < 8
        ? 0.7 + Math.random() * 0.2
        : 0.8 + Math.random() * 0.1;

  return {
    x,
    y,
    size,
    speed,
    opacity,
    swayFactor,
    swaySpeed,
    angle,
    rotationSpeed,
    timeOffset,
  };
}

/**
 * 雪の結晶の配列を初期化する
 */
export function initSnowflakes(width: number, height: number): Snowflake[] {
  const count = determineSnowCount();
  const snowflakes: Snowflake[] = [];

  for (let i = 0; i < count; i++) {
    snowflakes.push(createSnowflake(width, height, i, count));
  }

  return snowflakes;
}
