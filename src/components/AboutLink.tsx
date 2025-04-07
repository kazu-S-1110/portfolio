"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutLink() {
  return (
    <Link href="/about">
      <Button variant="ghost">About Me</Button>
    </Link>
  );
}
