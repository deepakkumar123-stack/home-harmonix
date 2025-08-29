
import { Calculator, TrendingUp, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Sell = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      title: "Market Expertise",
      description: "Deep knowledge of Charlotte area markets to price your home competitively"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Proven Marketing",
      description: "Comprehensive marketing strategies that get results and attract buyers"
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Award-Winning Service",
      description: "Recognized excellence in real estate with numerous industry awards"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Sell Your Home with Confidence</h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Get top dollar for your property with expert guidance and proven results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/valuation">
                  <Calculator className="w-5 h-5 mr-2" />
                  Get Free Home Valuation
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Home Valuation CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Calculator className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  What's Your Home Worth?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get an instant, accurate estimate of your home's current market value with our advanced valuation tool.
                </p>
                <Button variant="cta" size="lg" asChild>
                  <Link to="/valuation">Get Your Free Valuation Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Sell with Me?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the difference that expertise, dedication, and results-driven service makes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/why-list">Learn More About My Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-primary-foreground/90">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/90">Homes Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-primary-foreground/90">Of List Price</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">21</div>
              <div className="text-primary-foreground/90">Days Average</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <div className="text-primary-foreground/90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sell;
