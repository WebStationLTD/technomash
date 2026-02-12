import Image from "next/image";

export const metadata = {
  title: "Нашият екип - Technomash",
  description:
    "Запознайте се с професионалния екип от експерти на Техномаш БИГ АД, които работят за успеха на вашите проекти.",
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
              <p className="mt-6 text-lg/8 text-white">
                Запознайте се с професионалния екип от експерти, които работят за успеха на вашите проекти.
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
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#ff2e4a" />
                  <stop offset={1} stopColor="#ff2e4a" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Team Image and Content Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Team Photo */}
          <div className="mb-16">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/our_team.jpg"
                alt="Екипът на Техномаш БИГ АД"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority
              />
            </div>
          </div>

          {/* Company Story - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
                Нашата история
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  След повече от 15 години опит ние сме водещи в нашата област и развиваме 
                  способностите си, за да отговорим веднага и напълно на пазарните изисквания 
                  с обширни познания върху технологичните потребности, предлагайки пълни решения, 
                  които са доказани ценни инвестиции.
                </p>
                <p>
                  &ldquo;Техномаш&rdquo; от своето създаване и до днешни дни расте положително нагоре. 
                  По-специално в последните пет години, когато компанията ни се трансформира 
                  от комерсиална до индустриална и вече е единственият производител в България 
                  на бетонови възли, асфалтови бази, пресевни и промивни инсталации.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">
                Нашите ценности
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Финансовите ни възможности значително се подобриха и доказват нашата финансова 
                  стабилност и кредитна дееспособност. С твърдата увереност в нашите възможности 
                  ние се чувстваме горди със своето минало и оптимисти за своето бъдеще.
                </p>
                <p>
                  &ldquo;Техномаш&rdquo; АД е една бързо развиваща се, динамична и гъвкава компания. Нашият 
                  успех няма тайни. Той се дължи на стремежа ни да произвеждаме изключително 
                  качество при безопасни условия на труд и експлоатация – винаги в услуга на 
                  партньорите си.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6 text-center">
                Нашата философия
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Нашите специалисти са на разположение 24 часа всеки ден, във всяка една точка 
                  на страната. Независимо колко добри са нашите продукти, услуги, технологии и 
                  изпълнение, ние вярваме, че те могат да станат и по-добри.
                </p>
                <p className="text-center font-medium text-gray-900 text-xl">
                  Затова се стремим постоянно към съвършенство и във всичко, което правим, 
                  сме отворени за нови идеи и не се страхуваме да поемаме рискове.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-lg text-gray-300">Години опит</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">200+</div>
              <div className="text-lg text-gray-300">Завършени проекта</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-lg text-gray-300">Техническа поддръжка</div>
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
