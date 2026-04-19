export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f8fafc_0%,#eef2ff_48%,#e2e8f0_100%)] text-slate-950">
      <header className="flex items-center justify-between px-6 py-5 sm:px-10">
        <span className="text-lg font-semibold tracking-tight">Apps by Divi</span>
      </header>

      <main className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center px-6 pb-12 sm:px-10">
        <section className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Coming Soon
          </h1>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl mt-5">
            Experience native iOS apps with UI by Divi.
          </h1>
          <button
            type="button"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-6 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
          >
            Learn More
          </button>
        </section>
      </main>
    </div>
  );
}
