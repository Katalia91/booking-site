import React from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
}
function Hero({ title, subtitle }: HeroProps) {
  return (
    <header className="hero-header">
      <div className="hero-content">
        <h1 className="hero">{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}
export default Hero;
