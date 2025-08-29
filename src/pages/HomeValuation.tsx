
import { useState } from "react";
import { Calculator, Home, TrendingUp, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const HomeValuation = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
              <Calculator className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Free Home Valuation</h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get an accurate, instant estimate of your home's current market value
            </p>
          </div>
        </div>
      </section>

      {/* Valuation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  Step {step} of 3: {step === 1 ? 'Property Address' : step === 2 ? 'Property Details' : 'Contact Information'}
                </CardTitle>
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i <= step ? 'bg-accent' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-8">
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Property Address *
                      </label>
                      <Input 
                        placeholder="Enter your full address" 
                        className="h-12"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          City *
                        </label>
                        <Input placeholder="Charlotte" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          State *
                        </label>
                        <Input placeholder="NC" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          ZIP Code *
                        </label>
                        <Input placeholder="28202" />
                      </div>
                    </div>
                    <Button 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      onClick={() => setStep(2)}
                    >
                      Next: Property Details
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Bedrooms
                        </label>
                        <Input type="number" placeholder="3" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Bathrooms
                        </label>
                        <Input type="number" step="0.5" placeholder="2.5" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Square Footage
                        </label>
                        <Input type="number" placeholder="2000" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Year Built
                        </label>
                        <Input type="number" placeholder="2010" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Property Condition
                      </label>
                      <select className="w-full p-3 border rounded-md">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Average</option>
                        <option>Needs Work</option>
                      </select>
                    </div>
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button 
                        variant="cta" 
                        size="lg" 
                        className="flex-1"
                        onClick={() => setStep(3)}
                      >
                        Next: Contact Info
                      </Button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email *
                        </label>
                        <Input type="email" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Phone *
                        </label>
                        <Input type="tel" placeholder="(555) 123-4567" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        When are you looking to sell? (Optional)
                      </label>
                      <select className="w-full p-3 border rounded-md">
                        <option>Within 3 months</option>
                        <option>3-6 months</option>
                        <option>6-12 months</option>
                        <option>Just curious about value</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Additional Comments
                      </label>
                      <Textarea 
                        placeholder="Tell us about any recent improvements, unique features, or questions..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="flex-1"
                        onClick={() => setStep(2)}
                      >
                        Back
                      </Button>
                      <Button variant="cta" size="lg" className="flex-1">
                        Get My Free Valuation
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">
                      Your information is secure and will only be used to provide your valuation report.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Get Your Home Valued?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Home className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Know Your Equity</h3>
                <p className="text-muted-foreground text-sm">Understand how much equity you've built in your home</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Market Insights</h3>
                <p className="text-muted-foreground text-sm">Get insights into local market trends and conditions</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Neighborhood Data</h3>
                <p className="text-muted-foreground text-sm">Compare your home to recent sales in your area</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeValuation;
