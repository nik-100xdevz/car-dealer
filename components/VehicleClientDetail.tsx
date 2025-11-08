"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  Fuel,
  Gauge,
  Truck,
  Settings,
} from "lucide-react";
import Image from "next/image";

export default function VehicleDetailClient({ vehicle, relatedVehicles }) {
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919876543210?text=Hi, I'm interested in the ${vehicle.name}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="py-6 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/inventory"
                className="hover:text-foreground transition-colors"
              >
                Inventory
              </Link>
              <span>/</span>
              <span className="text-foreground">{vehicle.name}</span>
            </div>
          </div>
        </section>

        {/* Vehicle Details */}
        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Image */}
              <div className="animate-fade-up">
                <div className="relative overflow-hidden rounded-lg aspect-4/3 bg-muted">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    priority
                    quality={95}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                  <Badge
                    className="absolute top-4 right-4 text-base py-2 px-4"
                    style={{
                      backgroundColor: `hsl(var(--${vehicle.brandColor}))`,
                    }}
                  >
                    {vehicle.brand}
                  </Badge>
                </div>
              </div>

              {/* Info */}
              <div
                className="animate-fade-up"
                style={{ animationDelay: "100ms" }}
              >
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  {vehicle.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {vehicle.description}
                </p>

                {/* Quick Specs */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {vehicle.payload && (
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Truck className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Payload</p>
                        <p className="font-semibold">{vehicle.payload}</p>
                      </div>
                    </div>
                  )}
                  {vehicle.fuelType && (
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Fuel className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Fuel Type
                        </p>
                        <p className="font-semibold">{vehicle.fuelType}</p>
                      </div>
                    </div>
                  )}
                  {vehicle.transmission && (
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Gauge className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Transmission
                        </p>
                        <p className="font-semibold">{vehicle.transmission}</p>
                      </div>
                    </div>
                  )}
                  {vehicle.engine && (
                    <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                      <Settings className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Engine</p>
                        <p className="font-semibold">{vehicle.engine}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1" onClick={handleWhatsApp}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Inquiry
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    onClick={handleCall}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Specifications Table */}
            <Card
              className="mb-12 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardContent className="p-6">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Specifications
                </h2>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">Brand</TableCell>
                      <TableCell>{vehicle.brand}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">Model</TableCell>
                      <TableCell>{vehicle.name}</TableCell>
                    </TableRow>
                    {vehicle.payload && (
                      <TableRow>
                        <TableCell className="font-semibold">
                          Payload Capacity
                        </TableCell>
                        <TableCell>{vehicle.payload}</TableCell>
                      </TableRow>
                    )}
                    {vehicle.fuelType && (
                      <TableRow>
                        <TableCell className="font-semibold">
                          Fuel Type
                        </TableCell>
                        <TableCell>{vehicle.fuelType}</TableCell>
                      </TableRow>
                    )}
                    {vehicle.transmission && (
                      <TableRow>
                        <TableCell className="font-semibold">
                          Transmission
                        </TableCell>
                        <TableCell>{vehicle.transmission}</TableCell>
                      </TableRow>
                    )}
                    {vehicle.engine && (
                      <TableRow>
                        <TableCell className="font-semibold">Engine</TableCell>
                        <TableCell>{vehicle.engine}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Related Vehicles */}
            {relatedVehicles.length > 0 && (
              <div
                className="animate-fade-up"
                style={{ animationDelay: "300ms" }}
              >
                <h2 className="text-3xl font-heading font-bold mb-8">
                  More from{" "}
                  <span className="text-primary">{vehicle.brand}</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedVehicles.map((relatedVehicle) => (
                    <Link
                      key={relatedVehicle.id}
                      href={`/vehicle/${relatedVehicle.id}`}
                    >
                      <Card className="group hover:shadow-xl transition-all duration-300 h-full">
                        <div className="relative overflow-hidden aspect-4/3">
                          <Image
                            src={relatedVehicle.image}
                            alt={relatedVehicle.name}
                            fill
                            priority
                            quality={95}
                            unoptimized
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-heading font-semibold text-lg mb-2">
                            {relatedVehicle.name}
                          </h3>
                          {relatedVehicle.payload && (
                            <p className="text-sm text-muted-foreground">
                              Payload: {relatedVehicle.payload}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
