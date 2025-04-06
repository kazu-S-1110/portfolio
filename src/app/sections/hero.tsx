import React from "react";
import Bird from "../../components/Bird";
import { SnowCanvas } from "../../components/snowCanvas/SnowCanvas";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center snowy-bg overflow-hidden">
      <SnowCanvas />

      <div className="container px-4 mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Kazu-S
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          フロントエンドメインのエンジニア
        </p>

        <div className="flex justify-center items-center gap-10 mb-10">
          <Bird className="transform scale-75" delay={0} />
          <Bird delay={1} />
          <Bird className="transform scale-75" delay={2} />
        </div>

        <p className="text-md text-gray-400 max-w-2xl mx-auto">
          雪の中で遊ぶシマエナガのように、クリエイティブでユニークなウェブ体験を創造します。
          技術とデザインを組み合わせて、心に残るポートフォリオをお届けします。
        </p>
      </div>
    </section>
  );
};
