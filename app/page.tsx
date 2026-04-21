import Image from "next/image";
import Button from "../components/Button";
import { appCards } from "../lib/config/appCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <span className="text-lg font-semibold tracking-tight text-[#1d1d1f]">Apps by Divi</span>
      </header>

      <main className="px-6 pb-12 sm:px-10">
        <section className="mx-auto flex max-w-6xl flex-col items-center py-14 text-center sm:py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl">
            Coming Soon
          </h1>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:mx-10 sm:text-3xl">
            Experience native iOS apps with UI by Divi.
          </h2>
          <Button
            href="https://www.divinewton.com/"
            target="_blank"
            className="mt-8"
          >
            More on divinewton.com
          </Button>
        </section>

        <section className="mx-auto mt-14 flex w-full max-w-6xl flex-col gap-6">
          {appCards.map((card) => (
            <article
              key={card.id}
              className="card grid w-full overflow-hidden rounded-3xl md:grid-cols-[minmax(280px,420px)_1fr]"
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
                <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#868589] sm:text-lg">
                  {card.description}
                </p>

                {card.isAvailable ? (
                  <Button
                    href={card.href as string}
                    className="mt-7 w-fit"
                  >
                    App Details
                  </Button>
                ) : (
                  <Button
                    disabled
                    color="#d1d1d6"
                    textColor="#868589"
                    className="mt-7 w-fit"
                  >
                    Coming Soon
                  </Button>
                )}
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
