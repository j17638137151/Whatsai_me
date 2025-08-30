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
            Ready to <span className="gradient-text-primary">Experience</span> Our{" "}
            <span className="gradient-text-secondary">AI Magic</span>?
          </h2>
          <p className="section-subtitle">
            Experience how our AI applications can transform your daily life. 
            Start your free trial today and discover the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Contact Form */}
          <div ref={formRef}>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get Started Today
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Start Free Trial
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">Terms of Service</a> and{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>
          </div>

          {/* Right - Contact Info & Benefits */}
          <div ref={contactRef} className="space-y-8">
            {/* Benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                What You&apos;ll Get
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">14-Day Free Trial</h4>
                    <p className="text-sm text-muted-foreground">Full access to all features, no credit card required</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Priority Support</h4>
                    <p className="text-sm text-muted-foreground">Dedicated support team to help you get started</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Custom Setup</h4>
                    <p className="text-sm text-muted-foreground">Personalized onboarding and configuration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:hello@whatsai.me" className="text-foreground hover:text-primary transition-colors duration-300">
                      hello@whatsai.me
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">
                      Room 1508, 15/F, Argyle Centre Office Tower 2<br />
                      625 Nathan Road, Mong Kok, Hong Kong
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+852-0000-0000" className="text-foreground hover:text-primary transition-colors duration-300">
                      +852 0000 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Follow us for updates</p>
              <div className="flex justify-center gap-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 bg-muted/50 border border-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                  >
                    <span className="text-primary text-sm font-medium">{platform[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
            <p className="text-lg text-foreground font-medium">
              🚀 Experience the future of AI-powered messaging with WhatsaiMe!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
