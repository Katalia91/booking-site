import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
}
function Hero({ title, subtitle }: HeroProps) {
  return (
    <header className="hero-header">
      <h1 className="hero">{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
export default Hero;
