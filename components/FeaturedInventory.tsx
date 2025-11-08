"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Fuel, Gauge, Truck } from "lucide-react";
import eicherTruck from "@/assets/eicher-truck.jpg";
import tataTruck from "@/assets/tata-truck.jpg";
import mahindraTruck from "@/assets/mahindra-truck.jpg";
import Image from "next/image";

const FeaturedInventory = () => {
  const trucks = [
    {
      id: 1,
      brand: "Eicher",
      model: "Pro 2059xp",
      image: eicherTruck,
      payload: "2.6 Ton",
      fuel: "Diesel",
      transmission: "Manual",
      brandColor: "eicher",
    },
    {
      id: 2,
      brand: "Tata",
      model: "Intra V30",
      image: tataTruck,
      payload: "1.2 Ton",
      fuel: "Diesel",
      transmission: "Manual",
      brandColor: "tata",
    },
    {
      id: 3,
      brand: "Mahindra",
      model: "Maxx City 1.3",
      image: mahindraTruck,
      payload: "1.5 Ton",
      fuel: "Diesel",
      transmission: "Manual",
      brandColor: "mahindra",
    },
  ];

  const handleViewDetails = (model: string) => {
    window.open(
      `https://wa.me/919876543210?text=Hi, I'm interested in the ${model}`,
      "_blank"
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-primary">Inventory</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our top commercial vehicles built for reliability and
            performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trucks.map((truck, index) => (
            <Card
              key={truck.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-4/3">
                <Image
                  src={truck.image}
                  fill
                  priority
                  quality={95}
                  unoptimized
                  alt={`${truck.brand} ${truck.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  className={`absolute top-4 right-4 bg-${truck.brandColor} hover:bg-${truck.brandColor}/90 text-white font-semibold`}
                  style={{
                    backgroundColor: `hsl(var(--${truck.brandColor}))`,
                  }}
                >
                  {truck.brand}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-4">
                  {truck.brand} {truck.model}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Truck className="h-4 w-4" />
                    <span className="text-sm">Payload: {truck.payload}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Fuel className="h-4 w-4" />
                    <span className="text-sm">Fuel: {truck.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Gauge className="h-4 w-4" />
                    <span className="text-sm">
                      Transmission: {truck.transmission}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button
                  className="w-1/2 bg-primary hover:bg-primary/90"
                  onClick={() =>
                    (window.location.href = `/inventory?brand=${truck.brand.toLowerCase()}`)
                  }
                >
                  View Details
                </Button>
                <Button
                  className="w-1/2 bg-green-600 hover:bg-green-700"
                  onClick={() =>
                    handleViewDetails(`${truck.brand} ${truck.model}`)
                  }
                >
                  WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInventory;
