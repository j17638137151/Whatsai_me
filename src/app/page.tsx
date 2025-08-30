"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CompanySection from "@/components/CompanySection";
import TechnologySection from "@/components/TechnologySection";
import CTASection from "@/components/CTASection";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Page load animations
    const tl = gsap.timeline();
    
    tl.fromTo(pageRef.current, 
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Initialize scroll animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element: unknown) => {
      if (element instanceof Element) {
      gsap.fromTo(element,
        { 
          opacity: 0, 
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
      }
    });

    return () => {
      // Cleanup scroll triggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Company Showcase Section */}
      <CompanySection />
      
      {/* Technology Demo Section */}
      <TechnologySection />
      
      {/* Call-to-Action Section */}
      <CTASection />
    </div>
  );
}
