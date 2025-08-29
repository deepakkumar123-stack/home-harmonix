import { Phone, Mail, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your real estate journey? I'm here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <Card className="border-0 shadow-md hover:shadow-lg transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Call Me</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Available 7 days a week
                </p>
                <p className="font-semibold text-accent">(555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email Me</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Quick response guaranteed
                </p>
                <p className="font-semibold text-accent">info@realestate.com</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <MessageSquare className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Instant answers to your questions
                </p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  I'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
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
                      Phone
                    </label>
                    <Input type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    I'm interested in
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {["Buying", "Selling", "Valuation", "Consultation"].map((interest) => (
                      <Button
                        key={interest}
                        variant="outline"
                        size="sm"
                        className="justify-start"
                      >
                        {interest}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell me about your real estate needs..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="cta" size="lg" className="w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;