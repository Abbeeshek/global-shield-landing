import { Shield, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Digital security network"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Animated Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-dark/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Shield Icon */}
        <div className="mb-8 animate-fade-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-gold shadow-gold-lg animate-float">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up-delay-1">
          <span className="text-foreground">NW GLOBAL</span>
          <br />
          <span className="text-gradient-gold">INSURANCE NETWORK</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up-delay-2">
          Secure Today. Empower Tomorrow. Protect Every Life & Business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-lg shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary/50 text-foreground font-semibold rounded-lg border border-gold/30 hover:border-gold/60 hover:bg-secondary transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-up-delay-3">
          {[
            { value: "50+", label: "Countries" },
            { value: "1M+", label: "Policies" },
            { value: "99.9%", label: "Claims Processed" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
              <div className="font-display text-2xl md:text-3xl font-bold text-gradient-gold">{stat.value}</div>
              <div className="font-body text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
