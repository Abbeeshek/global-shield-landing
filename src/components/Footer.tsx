import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      "Life Insurance",
      "Health Insurance",
      "Vehicle Insurance",
      "Property Insurance",
      "Corporate Insurance",
    ],
    company: [
      "About Us",
      "Leadership",
      "Careers",
      "Press",
      "Partners",
    ],
    support: [
      "Help Center",
      "File a Claim",
      "Find a Provider",
      "Contact Us",
      "FAQs",
    ],
    legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Compliance",
    ],
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top Golden Glow Line */}
      <div className="absolute top-0 left-0 w-full h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-primary/20 blur-xl" />
      </div>

      <div className="absolute inset-0 bg-charcoal" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">NW GLOBAL</h3>
                <p className="font-body text-xs text-muted-foreground tracking-wider">INSURANCE NETWORK</p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Empowering individuals and businesses with innovative insurance solutions. 
              Your trusted partner in protection since 2001.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contact@nwglobal.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">contact@nwglobal.com</span>
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-body text-sm">+1 (800) 123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">Global Headquarters, New York</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright & Platform Branding */}
            <div className="text-center md:text-left">
              <p className="font-body text-sm text-muted-foreground mb-1">
                © {currentYear} NW Global Insurance Network. All rights reserved.
              </p>
              <p className="font-body text-xs text-muted-foreground/60">
                Part of <span className="text-gradient-gold font-medium">NW Global Business Platform</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Golden Glow */}
      <div className="absolute bottom-0 left-0 w-full h-1">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-primary/30 blur-2xl" />
      </div>
    </footer>
  );
};

export default Footer;
