import { Award, Banknote, Truck, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Dealer",
      description:
        "Authorized dealer for Eicher, Tata, and Mahindra with genuine vehicles.",
    },
    {
      icon: Banknote,
      title: "Easy Finance & Support",
      description:
        "Flexible financing options and comprehensive support for your business.",
    },
    {
      icon: Truck,
      title: "Fast Delivery Network",
      description:
        "Quick delivery across Mumbai and Maharashtra with reliable logistics.",
    },
    {
      icon: Wrench,
      title: "Maintenance & After-Sales",
      description:
        "24/7 service support and genuine spare parts for peace of mind.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Why Choose <span className="text-primary">Dreams Motors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for commercial vehicles in Mumbai
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 border border-border/60 hover:border-primary/40 
              bg-card hover:bg-card/90 shadow-sm hover:shadow-md animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center flex flex-col items-center justify-center h-[260px]">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 
                  group-hover:bg-primary/15 transition-colors">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
