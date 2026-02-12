import Link from "next/link";
import Image from "next/image";

// Equipment section on the home page
export default function Equipment() {
  return (
    <div className="bg-[#f4f4f4] py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-0 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Оборудване
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Оборудване
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Нашите партньори и доставчици са световни лидери в производството
              на специализирано оборудване. Благодарение на това, ние
              гарантираме високо качество на всички компоненти и изпълнение на
              специфичните изисквания на всеки проект и клиент.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              „Техномаш“ е завършила проекти за възобновяема енергия с обща
              мощност от 500 MW. Поддържаме налично оборудване на склад,
              необходимо за навременното завършване на проектите.
            </p>
            <div className="pt-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
              >
                Вижте повече
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Image with decorative dot */}
          <div className="relative">
            <Image
              alt="Industrial equipment"
              src="/hero-image-desktop.jpg"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Decorative red dot */}
            <div className="absolute bottom-8 right-8 w-4 h-4 bg-[#ff2e4a] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

