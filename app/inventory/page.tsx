"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import Image from "next/image";

const Inventory = () => {
  const eicherModels = vehicles.filter((v) => v.brand === "Eicher");
  const tataModels = vehicles.filter((v) => v.brand === "Tata");
  const mahindraModels = vehicles.filter((v) => v.brand === "Mahindra");

  const BrandSection = ({
    id,
    brand,
    models,
    brandColor,
  }: {
    id: string;
    brand: string;
    models: typeof vehicles;
    brandColor: string;
  }) => (
    <section id={id} className="mb-16 animate-fade-up">
      <div className="text-center mb-8">
        <Badge
          className="mb-4 text-lg py-2 px-6"
          style={{ backgroundColor: `hsl(var(--${brandColor}))` }}
        >
          {brand}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          {brand} <span className="text-primary">Collection</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {models.map((vehicle, index) => (
          <Link key={vehicle.id} href={`/vehicle/${vehicle.id}`}>
            <Card
              className="group hover:shadow-xl transition-all duration-300 animate-fade-up h-full"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden aspect-4/3">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  priority
                  quality={95}
                  unoptimized
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  className="absolute top-4 right-4"
                  style={{
                    backgroundColor: `hsl(var(--${vehicle.brandColor}))`,
                  }}
                >
                  {vehicle.brand}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  {vehicle.name}
                </h3>
                <div className="space-y-1 mb-4">
                  {vehicle.payload && (
                    <p className="text-sm text-muted-foreground">
                      Payload:{" "}
                      <span className="font-medium text-foreground">
                        {vehicle.payload}
                      </span>
                    </p>
                  )}
                  {vehicle.fuelType && (
                    <p className="text-sm text-muted-foreground">
                      Fuel:{" "}
                      <span className="font-medium text-foreground">
                        {vehicle.fuelType}
                      </span>
                    </p>
                  )}
                </div>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-linear-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Complete <span className="text-primary">Inventory</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Browse our extensive collection of commercial vehicles from
                India's leading manufacturers
              </p>
            </div>
          </div>
        </section>

        {/* Inventory Sections */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <BrandSection
              id="eicher"
              brand="Eicher"
              models={eicherModels}
              brandColor="eicher"
            />
            <BrandSection
              id="tata"
              brand="Tata"
              models={tataModels}
              brandColor="tata"
            />
            <BrandSection
              id="mahindra"
              brand="Mahindra"
              models={mahindraModels}
              brandColor="mahindra"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Inventory;
