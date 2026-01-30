import Link from "next/link";
import LazyImageObserver from "./LazyImageObserver";

export default function Hero() {
  return (
    <>
      <LazyImageObserver />
      {/* Hero Section with overlapping feature boxes */}
      <div className="relative bg-gradient-to-br from-blue-50 via-blue-50 to-indigo-50">
        {/* Mobile Hero */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Background Image */}
            <img
              src="/hero-image-mobile.jpg"
              width={640}
              height={400}
              alt="Hero image"
              className="w-full h-[420px] object-cover"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              style={{
                objectFit: "cover",
                contentVisibility: "auto",
                containIntrinsicSize: "640px 400px",
              }}
              id="hero-mobile-lcp"
            />
            {/* Gradient overlay behind text */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
            {/* Text inside image */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 py-10">
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                Техномаш: Прецизност във всеки детайл, мощ във всяко решение.
              </h1>
              <div className="mt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors"
                >
                  Вижте повече
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="hidden lg:block relative min-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-image-desktop.jpg"
              width={1920}
              height={776}
              alt="Modern architecture building"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              style={{
                objectFit: "cover",
                contentVisibility: "auto",
                containIntrinsicSize: "1920px 776px",
              }}
              id="hero-desktop-lcp"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-0 lg:px-0">
            <div className="grid grid-cols-2 gap-8 items-center py-20">
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                  Техномаш: Прецизност във всеки детайл, мощ във всяко решение.
                </h1>
                <div className="pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
                  >
                    Вижте повече
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right Side - Video Play Button */}
              <div className="relative flex items-center justify-center h-full">
                <button className="w-20 h-20 bg-[#ff2e4a] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#b82220] transition-colors group">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Boxes - Desktop overlapping */}
        <div className="hidden lg:block">
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4 sm:px-6 lg:px-8 z-20">
            <div className="mx-auto max-w-7xl">
              <div className="grid grid-cols-4 gap-6">
                {/* Feature Box 1 - Анализ и Одит */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <svg className="w-10 h-10 text-[#ff2e4a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Анализ и Одит</h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Експертно проучване на соларния потенциал и консултации за постигане на максимална ефективност и възвръщаемост на вашата инвестиция.
                  </p>
                </div>

                {/* Feature Box 2 - Проектиране */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <svg className="w-10 h-10 text-[#ff2e4a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Проектиране</h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Изготвяне на цялостни идейни и работни инвестиционни проекти, съобразени с най-високите технически стандарти и спецификите на терена.
                  </p>
                </div>

                {/* Feature Box 3 - Директни Доставки */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <svg className="w-10 h-10 text-[#ff2e4a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Директни Доставки</h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Осигуряваме първокласно оборудване чрез стабилни партньорства с водещи световни производители в сектора на възобновяемата енергия.
                  </p>
                </div>

                {/* Feature Box 4 - Изпълнение „До Ключ" */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <svg className="w-10 h-10 text-[#ff2e4a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Изпълнение „До Ключ"</h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Професионално изграждане и пускане в експлоатация от опитни екипи, гарантиращи безкомпромисно качество на финалната инсталация.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Boxes - Mobile/Tablet stacked below hero */}
      <div className="lg:hidden bg-white px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {/* Feature Box 1 - Анализ и Одит */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#ff2e4a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Анализ и Одит</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Експертно проучване на соларния потенциал и консултации за постигане на максимална ефективност и възвръщаемост на вашата инвестиция.
              </p>
            </div>

            {/* Feature Box 2 - Проектиране */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#ff2e4a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Проектиране</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Изготвяне на цялостни идейни и работни инвестиционни проекти, съобразени с най-високите технически стандарти и спецификите на терена.
              </p>
            </div>

            {/* Feature Box 3 - Директни Доставки */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#ff2e4a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Директни Доставки</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Осигуряваме първокласно оборудване чрез стабилни партньорства с водещи световни производители в сектора на възобновяемата енергия.
              </p>
            </div>

            {/* Feature Box 4 - Изпълнение „До Ключ" */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center">
                  <svg className="w-10 h-10 text-[#ff2e4a]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">Изпълнение „До Ключ"</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Професионално изграждане и пускане в експлоатация от опитни екипи, гарантиращи безкомпромисно качество на финалната инсталация.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
