import { Card } from "@/components/ui/card";
import EicherFeatured from "../assets/eicher-featured-removebg-preview.png";
import MahindraFeatured from "../assets/mahindra-truck-removebg-preview.png";
import TataFeatured from "../assets/tata-featured-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const BrandShowcase = () => {
  const brands = [
    {
      name: "Eicher",
      tagline: "Power That Moves You Forward",
      color: "eicher",
      image: EicherFeatured,
      href: "/inventory#eicher",
    },
    {
      name: "Tata",
      tagline: "Trusted by Millions",
      color: "tata",
      image: TataFeatured,
      href: "/inventory#tata",
    },
    {
      name: "Mahindra",
      tagline: "Rise with Innovation",
      color: "mahindra",
      image: MahindraFeatured,
      href: "/inventory#mahindra",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Premium <span className="text-primary">Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with India's leading commercial vehicle manufacturers
          </p>
        </div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <Link href={brand.href} key={brand.name}>
              <Card
                className="group relative flex flex-col items-center justify-between overflow-hidden 
                transition-all duration-500 hover:shadow-xl hover:-translate-y-1 h-[320px] md:h-[340px]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center justify-center h-full text-center p-6">
                  <div
                    className="flex items-center justify-center w-40 h-40 mb-4 rounded-xl bg-muted"
                    style={{
                      backgroundColor: `hsl(var(--${brand.color}) / 0.08)`,
                    }}
                  >
                    <Image
                      src={brand.image}
                      alt={`${brand.name} truck`}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <h3
                    className="text-3xl font-bold font-heading mb-2"
                    style={{ color: `hsl(var(--${brand.color}))` }}
                  >
                    {brand.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {brand.tagline}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;
