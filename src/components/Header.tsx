import { useState } from "react";
import { Menu, Phone, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Buy", href: "#buy" },
    { name: "Sell", href: "#sell" },
    { name: "Why List With Me", href: "#why-list" },
    { name: "Home Valuation", href: "#valuation" },
    { name: "Communities", href: "#communities", hasDropdown: true },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Team", href: "#team" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className={cn("sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm", className)}>
      <div className="container mx-auto px-4">
        {/* Top Contact Bar */}
        <div className="hidden lg:flex items-center justify-between py-2 text-sm border-b">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>info@realestate.com</span>
            </div>
          </div>
          <div className="text-muted-foreground">
            Your Dream Home Awaits
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              Elite<span className="text-accent">Homes</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-smooth font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="cta" className="hidden lg:inline-flex">
              Get Free Consultation
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="cta" className="mt-4 w-full">
                Get Free Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;