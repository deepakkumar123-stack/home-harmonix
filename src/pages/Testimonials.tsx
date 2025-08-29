
import { Star, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Charlotte, NC",
      rating: 5,
      text: "Working with this team was an absolute pleasure. They made selling our home stress-free and got us above asking price! Their expertise in the Charlotte market is unmatched.",
      date: "March 2024"
    },
    {
      name: "Mike Chen",
      location: "Fort Mill, SC", 
      rating: 5,
      text: "As first-time homebuyers, we were nervous about the process. The team guided us every step of the way and found us the perfect home in our budget. Couldn't be happier!",
      date: "February 2024"
    },
    {
      name: "Jennifer Davis",
      location: "Rock Hill, SC",
      rating: 5,
      text: "Professional, knowledgeable, and always available to answer questions. They sold our house in just 12 days! I recommend them to all my friends and family.",
      date: "January 2024"
    },
    {
      name: "Robert Williams",
      location: "Marvin, NC",
      rating: 5,
      text: "Exceptional service from start to finish. They understood exactly what we were looking for in a luxury home and delivered beyond our expectations.",
      date: "December 2023"
    },
    {
      name: "Lisa Thompson",
      location: "Matthews, NC",
      rating: 5,
      text: "The marketing strategy was incredible - professional photos, virtual tour, and extensive online presence. Our home had multiple offers within the first week!",
      date: "November 2023"
    },
    {
      name: "David Rodriguez",
      location: "Waxhaw, NC",
      rating: 5,
      text: "Honest, reliable, and results-driven. They negotiated a great deal for us and handled all the paperwork seamlessly. True professionals in every sense.",
      date: "October 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              See what our satisfied clients have to say about their experience working with us
            </p>
            <div className="flex items-center justify-center gap-4 text-accent">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold">5.0</span>
              <span className="text-primary-foreground/90">Based on 150+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-accent mr-3" />
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-4 h-4 ${
                            star <= testimonial.rating 
                              ? 'text-accent fill-current' 
                              : 'text-muted'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    <div className="text-xs text-muted-foreground mt-1">{testimonial.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">Load More Reviews</Button>
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Share Your Experience</h2>
                  <p className="text-muted-foreground">
                    Had a great experience? We'd love to hear about it!
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name *
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Property Location
                    </label>
                    <Input placeholder="Charlotte, NC" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Rating *
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="text-muted hover:text-accent transition-colors"
                        >
                          <Star className="w-6 h-6" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Review *
                    </label>
                    <Textarea
                      placeholder="Tell us about your experience..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button variant="cta" size="lg" className="w-full">
                    Submit Review
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Reviews are subject to approval and may take 24-48 hours to appear on the website.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
