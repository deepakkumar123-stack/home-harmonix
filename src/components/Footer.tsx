import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Buy", href: "#buy" },
    { name: "Sell", href: "#sell" },
    { name: "Communities", href: "#communities" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const communities = [
    { name: "Charlotte", href: "#charlotte" },
    { name: "Fort Mill", href: "#fort-mill" },
    { name: "Rock Hill", href: "#rock-hill" },
    { name: "Marvin", href: "#marvin" },
    { name: "Matthews", href: "#matthews" },
    { name: "Waxhaw", href: "#waxhaw" }
  ];

  const services = [
    { name: "Home Valuation", href: "#valuation" },
    { name: "Market Analysis", href: "#market-analysis" },
    { name: "Property Search", href: "#search" },
    { name: "Investment Properties", href: "#investment" },
    { name: "First-Time Buyers", href: "#first-time" },
    { name: "Luxury Homes", href: "#luxury" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Elite<span className="text-accent">Homes</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in Charlotte real estate. Helping families find their dream homes and achieve their real estate goals for over 15 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>info@realestate.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>123 Main St, Charlotte, NC 28202</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Communities</h3>
            <ul className="space-y-2">
              {communities.map((community) => (
                <li key={community.name}>
                  <a
                    href={community.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {community.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Map Placeholder */}
        <div className="py-8 border-t border-primary-foreground/20">
          <div className="bg-primary-foreground/10 rounded-lg p-6 text-center">
            <h3 className="font-semibold text-lg mb-2">Visit Our Office</h3>
            <p className="text-primary-foreground/80 mb-4">
              Located in the heart of Charlotte, we're here to serve you.
            </p>
            <Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View on Google Maps
            </Button>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="py-6 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-foreground/80">Follow Us:</span>
            <div className="flex gap-2">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10"
                >
                  <Icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
            <span>© 2024 EliteHomes Real Estate. All rights reserved.</span>
            <a href="#privacy" className="hover:text-accent transition-smooth">
              Privacy Policy
            </a>
            <a href="#dmca" className="hover:text-accent transition-smooth">
              DMCA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;