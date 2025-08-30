import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WhatsaiMe - AI-Powered WhatsApp Assistant | WhatsAI Limited",
  description: "Transform your WhatsApp conversations with intelligent AI. Experience the future of messaging with WhatsaiMe, powered by WhatsAI Limited's cutting-edge technology.",
  keywords: ["AI", "WhatsApp", "Chatbot", "Artificial Intelligence", "WhatsAI Limited", "WhatsaiMe", "Hong Kong"],
  authors: [{ name: "WhatsAI Limited" }],
  creator: "WhatsAI Limited",
  publisher: "WhatsAI Limited",
  robots: "index, follow",
  openGraph: {
    title: "WhatsaiMe - AI-Powered WhatsApp Assistant",
    description: "Transform your WhatsApp conversations with intelligent AI",
    type: "website",
    locale: "en_US",
    siteName: "WhatsaiMe",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsaiMe - AI-Powered WhatsApp Assistant",
    description: "Transform your WhatsApp conversations with intelligent AI",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00d4ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
