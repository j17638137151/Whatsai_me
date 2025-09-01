"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

    // Form animation
    gsap.fromTo(formRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Contact animation
    gsap.fromTo(contactRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
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

  return (
    <section ref={sectionRef} className="section bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Visit <span className="gradient-text-primary">Our Office</span> in{" "}
            <span className="gradient-text-secondary">Hong Kong</span>
          </h2>
          <p className="section-subtitle">
            Come experience our AI innovation firsthand at our Hong Kong headquarters
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Google Maps */}
          <div ref={formRef} className="relative">
            <div className="relative h-96 bg-gradient-to-br from-muted to-muted/50 rounded-3xl border border-primary/20 overflow-hidden">
              {/* Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.1234567890123!2d114.1694!3d22.3193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400c7c4b4b4b4%3A0x1234567890123456!2sArgyle%20Centre%20Office%20Tower%202!5e0!3m2!1sen!2shk!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl"
              ></iframe>
              
              {/* Map Overlay */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 border border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium text-foreground">WhatsAI Limited</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Address Information */}
          <div ref={contactRef} className="space-y-8">
            {/* Company Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-medium text-primary">Visit Us</span>
            </div>

            {/* Address Details */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground leading-tight">
                Our <span className="gradient-text-primary">Hong Kong</span> Office
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-2xl border border-primary/20">
                  <div className="text-2xl">🏢</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Argyle Centre Office Tower 2</h4>
                    <p className="text-muted-foreground">15th Floor, Room 1508</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-2xl border border-primary/20">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">625 Nathan Road</h4>
                    <p className="text-muted-foreground">Mong Kok, Hong Kong</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-2xl border border-primary/20">
                  <div className="text-2xl">🚇</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Mong Kok MTR Station</h4>
                    <p className="text-muted-foreground">Exit A1, 2 minutes walk</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
                <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-foreground">hello@whatsai.me</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-foreground">+852 0000 0000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <p className="text-lg text-foreground font-medium">
              🏢 Visit our Hong Kong office to experience AI innovation firsthand!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
