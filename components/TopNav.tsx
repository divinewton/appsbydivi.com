"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";

function BrandIcon({
  src,
  alt,
  size,
}: {
  src: string;
  alt: string;
  size: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="block shrink-0"
    />
  );
}

export default function TopNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isTripBookRoute = pathname.startsWith("/tripbook");
  const isOverlapRoute = pathname.startsWith("/overlap");

  const appsIconSrc = "/appsbydivi.svg";
  const tripBookIconSrc = "/tripbook-icon.svg";
  const overlapIconSrc = "/overlap-icon.svg";
  const brandIconSrc = "/divinewton-icon.svg";

  let currentLabel = "Apps by Divi";
  let currentHomeHref = "/";
  let currentIconSrc = appsIconSrc;

  if (isTripBookRoute) {
    currentLabel = "TripBook";
    currentHomeHref = "/tripbook";
    currentIconSrc = tripBookIconSrc;
  } else if (isOverlapRoute) {
    currentLabel = "Overlap";
    currentHomeHref = "/overlap";
    currentIconSrc = overlapIconSrc;
  }

  const dropdownItems = [];

  if (isTripBookRoute) {
    dropdownItems.push({
      href: "/",
      label: "Apps by Divi",
      external: false,
      icon: appsIconSrc,
    });
    dropdownItems.push({
      href: "/overlap",
      label: "Overlap",
      external: false,
      icon: overlapIconSrc,
    });
  } else if (isOverlapRoute) {
    dropdownItems.push({
      href: "/",
      label: "Apps by Divi",
      external: false,
      icon: appsIconSrc,
    });
    dropdownItems.push({
      href: "/tripbook",
      label: "TripBook",
      external: false,
      icon: tripBookIconSrc,
    });
  } else {
    dropdownItems.push({
      href: "/tripbook",
      label: "TripBook",
      external: false,
      icon: tripBookIconSrc,
    });
    dropdownItems.push({
      href: "/overlap",
      label: "Overlap",
      external: false,
      icon: overlapIconSrc,
    });
  }

  dropdownItems.push({
    href: "https://www.divinewton.com/",
    label: "divinewton.com",
    external: true,
    icon: brandIconSrc,
  });

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-[#f5f5f7]/70 px-6 py-4 backdrop-blur-xl sm:px-10">
      <nav aria-label="Primary" className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div ref={menuRef} className="relative inline-flex items-center gap-1">
          <Link
            href={currentHomeHref}
            className="flex items-center gap-2 text-xl font-semibold tracking-tight text-[#1d1d1f] sm:text-2xl"
          >
            <BrandIcon
              src={currentIconSrc}
              alt={currentLabel}
              size={30}
            />
            {currentLabel}
          </Link>

          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={isOpen}
            aria-label="Open app switcher"
            onClick={() => setIsOpen((open) => !open)}
            className="cursor-pointer rounded-md p-1 text-[#1d1d1f] transition-colors hover:bg-white/50"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {isOpen ? (
            <div
              role="menu"
              className="absolute left-0 top-full z-20 mt-2 min-w-56 rounded-2xl border border-white/60 bg-white/90 p-2 shadow-md backdrop-blur"
            >
              {dropdownItems.map((item, index) => {
                const itemClassName =
                  "flex items-center gap-2 rounded-xl px-3 py-2.5 text-base font-medium text-[#1d1d1f] transition-colors hover:bg-[#f5f5f7]";

                const content = (
                  <>
                    <BrandIcon
                      src={item.icon}
                      alt={item.label}
                      size={20}
                    />
                    <span>{item.label}</span>
                  </>
                );

                return (
                  <div key={item.label}>
                    {index === dropdownItems.length - 1 ? <div className="my-1 h-px bg-[#e5e5ea]" /> : null}
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="menuitem"
                        onClick={() => setIsOpen(false)}
                        className={itemClassName}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        role="menuitem"
                        onClick={() => setIsOpen(false)}
                        className={itemClassName}
                      >
                        {content}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>

        {isTripBookRoute && (
          <Button
            href="https://testflight.apple.com/join/46kPpayM"
            target="_blank"
          >
            Join the Beta
          </Button>
        )}
      </nav>
    </header>
  );
}