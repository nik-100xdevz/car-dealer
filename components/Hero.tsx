"use client"
import { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, TrendingUp } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const slides = [
  {
    type: "video",
    src: "https://cms.eichertrucksandbuses.com/uploads/banner/video_link/banner-video1.mp4",
    heading: "Power. Performance. Precision.",
    subheading: "Your business vehicle starts here.",
  },
  {
    type: "video",
    src: "https://www.eichertrucksandbuses.com/assets/img/legacy-video1.mp4",
    heading: "Drive the Future of Mobility",
    subheading: "Sustainable and reliable transport solutions.",
  },
  {
    type: "image",
    src: "https://www.eichertrucksandbuses.com/_next/image?url=%2Fassets%2Fimg%2Ftrucks-img.png&w=1920&q=75",
    heading: "Engineered for Indian Roads",
    subheading: "Durability and performance you can trust.",
  },
];

const Hero = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    pauseOnHover: false,
    fade: true,
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210?text=Hi, I'm interested in getting a quote for commercial vehicles",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      <Slider ref={sliderRef} {...settings} className="relative">
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full h-[600px] md:h-[700px]">
            {/* Background Video or Image */}
            {slide.type === "video" ? (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.heading}
                    fill
    priority
    quality={95}
    unoptimized

                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />

            {/* Text Content */}
            <div className="container relative z-10 h-full flex flex-col justify-center px-6 md:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center md:text-left"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  {slide.heading}
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
                  {slide.subheading}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    size="lg"
                    onClick={handleWhatsApp}
                    className="bg-primary hover:bg-primary/90 text-white font-semibold"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get a Quote on WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-white/10"
                  >
                    <TrendingUp className="mr-2 h-5 w-5" />
                    View Inventory
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
