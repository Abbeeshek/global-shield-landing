import { Globe, Brain, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Global Insurance Access",
    description: "Access comprehensive insurance solutions across 50+ countries with seamless cross-border coverage and localized support.",
  },
  {
    icon: Brain,
    title: "AI-Based Assessment",
    description: "Leverage cutting-edge artificial intelligence for accurate risk assessment, personalized premiums, and instant policy recommendations.",
  },
  {
    icon: Zap,
    title: "Digital Claims Processing",
    description: "Experience lightning-fast claim settlements with our fully digital, paperless process that resolves 90% of claims within 24 hours.",
  },
  {
    icon: Users,
    title: "Partner Networks",
    description: "Benefit from our extensive network of healthcare providers, repair centers, and service partners worldwide.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Redefining <span className="text-gradient-gold">Insurance</span> for the Digital Age
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            NW Global Insurance Network combines decades of industry expertise with innovative technology 
            to deliver unparalleled protection for individuals and businesses worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gradient-card border border-border/50 hover:border-gold/40 transition-all duration-500 hover:shadow-gold hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <span className="font-body text-sm text-muted-foreground">Trusted by leading enterprises:</span>
          {["Fortune 500", "ISO 27001", "GDPR Compliant", "SOC 2 Type II"].map((badge, index) => (
            <span
              key={index}
              className="font-body text-xs font-semibold tracking-wider text-muted-foreground px-4 py-2 rounded-full border border-border/50"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
