import { CheckCircle2, Shield, Globe2, Wallet, Users2 } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Complete Transparency",
    description: "No hidden clauses, clear policy terms, and upfront pricing with detailed coverage breakdowns.",
  },
  {
    icon: Wallet,
    title: "Affordable Premiums",
    description: "Competitive rates with flexible payment options and discounts for bundled coverage.",
  },
  {
    icon: Globe2,
    title: "Global Partner Network",
    description: "Access to 10,000+ healthcare facilities, repair centers, and service providers worldwide.",
  },
  {
    icon: Users2,
    title: "Community Protection",
    description: "Dedicated programs for communities, MSMEs, and underserved populations with micro-insurance options.",
  },
];

const highlights = [
  "24/7 multilingual customer support",
  "Mobile-first digital experience",
  "Instant policy issuance",
  "AI-powered fraud detection",
  "Secure blockchain records",
  "Personalized risk assessment",
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <span className="font-body text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Built on <span className="text-gradient-gold">Trust</span>, Driven by <span className="text-gradient-gold">Innovation</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-10">
              For over two decades, we've been at the forefront of insurance innovation, 
              combining traditional values with cutting-edge technology to deliver exceptional protection.
            </p>

            {/* Highlights List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/40 transition-all duration-500 hover:shadow-gold"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-card border border-border/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Ready to Get <span className="text-gradient-gold">Protected</span>?
              </h3>
              <p className="font-body text-muted-foreground">
                Join millions of satisfied customers worldwide. Get your personalized quote today.
              </p>
            </div>
            <button className="flex-shrink-0 px-8 py-4 bg-gradient-gold text-primary-foreground font-semibold rounded-lg shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
