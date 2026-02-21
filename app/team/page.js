import Image from "next/image";

export const metadata = {
  title: "Екип - Техномаш Българска Индустриална Група",
  description:
    "Екипът на Техномаш БИГ АД — доказани инженери и технически специалисти с опит в изграждането на над 50 индустриални обекта и енергийни мощности над 200 MW.",
};

export default function Team() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Нашият екип
              </h1>
              {/* Decorative divider */}
              <div className="mt-5 flex items-center justify-center gap-0 w-48 mx-auto">
                <span className="block h-px flex-1 bg-gradient-to-r from-transparent via-red-500/60 to-red-500" />
                <span className="block h-[3px] w-10 bg-red-500 rounded-full" />
                <span className="block h-px flex-1 bg-gradient-to-l from-transparent via-red-500/60 to-red-500" />
              </div>
              <p
                className="mt-4 text-base sm:text-lg font-light tracking-wide"
                style={{ color: "rgba(255,255,255,0.72)", fontStyle: "italic" }}
              >
                Инженерна експертиза, изградена върху опит
              </p>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute -top-50 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            >
              <circle
                r={512}
                cx={512}
                cy={512}
                fill="url(#team-gradient)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="team-gradient">
                  <stop stopColor="#ff2e4a" />
                  <stop offset={1} stopColor="#ff2e4a" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Team Photo — intentionally short/banner-style to avoid blur */}
      <div className="bg-white pt-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative h-52 sm:h-64 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/our_team.jpg"
              alt="Екипът на Техномаш БИГ АД"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            {/* subtle bottom fade so it blends into the white section */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Intro paragraph — full width, prominent */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-14">
            Екипът на &bdquo;Техномаш &ndash; Българска Индустриална Група&ldquo; е двигателят зад нашия успех.
            С корени в тежкото машиностроене и строителството, нашите специалисти притежават
            дълбоки технически познания, които успешно прилагат в сектора на възобновяемата енергия.
          </p>

          {/* Two-column detail blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            {/* Left block */}
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-1">
                <span className="inline-block w-1 h-8 rounded-full bg-[#ff2e4a]" />
                <h2 className="text-xl font-semibold text-gray-900">Доказани решения</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Разполагаме с екип от доказани професионалисти, които не просто изпълняват
                проекти, а намират решения в необичайни и сложни ситуации. Нашият опит обхваща
                реализацията на над 50 индустриални обекта в страната и чужбина, както и
                изграждането на енергийни мощности с общ капацитет от над 200 MW.
              </p>
            </div>

            {/* Right block */}
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-1">
                <span className="inline-block w-1 h-8 rounded-full bg-[#ff2e4a]" />
                <h2 className="text-xl font-semibold text-gray-900">Пълен синхрон</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                От прецизното проектиране и логистиката до монтажа и въвеждането в
                експлоатация — нашите инженери и технически екипи работят в пълен синхрон,
                за да гарантират качество без компромис.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-lg text-gray-300">Индустриални обекта</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">200 MW</div>
              <div className="text-lg text-gray-300">Изградени енергийни мощности</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-lg text-gray-300">Години опит</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Искате да работите с нас?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Нашият екип е готов да ви консултира и помогне при реализацията на вашия проект.
            Свържете се с нас днес!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
            >
              Свържете се с нас
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
            >
              Разгледайте проектите ни
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
