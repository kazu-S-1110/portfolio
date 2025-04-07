import React from "react";
import { About } from "../sections/about";
import { SnowCanvas } from "@/components/snowCanvas/SnowCanvas";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background snowy-bg">
      <div className="relative">
        <SnowCanvas />
        <div className="container mx-auto pt-6 px-4 relative z-10">
          <Link href="/">
            <Button variant="ghost" className="text-white mb-6" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <About />
      </div>
    </main>
  );
}
