import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-cyan-400 to-teal-400 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">
            Открийте нашето употребявано оборудване на изключителни цени!
          </h2>
          <Link
            href="/equipment/used"
            className="inline-flex items-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors whitespace-nowrap"
          >
            Разгледай сега
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
