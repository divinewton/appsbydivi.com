import Button from "../../components/Button";
import Image from "next/image";

export default function TripBookPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] px-6 py-16 text-[#1d1d1f] sm:px-10">
      <section className="card mx-auto flex max-w-4xl flex-col items-center rounded-3xl p-10 text-center sm:p-16">
        <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-6xl">
          TripBook: Country Tracker
        </h1>
        <div>
          <Image
            src="/tripbook.png"
            alt="Tripbook iOS App"
            width={2500}
            height={1406}
            className="w-full h-auto rounded-2xl pt-10"
          />
        </div>
        <p className="mt-4 max-w-2xl text-lg text-[#868589]">
          TripBook is an iOS app to map your memories and track your global progress.
          Development is in progress. Privacy details are available below.
        </p>
        <Button
          href="/tripbook/privacy"
          className="mt-8"
        >
          Privacy Policy
        </Button>
      </section>
    </main>
  );
}
