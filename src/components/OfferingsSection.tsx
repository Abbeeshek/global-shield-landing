import { Heart, Activity, Car, Home, Building2, FileCheck } from "lucide-react";

const offerings = [
  {
    icon: Heart,
    title: "Life & Term Insurance",
    description: "Comprehensive life coverage with flexible terms, ensuring your loved ones are protected with guaranteed payouts and tax benefits.",
  },
  {
    icon: Activity,
    title: "Health & Wellness Insurance",
    description: "Complete healthcare coverage including preventive care, hospitalization, critical illness, and wellness programs.",
  },
  {
    icon: Car,
    title: "Vehicle & Travel Insurance",
    description: "Full protection for your vehicles and travels with roadside assistance, theft coverage, and worldwide travel benefits.",
  },
  {
    icon: Home,
    title: "Property & Asset Protection",
    description: "Safeguard your property and valuable assets against natural disasters, theft, and unforeseen damages.",
  },
  {
    icon: Building2,
    title: "Corporate & MSME Insurance",
    description: "Tailored business solutions including liability coverage, employee benefits, and operational risk management.",
  },
  {
    icon: FileCheck,
    title: "Digital Claim Processing",
    description: "Seamless, paperless claims with AI-powered verification, real-time tracking, and rapid settlement within 24-48 hours.",
  },
];

const OfferingsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-charcoal-light">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-dark/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold tracking-widest text-primary uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Key <span className="text-gradient-gold">Offerings</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive insurance solutions designed to protect what matters most to you and your business.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border/30 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Container */}
              <div className="relative w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:shadow-gold-lg transition-shadow duration-500">
                <offering.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="relative font-display text-xl font-semibold mb-4 text-foreground">
                {offering.title}
              </h3>
              <p className="relative font-body text-muted-foreground text-sm leading-relaxed">
                {offering.description}
              </p>

              {/* Learn More Link */}
              <div className="relative mt-6">
                <span className="font-body text-sm font-medium text-primary hover:text-gold-light cursor-pointer transition-colors inline-flex items-center gap-2 group/link">
                  Learn more
                  <svg 
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
