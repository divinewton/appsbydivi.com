import Image from "next/image";
import Link from "next/link";
import { appCards } from "../lib/config/appCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f8fafc_0%,#eef2ff_48%,#e2e8f0_100%)] text-slate-950">
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <span className="text-lg font-semibold tracking-tight">Apps by Divi</span>
      </header>

      <main className="px-6 pb-12 sm:px-10">
        <section className="mx-auto flex max-w-6xl flex-col items-center py-14 text-center sm:py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Coming Soon
          </h1>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-slate-900 sm:mx-10 sm:text-3xl">
            Experience native iOS apps with UI by Divi.
          </h2>
          <a
            href="https://www.divinewton.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
          >
            More on divinewton.com
          </a>
        </section>

        <section className="mx-auto mt-14 flex w-full max-w-6xl flex-col gap-6">
          {appCards.map((card) => (
            <article
              key={card.id}
              className="glass-card grid w-full overflow-hidden rounded-3xl md:grid-cols-[minmax(280px,420px)_1fr]"
            >
              <div className="relative min-h-64">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority={card.id === 1}
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  {card.description}
                </p>

                {card.isAvailable ? (
                  <Link
                    href={card.href as string}
                    className="mt-7 inline-flex h-11 w-fit items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                  >
                    App Details
                  </Link>
                ) : (
                  <span
                    aria-disabled="true"
                    className="mt-7 inline-flex h-11 w-fit cursor-not-allowed items-center justify-center rounded-full bg-slate-300 px-6 text-sm font-medium text-slate-500"
                  >
                    Coming Soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
