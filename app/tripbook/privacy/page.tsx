export default function TripBookPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f7] px-6 py-12 text-[#1d1d1f] sm:px-10">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-4xl">
          Privacy Policy for TripBook
        </h1>
        <textarea
          aria-label="TripBook privacy text"
          readOnly
          value="Privacy policy details for TripBook will be published here soon."
          className="card mt-6 h-112 w-full resize-none rounded-2xl p-6 text-lg leading-relaxed text-[#868589] focus:outline-none"
        />
      </section>
    </main>
  );
}
