import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rose’s Luxury | Michelin-Starred Dining on Capitol Hill, Washington D.C.",
  description:
    "Awarded One Michelin Star and Bon Appétit's Best New Restaurant in America. Located at 717 8th St SE on Capitol Hill. Making people happy since 2013.",
  keywords: [
    "Rose's Luxury",
    "Michelin Star Washington DC",
    "Capitol Hill Restaurant",
    "Aaron Silverman",
    "Roof Garden Dining DC",
    "Fine Dining DC",
    "Barracks Row Restaurants",
    "Best Restaurant DC"
  ],
  openGraph: {
    title: "Rose’s Luxury | Michelin-Starred Dining on Capitol Hill",
    description:
      "A dinner party every night. Savor inventive culinary artistry, warm hospitality, and the historic Roof Garden on Capitol Hill.",
    url: "https://rosesluxury.com",
    siteName: "Rose's Luxury",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0B0A09] text-[#FBF9F5] antialiased selection:bg-[#C0635A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
