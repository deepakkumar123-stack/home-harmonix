import { useParams } from "react-router-dom";
import { MapPin, Home, TrendingUp, Search, Bed, Bath, Square } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CommunityDetail = () => {
  const { slug } = useParams();
  
  // Mock community data - in real app, fetch based on slug
  const community = {
    name: "Charlotte",
    slug: "charlotte",
    description: "The Queen City offers urban sophistication with Southern charm, featuring world-class dining, arts, and business opportunities in the heart of North Carolina.",
    heroImage: "https://images.unsplash.com/photo-1570394499964-2275bb2b1a6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    stats: {
      properties: "1,240+",
      avgPrice: "$485K",
      population: "885,000+",
      medianAge: "34"
    },
    highlights: [
      {
        title: "Uptown District",
        description: "Vibrant downtown area with modern skyscrapers, entertainment venues, and urban living options."
      },
      {
        title: "NoDa Arts District",
        description: "Historic mill district transformed into a hub for artists, galleries, and creative businesses."
      },
      {
        title: "South End",
        description: "Trendy neighborhood known for breweries, restaurants, and the Light Rail line."
      }
    ],
    neighborhoods: [
      "Uptown", "NoDa", "South End", "Dilworth", "Myers Park", "Plaza Midwood", "Ballantyne", "SouthPark"
    ],
    amenities: [
      "Charlotte Douglas International Airport",
      "NASCAR Hall of Fame",
      "Discovery Place Science Museum",
      "Freedom Park",
      "U.S. National Whitewater Center",
      "Charlotte Motor Speedway"
    ]
  };

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      price: "$425,000",
      address: "321 Tryon Street, Charlotte, NC",
      beds: 2,
      baths: 2,
      sqft: "1,350",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale"
    },
    {
      id: 2,
      title: "Luxury High-Rise Unit",
      price: "$675,000",
      address: "555 South Tryon, Charlotte, NC",
      beds: 3,
      baths: 2,
      sqft: "1,850",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale"
    },
    {
      id: 3,
      title: "Historic Dilworth Home",
      price: "$825,000",
      address: "234 Park Avenue, Charlotte, NC",
      beds: 4,
      baths: 3,
      sqft: "2,650",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale"
    },
    {
      id: 4,
      title: "NoDa Townhouse",
      price: "$485,000",
      address: "789 North Davidson, Charlotte, NC",
      beds: 3,
      baths: 2,
      sqft: "1,950",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={community.heroImage}
          alt={community.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{community.name}</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">{community.description}</p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">{community.stats.properties}</div>
              <div className="text-muted-foreground">Properties Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">{community.stats.avgPrice}</div>
              <div className="text-muted-foreground">Average Price</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">{community.stats.population}</div>
              <div className="text-muted-foreground">Population</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">{community.stats.medianAge}</div>
              <div className="text-muted-foreground">Median Age</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Highlights */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Area Highlights</h2>
              <div className="space-y-6">
                {community.highlights.map((highlight, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Neighborhoods & Amenities */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Popular Neighborhoods</h3>
                <div className="grid grid-cols-2 gap-3">
                  {community.neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="bg-muted/30 rounded-lg p-3 text-center text-sm font-medium">
                      {neighborhood}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Local Amenities</h3>
                <div className="space-y-2">
                  {community.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Search */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Properties in {community.name}
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover your next home in this vibrant community
            </p>
          </div>

          {/* Search Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Input placeholder="Search by address..." className="md:col-span-2" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="300-500">$300K - $500K</SelectItem>
                    <SelectItem value="500-750">$500K - $750K</SelectItem>
                    <SelectItem value="750-1000">$750K - $1M</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2+ Beds</SelectItem>
                    <SelectItem value="3">3+ Beds</SelectItem>
                    <SelectItem value="4">4+ Beds</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="cta">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-smooth">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {property.status}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{property.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span className="text-xs">{property.address}</span>
                    </div>
                    <div className="text-xl font-bold text-accent">{property.price}</div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="w-3 h-3" />
                      <span>{property.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-3 h-3" />
                      <span>{property.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-3 h-3" />
                      <span>{property.sqft}</span>
                    </div>
                  </div>
                  
                  <Button variant="default" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">View All Properties</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Explore {community.name}?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let our expert agents help you find the perfect home in this community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Schedule a Tour
              </Button>
              <Button variant="outline" size="lg">
                Ask a Question
              </Button>
              <Button variant="outline" size="lg">
                Save to Wishlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityDetail;