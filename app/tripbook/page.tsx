import type { Metadata } from "next";
import TripBookClient from "./TripBookClient";

export const metadata: Metadata = {
  title: "TripBook: Country Tracker",
  description: "A beautiful, private space to document your journey across the globe, turning your past adventures into a stunning visual atlas.",
  alternates: {
    canonical: "https://appsbydivi.com/tripbook",
  },
  authors: [{ name: "Divi Newton", url: "https://appsbydivi.com" }],
  creator: "Divi Newton",
  keywords: [
    "Divianadin Newton",
    "Divi Newton",
    "Apps by Divi",
    "UI by Divi",
    "divinewton",
    "TripBook",
    "Country Tracker",
    "travel tracker",
    "travel journal",
    "world map",
    "interactive map",
    "iOS travel app",
    "private travel map",
  ],
  icons: {
    icon: "/tripbook-icon.svg",
    shortcut: "/tripbook-icon.svg",
    apple: "/tripbook-icon.svg",
  },
  openGraph: {
    title: "TripBook: Country Tracker",
    description: "A beautiful, private space to document your journey across the globe, turning your past adventures into a stunning visual atlas.",
    url: "https://appsbydivi.com/tripbook",
    siteName: "Apps by Divi",
    images: [
      {
        url: "/tripbook-cover.png",
        width: 1200,
        height: 630,
        alt: "TripBook: Country Tracker Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TripBook: Country Tracker",
    description: "A beautiful, private space to document your journey across the globe, turning your past adventures into a stunning visual atlas.",
    images: ["/tripbook-cover.png"],
  },
};

export default function TripBookPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TripBook: Country Tracker",
    "operatingSystem": "iOS",
    "applicationCategory": "TravelApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "A beautiful, private space to document your journey across the globe, turning your past adventures into a stunning visual atlas.",
    "author": {
      "@type": "Person",
      "name": "Divi Newton",
      "url": "https://appsbydivi.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Apps by Divi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://appsbydivi.com/appsbydivi.svg",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TripBookClient />
    </>
  );
}
