import Link from "next/link";

export default function TripBookPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f8fafc_0%,#eef2ff_48%,#e2e8f0_100%)] px-6 py-16 sm:px-10">
      <section className="glass-card mx-auto flex max-w-4xl flex-col items-center rounded-3xl p-10 text-center sm:p-16">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
          TripBook iOS App
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          TripBook development is in progress. Privacy details are available below.
        </p>
        <Link
          href="/tripbook/privacy"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
        >
          Privacy Policy
        </Link>
      </section>
    </main>
  );
}
