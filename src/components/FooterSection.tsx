import { Instagram, Mail, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import butterflyLogo from "@/assets/butterfly-logo.png";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/gracefulrayoflight?igsh=cnVvZTZuZmwyaW01", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/14Z2Z5jNxg8/", label: "Facebook" },
  { icon: Mail, href: "mailto:rasmeerashika007@gmail.com", label: "Email" },
];

const FooterSection = () => {
  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="section-container text-center">
        <img
          src={butterflyLogo}
          alt="Rasmee Wellness"
          className="w-16 h-16 mx-auto mb-4 object-contain"
          loading="lazy"
          width={64}
          height={64}
        />
        <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
          Rasmee Wellness & Metamorphosis Travel
        </h2>
        <p className="font-body text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          Yoga, bodywork, energy work, tarot guidance & transformative retreats.
        </p>

        <div className="flex items-center justify-center gap-5 mb-8">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mb-8 font-body text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link to="/retreat" className="hover:text-primary transition-colors">Retreat</Link>
          <Link to="/phototherapy" className="hover:text-primary transition-colors">Phototherapy</Link>
        </div>

        <div className="glow-line max-w-xs mx-auto mb-6" />

        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Rasmee Wellness. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
