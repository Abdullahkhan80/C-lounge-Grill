import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AAA Food Safety Certification | ServSafe Training Los Angeles, Orange & Ventura",
  description:
    "Official ServSafe Food Protection Manager and Food Handler in-person training across Southern California. 40+ years experience, ANSI accredited, immediate same-day exam results. We come to your location for 2+ managers.",
  keywords: [
    "ServSafe Certification Los Angeles",
    "Food Safety Manager Class",
    "California Food Handler Card",
    "AAA Safe Foods",
    "ANSI Food Protection Manager",
    "On-site ServSafe Training",
    "Orange County Food Safety",
    "Ventura County ServSafe",
    "Clases ServSafe Español Los Angeles",
    "Richard AAA Food Safety",
    "Susana Food Safety Spanish",
  ],
  openGraph: {
    title: "AAA Food Safety Certification | ServSafe Manager & Handler Classes",
    description:
      "Get Food Safety Certified with Confidence. In-person ServSafe instruction 7 days a week with immediate exam results in English & Spanish.",
    url: "https://aaasafefoods.com",
    siteName: "AAA Food Safety Certification",
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
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-[#0d9488] selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
