"use client"
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi, I have a question", "_blank");
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-primary">
              DREAMS MOTORS
            </h3>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Mumbai's trusted commercial vehicle dealer. Authorized dealer for Eicher, Tata, and Mahindra trucks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Our Brands</h4>
               <ul className="space-y-2 flex flex-col">
              <Link href="/inventory#eicher" className="text-sm hover:text-primary transition-colors">
                  Eicher Commercial Vehicles
                </Link>
                <Link href="/inventory#tata" className="text-sm hover:text-primary transition-colors">
                  Tata Commercial Vehicles
                </Link>
              <Link href="/inventory#mahindra" className="text-sm hover:text-primary transition-colors">
                  Mahindra Commercial Vehicles
                </Link>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Dreams Motors Showroom, Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@dreamsmotors.com" className="hover:text-primary transition-colors">
                  info@dreamsmotors.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MessageCircle className="h-4 w-4 shrink-0" />
                <button onClick={handleWhatsApp} className="hover:text-primary transition-colors">
                  WhatsApp Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Dreams Motors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
