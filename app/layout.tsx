import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.appsbydivi.com"),
  title: {
    default: "Apps by Divi",
    template: "%s | Apps by Divi",
  },
  description: "Experience thoughtfully designed native iOS apps. Building beautiful, private, and offline-ready mobile experiences that respect your privacy.",
  authors: [{ name: "Divi Newton", url: "https://www.appsbydivi.com" }],
  creator: "Divi Newton",
  keywords: [
    "Divianadin Newton",
    "Divi Newton",
    "Apps by Divi",
    "UI by Divi",
    "divinewton",
    "TripBook",
    "Overlap",
    "iOS apps",
    "native iOS apps",
    "design portfolio",
    "privacy-first apps",
  ],
  icons: {
    icon: "/appsbydivi.svg",
    shortcut: "/appsbydivi.svg",
    apple: "/appsbydivi.svg",
  },
  openGraph: {
    title: "Apps by Divi",
    description: "Experience thoughtfully designed native iOS apps. Building beautiful, private, and offline-ready mobile experiences that respect your privacy.",
    url: "https://www.appsbydivi.com",
    siteName: "Apps by Divi",
    images: [
      {
        url: "/tripbook-cover.png",
        width: 1200,
        height: 630,
        alt: "TripBook: Country Tracker Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apps by Divi",
    description: "Experience thoughtfully designed native iOS apps. Building beautiful, private, and offline-ready mobile experiences that respect your privacy.",
    images: ["/tripbook-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TopNav />
        <div className="flex-1 pt-16 sm:pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
