"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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

    // Features stagger animation
    const features = featuresRef.current?.querySelectorAll('.feature-card');
    if (features) {
      gsap.fromTo(features,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: "⭐",
      title: "AI Astrology",
      description: "Personalized cosmic insights, reimagined with smart algorithms.",
      gradient: "from-primary to-secondary"
    },
    {
      icon: "🎭",
      title: "AI Character Chat",
      description: "Talk with historical figures, fictional heroes, or entirely new personalities.",
      gradient: "from-secondary to-accent"
    },
    {
      icon: "🎨",
      title: "AI Image Generation",
      description: "Transform ideas into stunning visuals with just a few words.",
      gradient: "from-accent to-primary"
    },
    {
      icon: "📚",
      title: "AI Storytelling",
      description: "Create compelling narratives and stories with AI assistance.",
      gradient: "from-primary to-accent"
    },
    {
      icon: "🎓",
      title: "AI Learning",
      description: "Personalized educational experiences powered by intelligent algorithms.",
      gradient: "from-secondary to-primary"
    },
    {
      icon: "✨",
      title: "AI Creativity",
      description: "Unlock your creative potential with AI-powered tools and inspiration.",
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Our <span className="gradient-text-primary">AI Products</span> That{" "}
            <span className="gradient-text-secondary">Transform</span> Everyday Life
          </h2>
          <p className="section-subtitle">
            From the stars above to the stories within, our suite of products brings AI into everyday life.
          </p>
        </div>

        {/* Features Grid */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group relative"
            >
              <div className="card h-full p-8 relative overflow-hidden">
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-16`}></div>
                
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 bg-muted/50 backdrop-blur-sm rounded-2xl border border-primary/20">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground mb-1">
                Ready to Transform Your WhatsApp?
              </h4>
              <p className="text-sm text-muted-foreground">
                Join thousands of users already experiencing the future of messaging
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
