
import { Mail, Phone, Linkedin, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Principal Broker & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years in Charlotte real estate, Sarah has built a reputation for excellence and integrity. She's a top producer who truly cares about her clients' success.",
      specialties: ["Luxury Homes", "First-Time Buyers", "Investment Properties"],
      phone: "(555) 123-4567",
      email: "sarah@elitehomes.com",
      achievements: ["Top 1% Agent", "$500M+ in Sales", "Real Estate Excellence Award"]
    },
    {
      name: "Michael Johnson",
      role: "Senior Real Estate Agent",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Michael brings 8 years of experience and a passion for helping families find their perfect home. His attention to detail and negotiation skills are unmatched.",
      specialties: ["Family Homes", "Relocation", "New Construction"],
      phone: "(555) 123-4568",
      email: "michael@elitehomes.com",
      achievements: ["Rising Star Award", "Client Choice Award", "Million Dollar Producer"]
    },
    {
      name: "Jennifer Lee",
      role: "Marketing & Client Relations Specialist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Jennifer ensures every property gets maximum exposure through innovative marketing strategies. She's the creative force behind our stunning property presentations.",
      specialties: ["Digital Marketing", "Photography", "Social Media"],
      phone: "(555) 123-4569",
      email: "jennifer@elitehomes.com",
      achievements: ["Marketing Excellence", "Social Media Expert", "Innovation Award"]
    },
    {
      name: "David Rodriguez",
      role: "Transaction Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "David keeps every transaction running smoothly from contract to closing. His organizational skills and attention to detail ensure stress-free experiences for all clients.",
      specialties: ["Contract Management", "Closing Coordination", "Documentation"],
      phone: "(555) 123-4570",
      email: "david@elitehomes.com",
      achievements: ["Process Excellence", "Client Service Award", "Efficiency Expert"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Dedicated professionals committed to exceeding your real estate expectations
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-smooth overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                        <p className="text-accent font-medium">{member.role}</p>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                        {member.bio}
                      </p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2">Specialties:</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Achievements:
                        </h4>
                        <ul className="text-sm text-muted-foreground">
                          {member.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-center mb-1">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Phone className="w-4 h-4 mr-2" />
                          {member.phone}
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Integrity</h3>
                <p className="text-muted-foreground">
                  We believe in honest, transparent communication and always acting in our clients' best interests.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every transaction, going above and beyond to exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Partnership</h3>
                <p className="text-muted-foreground">
                  We view every client relationship as a true partnership, working together toward shared goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let our experienced team help you achieve your real estate goals
            </p>
            <Button variant="hero" size="lg">
              Contact Our Team Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
