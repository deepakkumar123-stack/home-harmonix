import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your
            <span className="block text-accent">Dream Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Discover exceptional properties in the most desirable neighborhoods with personalized service from Charlotte's premier real estate team.
          </p>

          {/* Search Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 max-w-4xl mx-auto animate-scale-in border border-white/20">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Start Your Property Search
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="md:col-span-2">
                <Input
                  placeholder="Enter area or address..."
                  className="bg-white/20 border-white/30 text-white placeholder-white/70 h-12"
                />
              </div>
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white h-12">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-white/20 border-white/30 text-white h-12">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-300k">$0 - $300K</SelectItem>
                  <SelectItem value="300k-500k">$300K - $500K</SelectItem>
                  <SelectItem value="500k-750k">$500K - $750K</SelectItem>
                  <SelectItem value="750k-1m">$750K - $1M</SelectItem>
                  <SelectItem value="1m+">$1M+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search Properties
              </Button>
              <Button variant="outline" size="lg" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <MapPin className="w-5 h-5 mr-2" />
                View on Map
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/90">Homes Sold</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">$2.5B+</div>
              <div className="text-white/90">In Sales Volume</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">98%</div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;