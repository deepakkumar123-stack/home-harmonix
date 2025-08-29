import { Heart, Bed, Bath, Square, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Mock data - replace with MLS API data
const listings = [
  {
    id: 1,
    price: "$675,000",
    address: "123 Oak Street, Charlotte, NC",
    beds: 4,
    baths: 3,
    sqft: "2,450",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    status: "For Sale",
    featured: true
  },
  {
    id: 2,
    price: "$485,000",
    address: "456 Pine Avenue, Rock Hill, SC",
    beds: 3,
    baths: 2,
    sqft: "1,850",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    status: "For Sale",
    featured: false
  },
  {
    id: 3,
    price: "$825,000",
    address: "789 Elm Court, Fort Mill, SC",
    beds: 5,
    baths: 4,
    sqft: "3,200",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    status: "For Sale",
    featured: true
  },
  {
    id: 4,
    price: "$395,000",
    address: "321 Maple Drive, Marvin, NC",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
    status: "For Sale",
    featured: false
  }
];

const LatestListings = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Latest Listings
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the newest properties in Charlotte and surrounding areas. Each home is carefully selected for quality and value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {listings.map((listing) => (
            <Card 
              key={listing.id} 
              className="group hover:shadow-xl transition-smooth overflow-hidden border-0 shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.address}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-medium">
                    {listing.status}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                {listing.featured && (
                  <div className="absolute top-3 left-16">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <div className="mb-3">
                  <div className="text-2xl font-bold text-accent mb-1">
                    {listing.price}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {listing.address}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    {listing.beds} beds
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    {listing.baths} baths
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    {listing.sqft} sqft
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestListings;