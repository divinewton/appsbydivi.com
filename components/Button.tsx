import type { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  color?: string;
  disabled?: boolean;
  href?: string;
  rel?: string;
  target?: string;
  textColor?: string;
  type?: "button" | "submit" | "reset";
};

const baseClassName =
  "inline-flex items-center justify-center rounded-full border-0 px-6 py-3 text-sm font-medium leading-none transition-opacity duration-200 hover:opacity-90 active:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f]/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export default function Button({
  children,
  className = "",
  color = "#1d1d1f",
  disabled = false,
  href,
  rel,
  target,
  textColor = "#ffffff",
  type = "button",
}: ButtonProps) {
  const style = {
    backgroundColor: color,
    color: textColor,
  };
  const resolvedRel = rel ?? (target === "_blank" ? "noreferrer noopener" : undefined);

  const combinedClassName = [baseClassName, className].filter(Boolean).join(" ");

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");

    if (isExternal) {
      return (
        <a
          href={href}
          rel={resolvedRel}
          target={target}
          className={combinedClassName}
          style={style}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClassName} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} style={style} type={type} disabled={disabled}>
      {children}
    </button>
  );
}