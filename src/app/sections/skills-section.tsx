import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SKILLS: {
  image: string;
  name: string;
  description: string;
}[] = [
  {
    image: "/skills/react.png",
    name: "React",
    description: "そこそこ自信あり",
  },
  {
    image: "/skills/typescript.png",
    name: "TypeScript",
    description: "そこそこ自信あり",
  },
  {
    image: "/skills/next-js.png",
    name: "Next.js",
    description: "ちょっと自信あり",
  },
  {
    image: "/skills/graphql.png",
    name: "GraphQL",
    description: "そこそこ自信あり",
  },
  {
    image: "/skills/flutter.png",
    name: "Flutter",
    description: "ちょっと自信あり",
  },
  {
    image: "/skills/rails.png",
    name: "Rails",
    description: "あまり自信ない",
  },
  {
    image: "/skills/figma.png",
    name: "Figma",
    description: "ちょっと自信あり",
  },
  {
    image: "/skills/vitejs.png",
    name: "ViteJS",
    description: "ちょっと自信あり",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          技術スタック
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <Card
              className="px-4 py-4 border-secondary justify-center items-center bg-background/50 backdrop-blur-sm min-h-[80px] md:min-h-[150px] flex flex-col gap-2"
              key={index}
            >
              <div className="flex items-center justify-center max-h-full h-full">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={80}
                      height={80}
                      style={{
                        objectFit: "contain",
                        width:
                          skill.name === "Figma" || skill.name === "Flutter"
                            ? "70px"
                            : "80px",
                        height:
                          skill.name === "Figma" || skill.name === "Flutter"
                            ? "70px"
                            : "80px",
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <p className="text-muted-foreground text-xs w-full px-2 text-center">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
