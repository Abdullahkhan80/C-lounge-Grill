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
  title: "The St. Clair Restaurant & Tavern | Steaks, Seafood & Cocktails in Pell City, AL",
  description:
    "Where casual dining meets upscale food and welcoming Southern hospitality. Hand-cut Certified Angus Beef steaks, coastal seafood, craft burgers, 30+ wines by the glass, and Sunday brunch in Pell City, Alabama.",
  keywords: [
    "The St Clair Pell City",
    "Tavern at The St Clair",
    "Pell City Restaurants",
    "Steaks and Seafood Alabama",
    "Sunday Brunch Pell City",
    "Resy The St Clair",
    "Casual Dining Pell City AL",
    "Arthur St Clair restaurant",
  ],
  openGraph: {
    title: "The St. Clair Restaurant & Tavern | Pell City, Alabama",
    description:
      "Casual Dining. Exceptional Food. Enjoy hand-cut steaks, coastal seafood, craft cocktails, and Sunday brunch across two distinct dining experiences.",
    url: "https://thestclairpellcity.com",
    siteName: "The St. Clair Restaurant & Tavern",
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
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#141312] text-[#faf7f0] antialiased selection:bg-[#c5a059] selection:text-[#0d0c0b]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
