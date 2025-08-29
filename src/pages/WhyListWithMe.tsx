
import { CheckCircle, Camera, Globe, Users, TrendingUp, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WhyListWithMe = () => {
  const marketingStrategies = [
    {
      icon: <Camera className="w-8 h-8 text-accent" />,
      title: "Professional Photography",
      description: "High-quality photos and virtual tours that showcase your home's best features"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Digital Marketing",
      description: "Extensive online presence across all major real estate platforms and social media"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Network of Buyers",
      description: "Access to a vast network of qualified buyers and real estate professionals"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We'll discuss your goals, timeline, and create a customized selling strategy"
    },
    {
      step: "02", 
      title: "Home Preparation",
      description: "Professional staging advice and recommendations to maximize your home's appeal"
    },
    {
      step: "03",
      title: "Market Analysis",
      description: "Comprehensive market analysis to price your home competitively for quick sale"
    },
    {
      step: "04",
      title: "Marketing Launch",
      description: "Professional photography, listing creation, and multi-channel marketing campaign"
    },
    {
      step: "05",
      title: "Manage Showings",
      description: "Coordinate all showings and open houses to maximize exposure to qualified buyers"
    },
    {
      step: "06",
      title: "Negotiate & Close",
      description: "Expert negotiation and transaction management through closing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Why List Your Home with Me?</h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Experience the difference that expertise, dedication, and proven results make in selling your home
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Your Selling Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Unmatched Expertise & Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's what sets me apart in the Charlotte real estate market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">15+ Years Experience</h3>
                    <p className="text-muted-foreground text-sm">Deep market knowledge and proven track record in Charlotte area</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">98% of List Price</h3>
                    <p className="text-muted-foreground text-sm">Consistently achieve top dollar for my clients' properties</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">21 Days Average</h3>
                    <p className="text-muted-foreground text-sm">Faster sales through strategic pricing and marketing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Award-Winning Service</h3>
                    <p className="text-muted-foreground text-sm">Multiple industry awards for excellence and client satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Full-Service Support</h3>
                    <p className="text-muted-foreground text-sm">From preparation to closing, I handle every detail</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Local Market Expert</h3>
                    <p className="text-muted-foreground text-sm">Intimate knowledge of Charlotte neighborhoods and trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketing Strategies */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Comprehensive Marketing Strategy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your home deserves maximum exposure to attract the right buyers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketingStrategies.map((strategy, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
                    {strategy.icon}
                  </div>
                  <CardTitle className="text-xl">{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              My Proven Selling Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach that ensures success at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's discuss your selling goals and create a winning strategy for your home
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/valuation">Get Free Home Valuation</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyListWithMe;
