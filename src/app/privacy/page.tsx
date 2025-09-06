"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function PrivacyPolicyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [privacyContent, setPrivacyContent] = useState<string>('');

  useEffect(() => {
    // Load privacy policy content
    fetch('/privacy-policy.md')
      .then(response => response.text())
      .then(text => setPrivacyContent(text))
      .catch(error => console.error('Failed to load privacy policy:', error));

    if (!containerRef.current) return;

    // Page entrance animation
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* Header */}

      {/* Content */}
      <main ref={containerRef} className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="gradient-text-primary">Privacy Policy</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            WhatsAI Limited Privacy Statement
          </p>
          <div className="text-sm text-muted-foreground mt-2">
            Last Updated: {new Date().toLocaleDateString('en-US')}
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <div className="bg-muted/20 rounded-2xl p-8 border border-primary/20">
            {privacyContent ? (
              <div className="markdown-content">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({children}) => <h1 className="text-3xl font-bold mb-6 gradient-text-primary">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-semibold mb-4 mt-8 text-primary">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-semibold mb-3 mt-6 text-foreground">{children}</h3>,
                    p: ({children}) => <p className="mb-4 text-muted-foreground leading-relaxed">{children}</p>,
                    ul: ({children}) => <ul className="mb-4 space-y-2 text-muted-foreground">{children}</ul>,
                    li: ({children}) => <li className="flex items-start gap-2"><span className="text-primary mt-2">•</span><span>{children}</span></li>,
                    strong: ({children}) => <strong className="text-foreground font-semibold">{children}</strong>,
                    a: ({href, children}) => <a href={href} className="text-primary hover:text-primary/80 underline">{children}</a>,
                    hr: () => <hr className="my-8 border-primary/20" />
                  }}
                >
                  {privacyContent}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-muted-foreground">加载隐私政策中...</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-primary/20 text-center">
          <div className="text-sm text-muted-foreground">
            如有任何疑问，请联系我们：
            <a href="mailto:hello@whatsai.me" className="text-primary hover:text-primary/80 ml-1">
              hello@whatsai.me
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
