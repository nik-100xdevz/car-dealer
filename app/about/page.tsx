"use client"
import { Button } from "@/components/ui/button";
import { Award, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-secondary-foreground py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Your Trusted Commercial Vehicle Partner
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/90">
                Serving Mumbai's business community with premium trucks since 2010
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-up">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Our <span className="text-primary">Story</span>
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground mb-4">
                    Founded in 2010, Dreams Motors began with a simple vision: to provide Mumbai's business owners with reliable, high-quality commercial vehicles backed by exceptional service. As a family-owned dealership, we understand the challenges faced by businesses in need of dependable transportation solutions.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Over the years, we've grown from a small showroom to become one of Mumbai's most trusted commercial vehicle dealers, representing three of India's leading brands: Eicher, Tata, and Mahindra. Our success is built on trust, transparency, and an unwavering commitment to customer satisfaction.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we serve hundreds of satisfied customers across Maharashtra, from small business owners to large fleet operators, helping them find the perfect vehicle to power their business forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that drive everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Reliability",
                  description: "We only offer vehicles and services we trust ourselves",
                },
                {
                  icon: Target,
                  title: "Transparency",
                  description: "Honest pricing and clear communication every time",
                },
                {
                  icon: Users,
                  title: "Customer Support",
                  description: "Your success is our success, we're with you all the way",
                },
                {
                  icon: TrendingUp,
                  title: "After-Sales Care",
                  description: "Our relationship doesn't end at the sale",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-all animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Our <span className="text-primary">Journey</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {[
                { year: "2010", event: "Dreams Motors founded in Mumbai" },
                { year: "2015", event: "Became authorized Eicher dealer" },
                { year: "2020", event: "Added Tata & Mahindra to our portfolio" },
                { year: "2025", event: "Expanded service network across Maharashtra" },
              ].map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex items-center gap-6 animate-slide-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="shrink-0 w-24">
                    <span className="text-3xl font-heading font-bold text-primary">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-1 p-4 bg-card rounded-lg border">
                    <p className="font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Upgrade Your Fleet?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Visit our showroom or book a test drive today
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.location.href = "/contact"}
                className="font-semibold"
              >
                Contact Us Now
              </Button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default About;
