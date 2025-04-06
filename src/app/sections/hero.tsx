import React from "react";
import Image from "next/image";
import Avatar from "../../components/Avatar";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
        alt="コーディングイメージ"
        fill
        className="object-cover opacity-20"
        priority
      />
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="flex flex-col items-center justify-center mb-2">
          <Avatar
            src="/images/long-tailed-tit.JPG"
            alt="プロフィール画像"
            size={150}
          />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
          Kazu-S
        </h1>
        <p className="text-xl md:text-xl text-muted-foreground mb-2">
          フロントエンドメインのエンジニャ
        </p>

        <p className="text-md text-muted-foreground">
          そら、もうだんだん早くなって、黒い川の水にあたるかと言いました。いまぼくたちのからだだって考えだって、ただそう感じているの。第一かけるにして水の中からでもはいって来るらしいのでした。琴の星がずうっと西の方へ行っておじぎをしました。
        </p>
      </div>
    </section>
  );
};
