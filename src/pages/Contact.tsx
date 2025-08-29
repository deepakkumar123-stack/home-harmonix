
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Ready to start your real estate journey? We're here to help every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground text-sm mb-2">Available 7 days a week</p>
                      <p className="font-semibold text-accent text-lg">(555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground text-sm mb-2">Quick response guaranteed</p>
                      <p className="font-semibold text-accent">info@elitehomes.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Office</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        123 Main Street<br />
                        Charlotte, NC 28202
                      </p>
                      <Button variant="outline" size="sm">
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full flex-shrink-0">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Monday - Friday:</span>
                          <span>9:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday:</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday:</span>
                          <span>12:00 PM - 5:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
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
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["Buying", "Selling", "Valuation", "Investment", "Consultation", "Other"].map((interest) => (
                          <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-muted" />
                            <span className="text-sm">{interest}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" name="contact" value="email" className="border-muted" />
                          <span className="text-sm">Email</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" name="contact" value="phone" className="border-muted" />
                          <span className="text-sm">Phone</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input type="radio" name="contact" value="text" className="border-muted" />
                          <span className="text-sm">Text</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your real estate needs, timeline, or any specific questions you have..."
                        className="min-h-[150px]"
                      />
                    </div>

                    <Button variant="cta" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service. 
                      We respect your privacy and will never share your information.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground">Located in the heart of Charlotte</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="bg-muted/50 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Google Maps Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive map showing our office location at<br />
                    123 Main Street, Charlotte, NC 28202
                  </p>
                  <Button variant="cta">
                    View on Google Maps
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
