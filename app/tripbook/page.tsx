"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Button from "../../components/Button";

const screenshots = [
  {
    src: "/tripbook/track-progress.png",
    alt: "Track your global progress with TripBook - home screen overview",
  },
  {
    src: "/tripbook/log-trips.png",
    alt: "Log every trip and every country with flag previews and destination photos",
  },
  {
    src: "/tripbook/save-details.png",
    alt: "Save every detail and memory including travel stats, duration, and passport stamps",
  },
  {
    src: "/tripbook/fill-map.png",
    alt: "Fill in your interactive world map trip by trip",
  },
  {
    src: "/tripbook/dark-mode.png",
    alt: "Beautiful, fully integrated Dark Mode interface",
  },
];

export default function TripBookPage() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setShowLeftArrow(scrollLeft > 2);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (galleryRef.current) {
      const { scrollLeft, clientWidth } = galleryRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      galleryRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  const scrollToCard = (index: number) => {
    if (galleryRef.current) {
      const card = galleryRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-12 text-center sm:px-10 sm:pt-24">
        <div className="relative hover:scale-[1.03] transition-transform duration-300">
          <Image
            src="/tripbook-icon.svg"
            alt="TripBook App Icon"
            width={120}
            height={120}
            priority
          />
        </div>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-6xl md:text-7xl">
          Track your global progress.
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-[#868589] sm:text-2xl">
          A beautiful, private space to document your journey across the globe,
          turning your past adventures into a stunning visual atlas.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="https://testflight.apple.com/join/46kPpayM"
            target="_blank"
          >
            Join the Beta
          </Button>
          <span className="inline-flex items-center rounded-full bg-[#1d1d1f]/5 border border-[#1d1d1f]/10 px-5 py-2.5 text-sm font-semibold text-[#1d1d1f]/80">
            Coming Soon to iOS
          </span>
        </div>
      </section>

      {/* Screenshot Gallery Carousel */}
      <section className="relative mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="group relative">
          {/* Scroll Buttons */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="absolute -left-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-[#d2d2d7]/50 bg-white/95 p-3 text-[#1d1d1f] shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:scale-95 md:-left-4 cursor-pointer"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="absolute -right-2 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-[#d2d2d7]/50 bg-white/95 p-3 text-[#1d1d1f] shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105 active:scale-95 md:-right-4 cursor-pointer"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Scroll Container */}
          <div
            ref={galleryRef}
            onScroll={handleScroll}
            className="scrollbar-none flex gap-6 overflow-x-auto px-6 py-12 snap-x snap-mandatory scroll-smooth"
          >
            {screenshots.map((shot, idx) => (
              <div
                key={idx}
                onClick={() => scrollToCard(idx)}
                className="w-[240px] sm:w-[280px] md:w-[300px] shrink-0 snap-center rounded-[28px] overflow-hidden shadow-md shadow-black/5 border border-black/5 bg-[#e8e8ed] hover:scale-[1.02] hover:shadow-xl hover:shadow-black/10 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={473}
                  height={1024}
                  className="w-full h-auto select-none pointer-events-none"
                  priority={idx < 2}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="card rounded-3xl p-8 sm:p-16">
          <div className="flex flex-col items-center text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f5f7]">
              <Image
                src="/tripbook/icons/shield.svg"
                alt="Privacy Icon"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl">
              Privacy by Default
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-[#868589]">
              Your travels are personal. TripBook keeps them that way by ensuring
              no data ever leaves your device.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-[#f5f5f7]/60 p-6 border border-[#d2d2d7]/10 hover:bg-[#f5f5f7]/80 transition-colors">
              <h3 className="text-lg font-semibold text-[#1d1d1f]">
                No Accounts or Cloud Sync
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">
                Your trips, journal entries, and settings stay entirely on your
                device. No logins or passwords required. You own your data.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f5f7]/60 p-6 border border-[#d2d2d7]/10 hover:bg-[#f5f5f7]/80 transition-colors">
              <h3 className="text-lg font-semibold text-[#1d1d1f]">
                Zero Tracking
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">
                No ads, no third-party analytics SDKs, and absolutely no data harvesting.
                Just a clean space for you and your travels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-5xl px-6 pb-20 sm:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Everything you need, nothing you don’t.
          </h2>
          <p className="mt-4 text-lg text-[#868589]">
            Thoughtfully designed features built specifically for private travel mapping.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Image
                  src="/tripbook/icons/pin.svg"
                  alt="Stops Icon"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f]">
                One Trip, Many Stops
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">
                Add multiple countries to a single trip and see the full journey
                reflected in its custom map outlines, flag passport stamps, and travel stats.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Image
                  src="/tripbook/icons/search.svg"
                  alt="Search Icon"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f]">
                Smart Search
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">
                Find trips instantly by searching for a custom trip title or the names of specific countries you visited.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Image
                  src="/tripbook/icons/map.svg"
                  alt="Map Icon"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f]">
                Interactive Map
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">
                Watch your personal world map fill with color. Your home country remains the anchor highlighting your travels.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Image
                  src="/tripbook/icons/leaderboard.svg"
                  alt="Milestones Icon"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f]">
                Travel Milestones
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">
                Track metrics like World Seen percentage, Explorer Levels (Wanderer to World Nomad), Passport Stamps, and Favorite Region.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Image
                  src="/tripbook/icons/building.svg"
                  alt="Insights Icon"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f]">
                Country Insights
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">
                Tap a country on your map to view detailed information: its capital, population, languages, currency, and Wikipedia summary.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <Image
                  src="/tripbook/icons/globe.svg"
                  alt="Offline Ready Icon"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#1d1d1f]">
                Offline Ready
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#515154]">
                All saved trips, travel stats, and country outlines remain fully available offline. Light and Dark modes are fully supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="card border-t border-[#d2d2d7]/30 py-16 text-center sm:py-24">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] sm:text-4xl">
            Start mapping your journey.
          </h2>
          <p className="mt-4 text-lg text-[#868589]">
            A private space for your past adventures.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              href="/tripbook/privacy"
              className="shadow-xs"
            >
              Privacy Policy
            </Button>
            <Button
              href="mailto:feedback@appsbydivi.com"
              color="#f5f5f7"
              textColor="#1d1d1f"
              className="border border-[#d2d2d7]/40"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
