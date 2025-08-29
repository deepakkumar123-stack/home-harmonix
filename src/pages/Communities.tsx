
import { MapPin, Home, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Communities = () => {
  const communities = [
    {
      name: "Charlotte",
      description: "The Queen City offers urban sophistication with Southern charm, featuring world-class dining, arts, and business opportunities in the heart of North Carolina.",
      image: "https://images.unsplash.com/photo-1570394499964-2275bb2b1a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: "1,240+ Properties",
      avgPrice: "$485K",
      highlights: ["Uptown District", "NoDa Arts District", "South End"]
    },
    {
      name: "Fort Mill",
      description: "A family-friendly community with excellent schools, beautiful neighborhoods, and easy access to Charlotte's amenities while maintaining small-town charm.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: "780+ Properties",
      avgPrice: "$425K",
      highlights: ["Historic Downtown", "Baxter Village", "Top-rated Schools"]
    },
    {
      name: "Rock Hill",
      description: "Historic charm meets modern living in this vibrant South Carolina city with beautiful parks, rich culture, and growing economic opportunities.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: "650+ Properties",
      avgPrice: "$365K",
      highlights: ["Historic Downtown", "Riverwalk", "Manchester Meadows"]
    },
    {
      name: "Marvin",
      description: "An exclusive enclave offering luxury homes, pristine landscapes, and a peaceful suburban lifestyle with easy access to Charlotte.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: "320+ Properties",
      avgPrice: "$725K",
      highlights: ["Luxury Estates", "Golf Communities", "Excellent Schools"]
    },
    {
      name: "Matthews",
      description: "A charming town that perfectly balances historic character with modern amenities, offering excellent dining and shopping opportunities.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: "890+ Properties",
      avgPrice: "$455K",
      highlights: ["Historic Downtown", "Matthews Beach", "Stumptown Park"]
    },
    {
      name: "Waxhaw",
      description: "A historic town with beautiful antique shops, charming downtown area, and a strong sense of community in Union County.",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      properties: "540+ Properties",
      avgPrice: "$485K",
      highlights: ["Historic Downtown", "Antique Capital", "Family Friendly"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Explore Our Communities</h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Discover the unique character and opportunities each neighborhood offers in the greater Charlotte area
            </p>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-smooth overflow-hidden border-0 shadow-md"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button variant="hero" className="w-full">
                      View Properties
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {community.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {community.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Home className="w-4 h-4 mr-2" />
                        {community.properties}
                      </div>
                      <div className="font-semibold text-accent">
                        Avg. {community.avgPrice}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {community.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      Explore
                    </Button>
                    <Button variant="outline">
                      <TrendingUp className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Charlotte Area Market Overview
            </h2>
            <p className="text-xl text-muted-foreground">
              Current market statistics across our communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">4,200+</div>
              <div className="text-muted-foreground">Total Properties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">$485K</div>
              <div className="text-muted-foreground">Average Price</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">23</div>
              <div className="text-muted-foreground">Days on Market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <div className="text-muted-foreground">Sale to List Price</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Communities;
