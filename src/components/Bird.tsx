import React from "react";
import "./Bird.css";

interface BirdProps {
  className?: string;
  delay?: number;
}

export default function Bird({ className = "", delay = 0 }: BirdProps) {
  return (
    <div
      className={`bird ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="body"></div>
      <div className="head"></div>
      <div className="beak"></div>
      <div className="eye"></div>
      <div className="tail"></div>
      <div className="wing"></div>
    </div>
  );
}
