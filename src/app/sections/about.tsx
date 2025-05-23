import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SkillsAccordion } from "@/components/SkillsAccordion";
import { WhatICherish } from "@/components/WhatICherish";

const SKILLS: {
  image: string;
  name: string;
}[] = [
  {
    image: "/skills/react.png",
    name: "React",
  },
  {
    image: "/skills/typescript.png",
    name: "TypeScript",
  },
  {
    image: "/skills/next-js.png",
    name: "Next.js",
  },
  {
    image: "/skills/graphql.png",
    name: "GraphQL",
  },
  {
    image: "/skills/flutter.png",
    name: "Flutter",
  },
  {
    image: "/skills/rails.png",
    name: "Rails",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 relative z-10">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-6 mb-8 max-w-2xl mx-auto">
          {SKILLS.map((skill, index) => (
            <Card
              className="p-2 border-secondary/20 justify-center items-center bg-background/30 backdrop-blur-sm min-h-[30px] flex flex-col gap-2"
              key={index}
            >
              <div className="flex items-center justify-center max-h-full h-full">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      width={30}
                      height={30}
                      style={{
                        objectFit: "contain",
                        width: skill.name === "Rails" ? "40px" : "30px",
                        height: skill.name === "Rails" ? "40px" : "30px",
                      }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </Card>
          ))}
        </div>

        <div className="mb-16 text-white">
          <SkillsAccordion />
        </div>

        <div className="text-white">
          <WhatICherish />
        </div>
      </div>
    </section>
  );
};
