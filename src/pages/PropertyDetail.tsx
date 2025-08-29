import { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  MapPin, Bed, Bath, Square, Calendar, Heart, Share2, 
  Phone, Mail, ChevronLeft, ChevronRight, Play, Car,
  TreePine, Wifi, Zap, Droplets, Shield, Home
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [tourForm, setTourForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  });

  // Mock property data
  const property = {
    id: id,
    title: "Luxury Modern Home in Charlotte",
    price: "$750,000",
    address: "123 Oak Street, Charlotte, NC 28202",
    beds: 4,
    baths: 3,
    sqft: "2,850",
    lotSize: "0.25 acres",
    yearBuilt: "2019",
    propertyType: "Single Family Home",
    status: "For Sale",
    daysOnMarket: 23,
    pricePerSqft: "$263",
    hoaFees: "$125/month",
    description: "This stunning modern home features an open-concept design with high-end finishes throughout. The gourmet kitchen boasts quartz countertops, stainless steel appliances, and a large island perfect for entertaining. The master suite includes a walk-in closet and spa-like bathroom. Additional features include a two-car garage, covered patio, and beautifully landscaped yard.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    features: [
      "Central Air Conditioning",
      "Hardwood Floors",
      "Granite Countertops",
      "Stainless Steel Appliances",
      "Walk-in Closets",
      "Two-Car Garage",
      "Covered Patio",
      "Landscaped Yard",
      "Security System",
      "High-Speed Internet Ready"
    ],
    agent: {
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      phone: "(555) 123-4567",
      email: "sarah.johnson@realty.com",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    mortgage: {
      downPayment: 150000,
      loanAmount: 600000,
      interestRate: 6.5,
      monthlyPayment: 3794
    }
  };

  const similarProperties = [
    {
      id: 2,
      title: "Executive Estate in Marvin",
      price: "$925,000",
      address: "789 Elm Drive, Marvin, NC",
      beds: 5,
      baths: 4,
      sqft: "3,500",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Charming Family Home",
      price: "$485,000",
      address: "456 Pine Avenue, Fort Mill, SC",
      beds: 3,
      baths: 2,
      sqft: "2,100",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tour request:", tourForm);
    // TODO: Submit tour request
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Property Images */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={property.images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Image Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-smooth"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-smooth"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="hero" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="hero" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="hero" size="sm">
              <Play className="w-4 h-4 mr-2" />
              Tour
            </Button>
          </div>
        </div>
        
        {/* Image Thumbnails */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex gap-2 overflow-x-auto">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-smooth ${
                    index === currentImageIndex ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Property Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="default">{property.status}</Badge>
                  <Badge variant="outline">{property.propertyType}</Badge>
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{property.title}</h1>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>{property.address}</span>
                </div>
                <div className="text-4xl font-bold text-accent mb-6">{property.price}</div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold text-foreground">{property.beds}</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold text-foreground">{property.baths}</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <Square className="w-6 h-6 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold text-foreground">{property.sqft}</div>
                    <div className="text-sm text-muted-foreground">Sq Ft</div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <TreePine className="w-6 h-6 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold text-foreground">{property.lotSize}</div>
                    <div className="text-sm text-muted-foreground">Lot Size</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>About This Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{property.description}</p>
                </CardContent>
              </Card>

              {/* Property Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Property Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Year Built:</span>
                        <span className="font-medium">{property.yearBuilt}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Days on Market:</span>
                        <span className="font-medium">{property.daysOnMarket} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price per Sq Ft:</span>
                        <span className="font-medium">{property.pricePerSqft}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">HOA Fees:</span>
                        <span className="font-medium">{property.hoaFees}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lot Size:</span>
                        <span className="font-medium">{property.lotSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Property Type:</span>
                        <span className="font-medium">{property.propertyType}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Features & Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Agent Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Agent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{property.agent.name}</h3>
                      <p className="text-sm text-muted-foreground">{property.agent.title}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-accent" />
                      <span className="text-sm">{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      <span className="text-sm">{property.agent.email}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Schedule Tour */}
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Tour</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleTourSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={tourForm.name}
                          onChange={(e) => setTourForm({...tourForm, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={tourForm.phone}
                          onChange={(e) => setTourForm({...tourForm, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={tourForm.email}
                        onChange={(e) => setTourForm({...tourForm, email: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={tourForm.preferredDate}
                          onChange={(e) => setTourForm({...tourForm, preferredDate: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={tourForm.preferredTime}
                          onChange={(e) => setTourForm({...tourForm, preferredTime: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        rows={3}
                        value={tourForm.message}
                        onChange={(e) => setTourForm({...tourForm, message: e.target.value})}
                        placeholder="Any specific questions or requests?"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" variant="cta">
                      <Calendar className="w-4 h-4 mr-2" />
                      Request Tour
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Mortgage Calculator */}
              <Card>
                <CardHeader>
                  <CardTitle>Mortgage Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Home Price:</span>
                      <span className="font-medium">{property.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Down Payment (20%):</span>
                      <span className="font-medium">${property.mortgage.downPayment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan Amount:</span>
                      <span className="font-medium">${property.mortgage.loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interest Rate:</span>
                      <span className="font-medium">{property.mortgage.interestRate}%</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="font-medium">Monthly Payment:</span>
                      <span className="font-bold text-accent text-lg">${property.mortgage.monthlyPayment.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Full Calculator
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {similarProperties.map((similar) => (
              <Card key={similar.id} className="overflow-hidden hover:shadow-lg transition-smooth">
                <div className="relative">
                  <img
                    src={similar.image}
                    alt={similar.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{similar.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{similar.address}</span>
                  </div>
                  <div className="text-2xl font-bold text-accent mb-4">{similar.price}</div>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{similar.beds} beds</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{similar.baths} baths</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Square className="w-4 h-4" />
                      <span>{similar.sqft} sqft</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;