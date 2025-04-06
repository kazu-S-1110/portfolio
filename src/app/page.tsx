import { HeroSection } from "./sections/hero-section";
import { SkillsSection } from "./sections/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SkillsSection />
    </main>
  );
}
