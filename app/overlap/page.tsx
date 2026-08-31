import type { Metadata } from "next";
import OverlapClient from "./OverlapClient";

export const metadata: Metadata = {
  title: "Overlap: What to Watch",
  description: "Find the Overlap between your friends' tastes and unlock personalized Movie and TV Show recommendations.",
  alternates: {
    canonical: "https://www.appsbydivi.com/overlap",
  },
  authors: [{ name: "Divi Newton", url: "https://www.appsbydivi.com" }],
  creator: "Divi Newton",
  keywords: [
    "Divianadin Newton",
    "Divi Newton",
    "Apps by Divi",
    "UI by Divi",
    "divinewton",
    "Overlap",
    "movie recommendations",
    "TV show recommendations",
    "friends tastes",
    "iOS entertainment app",
    "private movie sharing",
  ],
  icons: {
    icon: "/overlap-icon.svg",
    shortcut: "/overlap-icon.svg",
    apple: "/overlap-icon.svg",
  },
  openGraph: {
    title: "Overlap: What to Watch",
    description: "Find the Overlap between your friends' tastes and unlock personalized Movie and TV Show recommendations.",
    url: "https://www.appsbydivi.com/overlap",
    siteName: "Apps by Divi",
    images: [
      {
        url: "/overlap-cover.png",
        width: 1200,
        height: 630,
        alt: "Overlap: What to Watch Cover Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overlap: What to Watch",
    description: "Find the Overlap between your friends' tastes and unlock personalized Movie and TV Show recommendations.",
    images: ["/overlap-cover.png"],
  },
};

export default function OverlapPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Overlap: What to Watch",
    "operatingSystem": "iOS",
    "applicationCategory": "EntertainmentApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Find the Overlap between your friends' tastes and unlock personalized Movie and TV Show recommendations.",
    "author": {
      "@type": "Person",
      "name": "Divi Newton",
      "url": "https://www.appsbydivi.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Apps by Divi",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.appsbydivi.com/appsbydivi.svg",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OverlapClient />
    </>
  );
}
