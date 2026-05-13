import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Florida Truck Repairs | Statewide Fleet Maintenance & Breakdown Network",
    template: "%s | Florida Truck Repairs",
  },
  description:
    "Florida's statewide fleet maintenance and breakdown network. Fleet maintenance contracts, 24/7 breakdown membership, DOT inspections, and diesel repair across all major Florida markets.",
  keywords: [
    "Florida fleet maintenance",
    "Florida truck repair",
    "statewide breakdown membership",
    "commercial truck repair Florida",
    "fleet maintenance contracts Florida",
    "DOT inspection Florida",
    "diesel repair Florida",
    "24/7 roadside assistance Florida",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://floridatruckrepairs.com",
    siteName: "Florida Truck Repairs",
    title: "Florida Truck Repairs | Statewide Fleet Maintenance & Breakdown Network",
    description:
      "Florida's statewide fleet maintenance and breakdown network. One call. Statewide coverage. Built by shop owners who understand your operation.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Florida Truck Repairs — Statewide Fleet Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Truck Repairs | Statewide Fleet Maintenance & Breakdown Network",
    description:
      "Florida's statewide fleet maintenance and breakdown network. One call. Statewide coverage.",
    images: [
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&h=630&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://floridatruckrepairs.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* TODO: Insert GA tag here */}
        {/* TODO: Insert CallRail tracking script here */}
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
