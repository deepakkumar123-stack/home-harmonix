import { ArrowRight, MapPin, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const communities = [
  {
    name: "Charlotte",
    description: "The Queen City offers urban sophistication with Southern charm, featuring world-class dining, arts, and business opportunities.",
    image: "https://images.unsplash.com/photo-1570394499964-2275bb2b1a6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    properties: "1,240+ Properties",
    avgPrice: "$485K"
  },
  {
    name: "Fort Mill",
    description: "A family-friendly community with excellent schools, beautiful neighborhoods, and easy access to Charlotte's amenities.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    properties: "780+ Properties",
    avgPrice: "$425K"
  },
  {
    name: "Rock Hill",
    description: "Historic charm meets modern living in this vibrant South Carolina city with parks, culture, and growing opportunities.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    properties: "650+ Properties",
    avgPrice: "$365K"
  },
  {
    name: "Marvin",
    description: "An exclusive enclave offering luxury homes, pristine landscapes, and a peaceful suburban lifestyle.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    properties: "320+ Properties",
    avgPrice: "$725K"
  }
];

const FeaturedCommunities = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Explore My Neighborhoods
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the unique character and opportunities each community offers, from urban excitement to suburban tranquility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {communities.map((community, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-smooth overflow-hidden border-0 shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button variant="hero" size="lg">
                    View Properties
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {community.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {community.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Home className="w-4 h-4 mr-1" />
                      {community.properties}
                    </div>
                    <div className="font-semibold text-accent">
                      Avg. {community.avgPrice}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            <MapPin className="w-5 h-5 mr-2" />
            View All Communities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCommunities;