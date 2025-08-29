
import { Users, Award, TrendingUp, Heart, Target, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "500+", label: "Homes Sold" },
    { number: "$250M+", label: "Total Sales Volume" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Client-Centered Approach",
      description: "Every decision we make is focused on what's best for our clients and their unique needs."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Integrity & Trust",
      description: "We build lasting relationships through honest communication and transparent business practices."
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Results-Driven",
      description: "We're committed to delivering exceptional results that exceed expectations every time."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About EliteHomes</h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Your trusted partner in Charlotte real estate for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2009, EliteHomes was born from a simple belief: every client deserves 
                    exceptional service, expert guidance, and results that exceed expectations. What started 
                    as a small team with big dreams has grown into Charlotte's most trusted real estate firm.
                  </p>
                  <p>
                    Over the years, we've helped thousands of families find their dream homes, assisted 
                    investors build their portfolios, and guided sellers through successful transactions. 
                    Our deep roots in the Charlotte community and commitment to excellence have made us 
                    the go-to choice for discerning clients.
                  </p>
                  <p>
                    Today, we continue to innovate and evolve, leveraging the latest technology and 
                    marketing strategies while never losing sight of what matters most: our clients' 
                    success and satisfaction.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Real estate team"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    To provide exceptional real estate services that empower our clients to make 
                    informed decisions, achieve their goals, and build lasting wealth through 
                    strategic property investments.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    To be Charlotte's most trusted and respected real estate firm, known for our 
                    integrity, innovation, and unwavering commitment to client success in every 
                    transaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Track Record</h2>
            <p className="text-xl text-muted-foreground">Numbers that speak to our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every interaction and decision we make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Share Your Feedback</CardTitle>
                <p className="text-muted-foreground">
                  We value your opinion and are always looking to improve our services
                </p>
              </CardHeader>
              <CardContent className="p-8">
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
                      Subject
                    </label>
                    <Input placeholder="General Feedback" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Message *
                    </label>
                    <Textarea
                      placeholder="Tell us about your experience or suggestions for improvement..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button variant="cta" size="lg" className="w-full">
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let us show you why so many clients trust us with their real estate needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/testimonials">Read Client Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
