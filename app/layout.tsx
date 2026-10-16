import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { RESTAURANT_CONFIG } from "@/restaurant.config";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${RESTAURANT_CONFIG.brandName} — ${RESTAURANT_CONFIG.subBrand} | ${RESTAURANT_CONFIG.tagline}`,
  description:
    `${RESTAURANT_CONFIG.positioning} Explore our open-hearth menu, seasonal botanical cocktails, and private social dining experiences.`,
  keywords: [
    "VELORA Kitchen and Social",
    "Modern Restaurant Demo",
    "Bespoke Hospitality Website",
    "Open Hearth Dining",
    "Craft Cocktails Lounge",
    "Private Dining and Events",
    "Contemporary Upscale Restaurant",
  ],
  metadataBase: new URL("https://velora-dining.demo"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${RESTAURANT_CONFIG.brandName} — ${RESTAURANT_CONFIG.subBrand}`,
    description: RESTAURANT_CONFIG.positioning,
    url: "https://velora-dining.demo",
    siteName: `${RESTAURANT_CONFIG.brandName} — ${RESTAURANT_CONFIG.subBrand}`,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${RESTAURANT_CONFIG.brandName} Dining Room Ambiance`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESTAURANT_CONFIG.brandName} — ${RESTAURANT_CONFIG.subBrand}`,
    description: RESTAURANT_CONFIG.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#1B1714] text-[#F7F3EC] antialiased selection:bg-[#B88960] selection:text-[#1B1714]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
