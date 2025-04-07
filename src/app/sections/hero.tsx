import React from "react";
import { SnowCanvas } from "../../components/snowCanvas/SnowCanvas";
import Avatar from "@/components/Avatar";
import { Bio } from "@/components/Bio";
import { Github, Twitter } from "lucide-react";
import { AboutLink } from "@/components/AboutLink";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center snowy-bg overflow-hidden">
      <SnowCanvas />

      <div className="container px-4 mx-auto flex flex-col text-center items-center justify-center relative z-10 gap-2">
        <Avatar src="/images/long-tailed-tit.JPG" alt="シマエナガ" />

        <h1 className="text-3xl md:text-4xl font-bold  text-white">Kazu-S</h1>
        <p className="text-xl md:text-2xl text-gray-300">
          フロントエンドメインのWebエンジニャ
        </p>

        {/* TODO: シマエナガをcssで表現 */}
        {/* <div className="flex justify-center items-center gap-10 mb-10">
          <Bird className="transform scale-75" delay={0} />
          <Bird delay={1} />
          <Bird className="transform scale-75" delay={2} />
        </div> */}

        <Bio />

        <div className="flex justify-center items-center gap-6 mt-4">
          <a
            href="https://github.com/kazu-S-1110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-muted-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://x.com/posekaz61110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-muted-foreground transition-colors"
            aria-label="X (Twitter)"
          >
            <Twitter size={24} />
          </a>
        </div>

        <div className="mt-4">
          <AboutLink />
        </div>
      </div>
    </section>
  );
};
