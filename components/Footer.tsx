export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#d2d2d7] px-6 py-7 sm:px-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 text-sm text-[#6e6e73]">
        <span className="text-lg text-[#1d1d1f]">Apps by Divi</span>
        <span>Copyright © {year} by Divi Newton</span>
      </div>
    </footer>
  );
}