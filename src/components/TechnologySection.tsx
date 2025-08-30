"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

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

    // Demo animation
    gsap.fromTo(demoRef.current,
      { opacity: 0, scale: 0.8, rotationY: -15 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: demoRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Tech features animation
    gsap.fromTo(techRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating animation for 3D elements
    const floatingElements = demoRef.current?.querySelectorAll('.floating-3d');
    if (floatingElements) {
      floatingElements.forEach((element, index) => {
        gsap.to(element, {
          y: -20,
          duration: 3 + index * 0.5,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const techFeatures = [
    {
      icon: "🧠",
      title: "Modern AI Technology",
      description: "Built with current AI language models for natural and helpful conversations.",
      color: "primary"
    },
    {
      icon: "🔮",
      title: "Interactive Interface",
      description: "User-friendly design with modern web technologies for smooth experience.",
      color: "secondary"
    },
    {
      icon: "⚡",
      title: "Fast Performance",
      description: "Optimized for quick responses and smooth user interactions.",
      color: "accent"
    },
    {
      icon: "🔒",
      title: "Security Focused",
      description: "Built with security best practices to protect user privacy and data.",
      color: "primary"
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Modern <span className="gradient-text-primary">Technology</span>
          </h2>
          <p className="section-subtitle">
            Built with current AI and web technologies to deliver a smooth and reliable 
            user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - 3D Demo */}
          <div ref={demoRef} className="relative">
            {/* 3D Demo Container */}
            <div className="relative h-96 bg-gradient-to-br from-muted to-muted/50 rounded-3xl border border-primary/20 overflow-hidden">
              {/* 3D Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Floating WhatsApp Icon */}
                <div className="floating-3d relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                </div>

                {/* Floating AI Brain */}
                <div className="floating-3d absolute top-20 right-20">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-2xl">🧠</span>
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="floating-3d absolute bottom-20 left-20">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-2xl">
                    <span className="text-xl">📊</span>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  <path d="M 100 200 Q 200 100 300 200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.6"/>
                  <path d="M 150 150 Q 200 200 250 150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.4"/>
                </svg>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                  <p className="text-white text-sm font-medium">Interactive 3D Demo</p>
                  <p className="text-white/70 text-xs">Hover to explore</p>
                </div>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              {['Three.js', 'WebGL', 'GSAP', 'AI/ML'].map((tech, index) => (
                <div key={index} className="px-3 py-1 bg-muted/50 border border-primary/20 rounded-full text-xs text-primary">
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Tech Features */}
          <div ref={techRef} className="space-y-6">
            {techFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:bg-muted/50">
                  <div className={`text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Performance Metrics */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Fast</div>
                  <div className="text-xs text-muted-foreground">Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">Secure</div>
                  <div className="text-xs text-muted-foreground">Privacy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">Reliable</div>
                  <div className="text-xs text-muted-foreground">Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Smart</div>
                  <div className="text-xs text-muted-foreground">AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 p-6 bg-muted/50 backdrop-blur-sm rounded-2xl border border-primary/20">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground mb-1">
                Ready to Experience the Future?
              </h4>
              <p className="text-sm text-muted-foreground">
                Try our technology demo and see the power of AI + 3D
              </p>
            </div>
            <button className="btn-primary whitespace-nowrap">
              Launch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
