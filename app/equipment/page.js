import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Оборудване - Technomash",
  description:
    "Разгледайте високо качественото оборудване, предлагано от Техномаш БИГ АД - бетонови възли, асфалтови бази и пресевни инсталации.",
};

const equipmentCategories = [
  {
    id: 1,
    title: "Модулни Бетонови Центрове",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/equipment/equipment-1.jpg",
    features: [
      "Висока производителност",
      "Модулна конструкция",
      "Лесна инсталация",
      "Автоматизирано управление",
    ],
  },
  {
    id: 2,
    title: "Мобилни Бетоносмесителни Инсталации",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/equipment/equipment-2.jpg",
    features: [
      "Мобилност и гъвкавост",
      "Бърз монтаж и демонтаж",
      "Компактен дизайн",
      "Оптимална производителност",
    ],
  },
  {
    id: 3,
    title: "Асфалтосмесителни Инсталации",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/equipment/equipment-3.jpg",
    features: [
      "Екологични решения",
      "Висока ефективност",
      "Надеждна конструкция",
      "Модерни технологии",
    ],
  },
  {
    id: 4,
    title: "Пресевни Инсталации",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/equipment/equipment-4.jpg",
    features: [
      "Прецизно сепариране",
      "Модулна система",
      "Висока капацитет",
      "Дълготрайност",
    ],
  },
  {
    id: 5,
    title: "Зареждащи Групи",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/equipment/equipment-5.jpg",
    features: [
      "Ефективно зареждане",
      "Автоматизирана система",
      "Надеждна работа",
      "Лесна поддръжка",
    ],
  },
  {
    id: 6,
    title: "Контролни Кабини и Автоматизация",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: "/equipment/equipment-6.jpg",
    features: [
      "Модерно управление",
      "Интуитивен интерфейс",
      "Пълен контрол",
      "Отдалечен достъп",
    ],
  },
  {
    id: 7,
    title: "Huawei SUN2000-10KTL-M1",
    description: "Инверторът Huawei SUN2000-10KTL-M1 е трифазен мрежов инвертор с номинална мощност от 10 kW, предназначен за ефективно преобразуване на слънчевата енергия в електрическа. Той разполага с два MPPT тракера, които позволяват оптимално проследяване на точката на максимална мощност, осигурявайки по-висока ефективност при различни условия на осветеност.",
    images: [
      "/huawei-sun2000-10ktl-1.jpg",
      "/huawei-sun2000-10ktl-2.jpg",
      "/huawei-sun2000-10ktl-3.jpg",
    ],
    features: [
      "Максимално входно напрежение: 1100 V",
      "Работен MPPT диапазон: 160-1000 V",
      "Максимална входна мощност: 15 kW",
      "Максимална ефективност: 98,6%",
      "Степен на защита: IP65",
      "Активна защита от електрическа дъга (AFCI)",
      "Работен температурен диапазон: -25°C до +60°C",
      "Вграден онлайн мониторинг през Fusion Solar",
    ],
  },
  {
    id: 8,
    title: "Захранващ модул батерия Huawei LUNA2000 S0-C0",
    description: "Захранващият модул LUNA2000 S0-C0 е ключов компонент в системата за съхранение на енергия на Huawei. Той управлява зареждането и разреждането на батерийните модули, осигурявайки ефективност и безопасност. Модулът е съвместим с различни инвертори, което го прави подходящ за разнообразни приложения.",
    images: [
      "/luna2000-power-module.jpg",
    ],
    features: [
      "Модулен дизайн за лесно разширяване",
      "Съвместим с еднофазни и трифазни инвертори",
      "Лесен монтаж и бързо пускане в експлоатация",
      "Автоматично разпознаване в приложението",
      "Висока безопасност и надеждност",
      "100% дълбочина на разреждане (DoD)",
      "Интегриран енергиен оптимизатор",
    ],
  },
  {
    id: 9,
    title: "Литиево Йонна батерия за LUNA2000 5kWh – S0-E0",
    description: "Литиево-йонният батериен модул LUNA2000-5-E0 е част от модулната система за съхранение на енергия на Huawei. С капацитет от 5 kWh, този модул е предназначен за разширяване на съществуващи LUNA2000 системи, осигурявайки гъвкавост и мащабируемост според енергийните нужди.",
    images: [
      "/luna2000-battery-module-1.jpg",
      "/luna2000-battery-module-2.jpg",
    ],
    features: [
      "Капацитет: 5 kWh на модул",
      "Разширяване до 15 kWh общо",
      "Литиево-железо-фосфатни (LFP) клетки",
      "Безопасност и дълъг жизнен цикъл",
      "Съвместимост с различни инвертори",
      "Лесен монтаж и интеграция",
      "Автоматично разпознаване",
      "Модулен дизайн",
    ],
  },
];

export default function EquipmentPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Оборудване
              </h1>
              <p className="mt-6 text-lg/8 text-white">
                Високо качествено оборудване за строителната индустрия. Техномаш БИГ АД 
                предлага модерни решения за производство на бетон, асфалт и пресяване на инертни материали.
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

      {/* Introduction Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Нашето оборудване
            </h2>
            <p className="text-lg/8 text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg/8 text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gradient-to-r from-cyan-400 to-teal-400 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Интересува ли ви употребявано оборудване?
              </h3>
              <p className="text-white/90">
                Разгледайте нашата селекция от качествени употребявани машини на отлични цени
              </p>
            </div>
            <Link
              href="/equipment/used"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-3.5 rounded-md text-base font-semibold transition-colors whitespace-nowrap"
            >
              Употребявано оборудване
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Equipment Categories Grid */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {equipmentCategories.map((category, index) => (
              <div
                key={category.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 lg:gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  {category.images && category.images.length > 0 ? (
                    <div className={`grid gap-4 ${category.images.length === 1 ? 'grid-cols-1' : category.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
                      {category.images.map((image, imgIdx) => (
                        <div key={imgIdx} className="relative aspect-square overflow-hidden rounded-xl shadow-lg group">
                          <Image
                            src={image}
                            alt={`${category.title} - снимка ${imgIdx + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="h-6 w-6 text-[#ff2e4a] flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-6">
            Заинтересовани ли сте от нашето оборудване?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Свържете се с нас за подробна консултация, оферта и техническа спецификация на 
            интересуващото ви оборудване.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
            >
              Поискайте оферта
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/equipment/used"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
            >
              Употребявано оборудване
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
