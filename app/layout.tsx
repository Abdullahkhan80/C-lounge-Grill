import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
  title: "C Lounge & Grill | Premium Restaurant & Lounge in the Bronx, NY",
  description:
    "Good Food. Great Vibes. Unforgettable Nights. Discover flame-grilled specialties, handcrafted cocktails, and an inviting lounge experience at 1735 E 172nd St, Bronx, NY 10472.",
  keywords: [
    "C Lounge & Grill",
    "C Lounge & Grill Bronx",
    "Restaurant in Bronx NY",
    "Lounge and Grill Bronx",
    "Restaurant near E 172nd St",
    "Dining in Bronx New York",
    "Bronx Lounge",
    "Cocktails and Dining Bronx",
  ],
  metadataBase: new URL("https://cloungeandgrill.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "C Lounge & Grill | Restaurant, Lounge & Grill in the Bronx, NY",
    description:
      "Good Food. Great Vibes. Unforgettable Nights. Discover flame-grilled cuisine, curated cocktails, and an upscale lounge atmosphere in the heart of the Bronx.",
    url: "https://cloungeandgrill.com",
    siteName: "C Lounge & Grill",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "C Lounge & Grill - Dining and Lounge Atmosphere in the Bronx, NY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C Lounge & Grill | Bronx, New York",
    description:
      "Good Food. Great Vibes. Unforgettable Nights. Dining, grill cuisine, cocktails & lounge experience.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "C Lounge & Grill",
  image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1735 E 172nd St",
    addressLocality: "Bronx",
    addressRegion: "NY",
    postalCode: "10472",
    addressCountry: "US",
  },
  telephone: "+16467855832",
  servesCuisine: ["Grill", "American", "Cocktails", "Lounge Fare"],
  priceRange: "$$",
  hasMap: "https://maps.app.goo.gl/J9ZkXP2xK1b3EAqD6",
  url: "https://cloungeandgrill.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#101010] text-[#f5f0e8] antialiased selection:bg-[#c9a56a] selection:text-[#101010]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
