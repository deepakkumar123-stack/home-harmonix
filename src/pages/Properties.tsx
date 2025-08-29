import { useState } from "react";
import { Search, Filter, Grid, List, MapPin, Bed, Bath, Square, Map } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'map'>('grid');
  const [filters, setFilters] = useState({
    search: "",
    propertyType: "",
    minPrice: "",
    maxPrice: "",
    beds: "",
    baths: "",
    status: ""
  });

  const mockProperties = [
    {
      id: 1,
      title: "Luxury Modern Home in Charlotte",
      price: "$750,000",
      address: "123 Oak Street, Charlotte, NC",
      beds: 4,
      baths: 3,
      sqft: "2,850",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      type: "House",
      featured: true
    },
    {
      id: 2,
      title: "Charming Family Home in Fort Mill",
      price: "$485,000",
      address: "456 Pine Avenue, Fort Mill, SC",
      beds: 3,
      baths: 2,
      sqft: "2,100",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      type: "House"
    },
    {
      id: 3,
      title: "Executive Estate in Marvin",
      price: "$925,000",
      address: "789 Elm Drive, Marvin, NC",
      beds: 5,
      baths: 4,
      sqft: "3,500",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      type: "House"
    },
    {
      id: 4,
      title: "Downtown Charlotte Condo",
      price: "$325,000",
      address: "321 Main Street, Charlotte, NC",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      type: "Condo"
    },
    {
      id: 5,
      title: "Rock Hill Townhouse",
      price: "$285,000",
      address: "654 Maple Court, Rock Hill, SC",
      beds: 3,
      baths: 2,
      sqft: "1,650",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "Under Contract",
      type: "Townhouse"
    },
    {
      id: 6,
      title: "Matthews Starter Home",
      price: "$385,000",
      address: "987 Cedar Lane, Matthews, NC",
      beds: 3,
      baths: 2,
      sqft: "1,850",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      status: "For Sale",
      type: "House"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Search Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Find Your Perfect Property</h1>
            
            {/* Main Search Bar */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="md:col-span-2">
                    <Input 
                      placeholder="Enter area, address, or MLS ID" 
                      className="h-12"
                      value={filters.search}
                      onChange={(e) => setFilters({...filters, search: e.target.value})}
                    />
                  </div>
                  <Select value={filters.propertyType} onValueChange={(value) => setFilters({...filters, propertyType: value})}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="cta" className="h-12">
                    <Search className="w-5 h-5 mr-2" />
                    Search
                  </Button>
                </div>
                
                {/* Advanced Filters */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  <Select value={filters.minPrice} onValueChange={(value) => setFilters({...filters, minPrice: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Min Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="200000">$200K</SelectItem>
                      <SelectItem value="300000">$300K</SelectItem>
                      <SelectItem value="400000">$400K</SelectItem>
                      <SelectItem value="500000">$500K</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={filters.maxPrice} onValueChange={(value) => setFilters({...filters, maxPrice: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Max Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="400000">$400K</SelectItem>
                      <SelectItem value="500000">$500K</SelectItem>
                      <SelectItem value="750000">$750K</SelectItem>
                      <SelectItem value="1000000">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={filters.beds} onValueChange={(value) => setFilters({...filters, beds: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Beds" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1+ Bed</SelectItem>
                      <SelectItem value="2">2+ Beds</SelectItem>
                      <SelectItem value="3">3+ Beds</SelectItem>
                      <SelectItem value="4">4+ Beds</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={filters.baths} onValueChange={(value) => setFilters({...filters, baths: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Baths" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1+ Bath</SelectItem>
                      <SelectItem value="2">2+ Baths</SelectItem>
                      <SelectItem value="3">3+ Baths</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select value={filters.status} onValueChange={(value) => setFilters({...filters, status: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="for-sale">For Sale</SelectItem>
                      <SelectItem value="under-contract">Under Contract</SelectItem>
                      <SelectItem value="sold">Recently Sold</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    More Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results & Controls */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Showing {mockProperties.length} properties
              </span>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="sqft">Square Footage</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">View:</span>
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'map' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('map')}
              >
                <Map className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {viewMode === 'map' ? (
            <div className="bg-muted/50 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Map className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Map View</h3>
                <p className="text-muted-foreground">Interactive property map will be displayed here</p>
              </div>
            </div>
          ) : (
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {mockProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-smooth group">
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className={`w-full object-cover group-hover:scale-105 transition-smooth ${viewMode === 'list' ? 'h-32' : 'h-48'}`}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant={property.status === 'For Sale' ? 'default' : 'secondary'}>
                        {property.status}
                      </Badge>
                      {property.featured && (
                        <Badge variant="destructive">Featured</Badge>
                      )}
                    </div>
                    <Button
                      variant="hero"
                      size="sm"
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth"
                    >
                      Save
                    </Button>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className={viewMode === 'list' ? 'flex gap-6' : ''}>
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold text-foreground mb-2">{property.title}</h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{property.address}</span>
                          </div>
                          <div className="text-2xl font-bold text-accent">{property.price}</div>
                        </div>
                        
                        <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Bed className="w-4 h-4" />
                            <span>{property.beds} beds</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            <span>{property.baths} baths</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Square className="w-4 h-4" />
                            <span>{property.sqft} sqft</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={viewMode === 'list' ? 'flex flex-col justify-end' : ''}>
                        <div className="flex gap-2">
                          <Button variant="default" className="flex-1">View Details</Button>
                          <Button variant="outline">Tour</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">Load More Properties</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;