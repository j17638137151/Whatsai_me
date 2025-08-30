"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CompanySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    // Section entrance animation
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Stats animation
    gsap.fromTo(statsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const products = [
    {
      name: "AI Astrology",
      description: "Personalized cosmic insights, reimagined with smart algorithms.",
      icon: "⭐"
    },
    {
      name: "AI Character Chat",
      description: "Talk with historical figures, fictional heroes, or entirely new personalities.",
      icon: "🎭"
    },
    {
      name: "AI Image Generation",
      description: "Transform ideas into stunning visuals with just a few words.",
      icon: "🎨"
    },
    {
      name: "WhatsaiMe",
      description: "AI-powered assistant that enhances your messaging experience.",
      icon: "💬"
    }
  ];

  const stats = [
    { number: "AI-Powered", label: "Technology" },
    { number: "Global", label: "Reach" },
    { number: "Reliable", label: "Service" },
    { number: "24/7", label: "Availability" }
  ];

  return (
    <section ref={sectionRef} className="section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef}>
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">About WhatsAI Limited</span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Building <span className="gradient-text-primary">Smart</span> Solutions for{" "}
              <span className="gradient-text-secondary">Better Communication</span>
            </h2>

            {/* Company Description */}
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At WhatsAI Limited, we turn imagination into intelligent experiences. Our mission is simple: 
                build delightful, useful, and boundary-pushing AI applications that empower people to explore, 
                create, and connect in entirely new ways.
              </p>
              
              <p>
                From the stars above to the stories within, our suite of products brings AI into everyday life, 
                making advanced technology accessible and useful for everyone.
              </p>
            </div>

            {/* Products List */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Product Suite:</h3>
              {products.map((product, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Background */}
            <div className="mt-8 p-6 bg-muted/50 rounded-2xl border border-primary/20">
              <h4 className="text-sm font-medium text-primary mb-2">Registered Office</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Room 1508, 15th Floor, Argyle Centre Tower 2,<br/>
                625 Nathan Road, Mong Kok, Hong Kong
              </p>
              <h4 className="font-semibold text-foreground mb-3">Leadership Excellence</h4>
              <p className="text-sm text-muted-foreground">
                Our founders come from backgrounds such as Goldman Sachs, Morgan Stanley, Columbia University 
                and more who hold the highest standard and are deeply mission driven in their work.
              </p>
            </div>
          </div>

          {/* Right Content - Stats & Visual */}
          <div ref={statsRef} className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-muted/50 rounded-2xl border border-primary/20 hover:border-primary/40 transition-colors duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mission Statement Card */}
            <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Welcome to the Factory Where Ideas Come Alive 🚀
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We&apos;re a team of builders, dreamers, and technologists who believe that AI should feel 
                  less like a tool—and more like magic. Founders come from backgrounds such as Goldman Sachs, 
                  Morgan Stanley, Columbia University and more who hold the highest standard and are deeply 
                  mission driven in their work.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="btn-primary text-lg px-8 py-4">
                Join Our Mission
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
