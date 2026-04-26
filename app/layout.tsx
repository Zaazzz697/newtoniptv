import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Newton IPTV – Best IPTV Subscription UK | 20,000+ Channels",
    template: "%s | Newton IPTV",
  },
  description:
    "Newton IPTV offers the best IPTV subscription in the UK. Stream 20,000+ live channels, 80,000+ VOD in 4K. Try free for 24 hours – no credit card required.",
  keywords: [
    "iptv subscription uk",
    "best iptv uk",
    "iptv services",
    "iptv providers uk",
    "united kingdom iptv",
    "iptv free trial",
    "iptv subscription",
  ],
  authors: [{ name: "Newton IPTV" }],
  creator: "Newton IPTV",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://newtoniptv.co.uk",
    siteName: "Newton IPTV",
    title: "Newton IPTV – Best IPTV Subscription UK",
    description:
      "Stream 20,000+ live channels in 4K. Best IPTV subscription service in the UK. Try free for 24 hours.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Newton IPTV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newton IPTV – Best IPTV Subscription UK",
    description: "Stream 20,000+ live channels in 4K. Try free 24 hours.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://newtoniptv.co.uk"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-brand-dark antialiased">
        <ScrollReveal />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
