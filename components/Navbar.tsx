"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Logo from '@/assets/logo.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = usePathname();

  const isActive = (path: string) => location === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/inventory", label: "Inventory" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi, I'm interested in your commercial vehicles",
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm transition-all">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[74px]">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
            <Image
              src={Logo}
                  
    quality={95}
    unoptimized

              alt="Dream Drive Dynamics Logo"
              className=" w-24 relative object-contain transition-all duration-300"
              loading="lazy"
            />
            <span className="text-lg md:text-xl font-bold tracking-tight">
              Dreams  <span className="text-primary">Motors</span>
            </span>
          </Link>

          {/* Desktop Navbar Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCall}
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
            <Button
              size="sm"
              onClick={handleWhatsApp}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[400px] py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 border-t border-border pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium tracking-wide ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCall}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
              <Button
                size="sm"
                onClick={handleWhatsApp}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
