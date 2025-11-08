"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    model: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New Inquiry from Website:\n\nName: ${formData.name}\nBusiness: ${formData.businessName}\nPhone: ${formData.phone}\nInterested Model: ${formData.model}\nMessage: ${formData.message}`;
    
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
    
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you shortly via WhatsApp.",
    });

    // Reset form
    setFormData({
      name: "",
      businessName: "",
      phone: "",
      model: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-secondary-foreground py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Get in Touch with Us
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/90">
                We're here to help you find the perfect commercial vehicle
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8 animate-fade-up">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">
                    Contact <span className="text-primary">Information</span>
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Reach out to us through any of these channels. We're available to assist you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-sm text-muted-foreground">
                        Dreams Motors Showroom<br />
                        Mumbai, Maharashtra 400001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <button
                        onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        Chat with us on WhatsApp
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@dreamsmotors.com" className="text-sm text-muted-foreground hover:text-primary">
                        info@dreamsmotors.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
                <div className="bg-card p-8 rounded-lg border shadow-lg">
                  <h2 className="text-2xl font-heading font-bold mb-6">
                    Send us an <span className="text-primary">Inquiry</span>
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="businessName">Business Name</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="Your business name (optional)"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <Label htmlFor="model">Model of Interest</Label>
                      <Input
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        placeholder="e.g., Eicher Pro 2059xp"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your requirements..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Send Inquiry via WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995307604!3d19.082177481920166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dreams Motors Location"
          />
        </section>

        {/* CTA Banner */}
        <section className="py-16 lg:py-20 bg-gradient-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Visit Our Showroom or Book a Test Drive
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Experience our vehicles firsthand and let our experts help you make the right choice
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open("https://wa.me/919876543210?text=I'd like to book a test drive", "_blank")}
                className="font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book Test Drive on WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Contact;
