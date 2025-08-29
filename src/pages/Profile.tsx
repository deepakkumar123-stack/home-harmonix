import { useState } from "react";
import { User, Search, Heart, Calendar, Settings, LogOut } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Profile = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "",
    joinDate: "January 2024"
  });

  const savedSearches = [
    {
      id: 1,
      name: "Charlotte 3BR Homes",
      criteria: "3+ bedrooms, Charlotte, $300K-$500K",
      alerts: true,
      created: "2024-01-15"
    },
    {
      id: 2,
      name: "Fort Mill Condos",
      criteria: "Condos, Fort Mill, $200K-$350K",
      alerts: false,
      created: "2024-01-20"
    }
  ];

  const wishlistProperties = [
    {
      id: 1,
      title: "Modern Home in Charlotte",
      price: "$450,000",
      address: "123 Oak Street, Charlotte, NC",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      saved: "2024-01-25"
    },
    {
      id: 2,
      title: "Family Home in Fort Mill",
      price: "$385,000",
      address: "456 Pine Avenue, Fort Mill, SC",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      saved: "2024-01-28"
    }
  ];

  const scheduledTours = [
    {
      id: 1,
      property: "Luxury Estate in Marvin",
      address: "789 Elm Drive, Marvin, NC",
      date: "2024-02-15",
      time: "2:00 PM",
      agent: "Sarah Johnson"
    },
    {
      id: 2,
      property: "Downtown Condo",
      address: "321 Main Street, Charlotte, NC",
      date: "2024-02-18",
      time: "10:30 AM",
      agent: "Mike Smith"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Profile Header */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="text-2xl">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-foreground mb-2">{user.name}</h1>
                    <p className="text-muted-foreground mb-1">{user.email}</p>
                    <p className="text-muted-foreground mb-4">{user.phone}</p>
                    <p className="text-sm text-muted-foreground">Member since {user.joinDate}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                    <Button variant="outline">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Tabs */}
            <Tabs defaultValue="searches" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="searches" className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Saved Searches
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Wishlist
                </TabsTrigger>
                <TabsTrigger value="tours" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Scheduled Tours
                </TabsTrigger>
              </TabsList>

              {/* Saved Searches */}
              <TabsContent value="searches">
                <Card>
                  <CardHeader>
                    <CardTitle>Saved Searches</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {savedSearches.map((search) => (
                        <div key={search.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-foreground">{search.name}</h3>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Edit</Button>
                              <Button size="sm" variant="outline">Delete</Button>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{search.criteria}</p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Created: {search.created}</span>
                            <span className={`px-2 py-1 rounded-full ${search.alerts ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                              {search.alerts ? 'Alerts On' : 'Alerts Off'}
                            </span>
                          </div>
                        </div>
                      ))}
                      
                      {savedSearches.length === 0 && (
                        <div className="text-center py-8">
                          <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-foreground mb-2">No Saved Searches</h3>
                          <p className="text-muted-foreground mb-4">Save your property searches to get notified of new listings</p>
                          <Button variant="cta">Start Searching</Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Wishlist */}
              <TabsContent value="wishlist">
                <Card>
                  <CardHeader>
                    <CardTitle>Wishlist Properties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {wishlistProperties.map((property) => (
                        <div key={property.id} className="border rounded-lg overflow-hidden">
                          <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-semibold text-foreground mb-1">{property.title}</h3>
                            <p className="text-sm text-muted-foreground mb-2">{property.address}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-accent">{property.price}</span>
                              <Button size="sm" variant="outline">Remove</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {wishlistProperties.length === 0 && (
                        <div className="col-span-2 text-center py-8">
                          <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-foreground mb-2">No Saved Properties</h3>
                          <p className="text-muted-foreground mb-4">Save properties you're interested in to your wishlist</p>
                          <Button variant="cta">Browse Properties</Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Scheduled Tours */}
              <TabsContent value="tours">
                <Card>
                  <CardHeader>
                    <CardTitle>Scheduled Tours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {scheduledTours.map((tour) => (
                        <div key={tour.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-foreground">{tour.property}</h3>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline">Reschedule</Button>
                              <Button size="sm" variant="outline">Cancel</Button>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{tour.address}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>📅 {tour.date}</span>
                            <span>🕒 {tour.time}</span>
                            <span>👤 {tour.agent}</span>
                          </div>
                        </div>
                      ))}
                      
                      {scheduledTours.length === 0 && (
                        <div className="text-center py-8">
                          <Calendar className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-foreground mb-2">No Scheduled Tours</h3>
                          <p className="text-muted-foreground mb-4">Schedule property tours to view homes in person</p>
                          <Button variant="cta">Browse Properties</Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Profile;