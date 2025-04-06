import { Hero } from "./sections/hero";
import { About } from "./sections/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
    </main>
  );
}
