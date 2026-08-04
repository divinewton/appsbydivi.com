import Image from "next/image";
import Button from "../components/Button";
import { appCards } from "../lib/config/appCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <main className="px-6 pb-12 sm:px-10">
        <section className="mx-auto flex max-w-6xl flex-col items-center py-14 text-center sm:py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl">
            Thoughtfully Designed <br /> Native Experiences
          </h1>
          <span className="mt-5 inline-flex items-center rounded-full bg-[#1d1d1f]/5 border border-[#1d1d1f]/10 px-5 py-2.5 text-sm font-semibold text-[#1d1d1f]/80">
            Coming Soon to iOS
          </span>
        </section>

        <section className="mx-auto mt-14 flex w-full max-w-6xl flex-col gap-6">
          {appCards.map((card) => (
            <article
              key={card.id}
              className="card grid w-full overflow-hidden rounded-3xl md:grid-cols-[minmax(280px,420px)_1fr]"
            >
              <div>
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  width={2500}
                  height={1406}
                  className="w-full h-auto"
                  priority={card.id === 1}
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  {card.iconSrc && (
                    <Image
                      src={card.iconSrc}
                      alt={`${card.title} Icon`}
                      width={36}
                      height={36}
                      className="rounded-[22%] border border-black/5"
                    />
                  )}
                  <h3 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl">
                    {card.title}
                  </h3>
                </div>
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
