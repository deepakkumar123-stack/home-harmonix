
import { useState } from "react";
import { Menu, Phone, Mail, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Buy", href: "/buy" },
    { name: "Sell", href: "/sell" },
    { name: "Why List With Me", href: "/why-list" },
    { name: "Home Valuation", href: "/valuation" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Team", href: "/team" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const communities = [
    { name: "Charlotte", href: "/communities/charlotte" },
    { name: "Fort Mill", href: "/communities/fort-mill" },
    { name: "Rock Hill", href: "/communities/rock-hill" },
    { name: "Marvin", href: "/communities/marvin" },
    { name: "Matthews", href: "/communities/matthews" },
    { name: "Waxhaw", href: "/communities/waxhaw" },
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
            <Link to="/" className="text-2xl font-bold text-primary">
              Elite<span className="text-accent">Homes</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              
              {/* Communities Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Communities</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {communities.map((community) => (
                      <NavigationMenuLink key={community.name} asChild>
                        <Link
                          to={community.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{community.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore homes in {community.name}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="cta" className="hidden lg:inline-flex" asChild>
              <Link to="/contact">Get Free Consultation</Link>
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
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-accent transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Communities */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-foreground font-medium py-2">
                  <span>Communities</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="pl-4 space-y-2">
                  {communities.map((community) => (
                    <Link
                      key={community.name}
                      to={community.href}
                      className="block text-muted-foreground hover:text-accent transition-smooth py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {community.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Button variant="cta" className="mt-4 w-full" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Free Consultation
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
