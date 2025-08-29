import { Search, Calculator, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HowToFindHomes = () => {
  const steps = [
    {
      icon: Search,
      title: "Search Home Now",
      description: "Browse our extensive database of properties with advanced search filters to find your perfect match.",
      cta: "Search Properties",
      variant: "hero" as const
    },
    {
      icon: Calculator,
      title: "Find Out Home Value",
      description: "Get an instant, accurate valuation of your current home or any property you're considering.",
      cta: "Get Valuation",
      variant: "cta" as const
    },
    {
      icon: BookOpen,
      title: "Read More About Me",
      description: "Learn why I'm the right choice for your real estate journey with proven expertise and local knowledge.",
      cta: "Learn More",
      variant: "outline" as const
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How to Find Your Perfect Home
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're buying, selling, or just exploring, we make the process simple and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-smooth border-0 shadow-md group"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-smooth">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <Button 
                    variant={step.variant} 
                    className="w-full"
                  >
                    {step.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowToFindHomes;