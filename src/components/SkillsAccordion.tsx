import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const DETAILED_SKILLS = [
  "HTML/CSS",
  "JavaScript",
  "Tailwind CSS",
  "CSS Modules",
  "Node.js",
  "Prisma",
  "Git",
  "GitHub",
  "GitHub Actions",
  "Storybook",
  "Figma",
  "REST API",
  "Vite",
  "Firebase",
  "Docker",
  "Cursor",
];

export const SkillsAccordion = () => {
  return (
    <Accordion type="single" collapsible className="max-w-2xl mx-auto">
      <AccordionItem value="skills" className="border-b-0">
        <AccordionTrigger className="text-primary px-3 py-2 gap-2 h-8">
          More...
        </AccordionTrigger>
        <AccordionContent className="container mx-auto px-4  left-0 right-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 pt-4">
            {DETAILED_SKILLS.map((skill, idx) => (
              <Card
                key={idx}
                className="p-2 border-secondary flex justify-center items-center bg-background/50 backdrop-blur-sm"
              >
                <span className="text-sm text-foreground">{skill}</span>
              </Card>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
