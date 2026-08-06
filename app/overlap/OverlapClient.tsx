"use client";

import Image from "next/image";

export default function OverlapClient() {
  return (
    <main className="bg-[#f5f5f7] text-[#1d1d1f]">
      {/* Hero Section */}
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-12 text-center sm:px-10 sm:pt-24">
        <div className="relative hover:scale-[1.03] transition-transform duration-300">
          <Image
            src="/overlap-icon.svg"
            alt="Overlap App Icon"
            width={120}
            height={120}
            priority
            className="rounded-[22%] border border-black/5"
          />
        </div>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-[#1d1d1f] sm:text-6xl md:text-7xl">
          Find the overlap.
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-[#868589] sm:text-2xl">
          Find the Overlap between your friends&apos; tastes and unlock personalized Movie and TV Show recommendations.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center rounded-full bg-[#1d1d1f]/5 border border-[#1d1d1f]/10 px-5 py-2.5 text-sm font-semibold text-[#1d1d1f]/80">
            Coming Soon to iOS
          </span>
        </div>
      </section>
    </main>
  );
}
