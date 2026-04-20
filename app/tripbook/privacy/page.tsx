export default function TripBookPrivacyPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f8fafc_0%,#eef2ff_48%,#e2e8f0_100%)] px-6 py-12 sm:px-10">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy for TripBook
        </h1>
        <textarea
          aria-label="TripBook privacy text"
          readOnly
          value="Privacy policy details for TripBook will be published here soon."
          className="glass-card mt-6 h-112 w-full resize-none rounded-2xl p-6 text-lg leading-relaxed text-slate-700 focus:outline-none"
        />
      </section>
    </main>
  );
}
