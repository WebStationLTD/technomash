import Image from "next/image";
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Употребявано оборудване - Technomash",
  description:
    "Качествено употребявано оборудване от Техномаш БИГ АД на изключителни цени. Доставка, монтаж, пускане в експлоатация и гаранционно обслужване.",
};

const usedEquipment = [
  {
    id: 1,
    title: "Модулен Бетонов център \"Техномикс 60\"",
    description: "Модулен бетонов център с производителност 60 м³/час. Отлично състояние с пълна техническа документация.",
    images: [
      "/used-equipment/technomix-60-1.jpg",
      "/used-equipment/technomix-60-2.jpg",
    ],
    specifications: [
      "Производителност: 60 м³/час",
      "Модулна конструкция",
      "Автоматизирано управление",
      "Включена техническа документация",
    ],
    documents: [
      { name: "Спецификация", url: "/documents/technomix-60/Technomix_60_specification.pdf" },
      { name: "Общ план", url: "/documents/technomix-60/Technomix_60_general_plan.pdf" },
    ],
  },
  {
    id: 2,
    title: "Модулен Бетонов център \"Техномикс 100\"",
    description: "Модулен бетонов център с висока производителност от 100 м³/час. Идеален за средни и големи проекти.",
    images: [
      "/used-equipment/technomix-60-1.jpg", // Fallback - няма собствени снимки
    ],
    specifications: [
      "Производителност: 100 м³/час",
      "Надеждна конструкция",
      "Лесна експлоатация",
      "Пълна документация",
    ],
    documents: [
      { name: "Спецификация", url: "/documents/technomix-100/Technomix_100_specification.pdf" },
      { name: "Общ план", url: "/documents/technomix-100/Technomix_100_general_plan.pdf" },
    ],
  },
  {
    id: 3,
    title: "Модулен Бетонов Център \"SIMEM 100\"",
    description: "Висококачествен модулен бетонов център SIMEM с производителност 100 м³/час. Включва зареждаща група.",
    images: [
      "/used-equipment/simem-100-1.jpg",
      "/used-equipment/simem-100-2.jpg",
      "/used-equipment/simem-100-3.jpg",
      "/used-equipment/simem-100-4.jpg",
      "/used-equipment/simem-100-5.jpg",
      "/used-equipment/simem-100-6.jpg",
      "/used-equipment/simem-100-7.jpg",
    ],
    specifications: [
      "Производителност: 100 м³/час",
      "Италианско производство SIMEM",
      "Зареждаща група включена",
      "Пълни фундаментни планове",
    ],
    documents: [
      { name: "Спецификация", url: "/documents/simem-100/SIMEM_betonov_center_specification.pdf" },
      { name: "Общ план", url: "/documents/simem-100/SIMEM_general_plan.pdf" },
      { name: "Страничен изглед", url: "/documents/simem-100/SIMEM_side_plan.pdf" },
      { name: "Фундаментен план 1", url: "/documents/simem-100/SIMEM_Foundation_1.pdf" },
      { name: "Фундаментен план 2", url: "/documents/simem-100/SIMEM_Foundation_2.pdf" },
      { name: "Зареждаща група", url: "/documents/simem-100/SIMEM_zarejdashta_grupa_specification.pdf" },
    ],
  },
  {
    id: 4,
    title: "Мобилна бетоно-смесителна инсталация \"Мобилмикс 60\"",
    description: "Компактна мобилна инсталация с лесна транспортировка и бърз монтаж. Идеална за строителни обекти.",
    images: [
      "/used-equipment/mobilmix-60-1.jpg",
      "/used-equipment/mobilmix-60-2.jpg",
    ],
    specifications: [
      "Производителност: 60 м³/час",
      "Мобилна конструкция",
      "Бърз монтаж/демонтаж",
      "Компактен дизайн",
    ],
    documents: [
      { name: "Спецификация", url: "/documents/mobilmix-60/mobilmix_60_specification.pdf" },
      { name: "Общ план 1", url: "/documents/mobilmix-60/mobilmix_60_general_plan_1.pdf" },
      { name: "Общ план 2", url: "/documents/mobilmix-60/mobilmix_60_general_plan_2.pdf" },
      { name: "Общ план 3", url: "/documents/mobilmix-60/mobilmix_60_general_plan_3.pdf" },
    ],
  },
  {
    id: 5,
    title: "Асфалто-смесителна инсталация \"ТМЕ 110\"",
    description: "Асфалтосмесителна инсталация с производителност 110 т/час. Отлично състояние с пълна документация.",
    images: [
      "/used-equipment/tme-110-1.jpg",
      "/used-equipment/tme-110-2.jpg",
      "/used-equipment/tme-110-3.jpg",
    ],
    specifications: [
      "Производителност: 110 т/час",
      "Екологични решения",
      "Надеждна работа",
      "Фундаментни планове",
    ],
    documents: [
      { name: "Спецификация", url: "/documents/tme-110/asfaltova_baza_TME_110_specification.pdf" },
      { name: "Общ план", url: "/documents/tme-110/asfaltova_baza_TME_110_general_plan.pdf" },
      { name: "Фундаментен план", url: "/documents/tme-110/asfaltova_baza_TME_110_foundation_plan.pdf" },
    ],
  },
  {
    id: 6,
    title: "Модулна пресевна инсталация 300 т/час",
    description: "Модулна пресевна инсталация с висок капацитет от 300 тона на час. Прецизно сепариране на материали.",
    images: [
      "/used-equipment/presevna-300-1.jpg",
      "/used-equipment/presevna-300-2.jpg",
      "/used-equipment/presevna-300-3.jpg",
    ],
    specifications: [
      "Капацитет: 300 т/час",
      "Модулна система",
      "Прецизно сепариране",
      "Висока ефективност",
    ],
    documents: [
      { name: "Спецификация", url: "/documents/presevna-300/Presevna_modulna_instalacia_300Tona_specification.pdf" },
    ],
  },
  {
    id: 7,
    title: "ЧЕЛЕН ТОВАРАЧ FL956F - 3м³",
    description: "Челен товарач с обем на кофата 3 кубични метра. Мощен и надежден за товарене на инертни материали.",
    images: [
      "/used-equipment/loader-1.jpg",
    ],
    specifications: [
      "Обем на кофата: 3 м³",
      "Надеждна конструкция",
      "Мощен двигател",
      "Отлично състояние",
    ],
    documents: [
      { name: "Спецификация", url: "/documents/chelen-tovarach/chelen_tovarach.pdf" },
    ],
  },
  {
    id: 8,
    title: "Камион MAN",
    description: "Товарен камион MAN в много добро състояние. Подходящ за транспорт на строителни материали.",
    images: [
      "/used-equipment/man-truck-1.jpg",
      "/used-equipment/man-truck-2.jpg",
    ],
    specifications: [
      "Марка: MAN",
      "Отлично техническо състояние",
      "Голям товароносимост",
      "Надеждна работа",
    ],
    documents: [
      { name: "Спецификация", url: "/documents/man-truck/Specifikacia_MAN.pdf" },
    ],
  },
  {
    id: 9,
    title: "LAND ROVER RANGE ROVER SPORT",
    description: "Луксозен SUV в отлично състояние. Година на производство 2010, модификация HSE, обем 3.6 TDV8, 272 к.с.",
    images: [
      "/used-equipment/range-rover-1.jpg",
    ],
    specifications: [
      "Година: 10.07.2010",
      "Модификация: HSE",
      "Двигател: 3.6 TDV8, 272 к.с.",
      "Всички екстри включени",
    ],
    documents: [],
    features: [
      "Активен блокаж на задния диференциал",
      "Охладител в подлакътника",
      "Кожен салон",
      "BLUETOOTH телефонна система",
      "Затъмнени задни стъкла",
      "Зимен пакет",
      "Автоматични скорости",
      "Дървен декор Zebrano",
    ],
  },
];

export default function UsedEquipmentPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Употребявано оборудване
              </h1>
              <p className="mt-6 text-lg/8 text-white">
                Техномаш-БИГ АД предлага употребявано оборудване на изключителни цени. 
                При интерес от страна на клиентите ни, можем да предоставим ценови оферти 
                за доставка, монтаж и пускане в експлоатация.
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
              Нашите услуги
            </h2>
            <p className="text-lg/8 text-gray-600 mb-4">
              Техномаш предлага обучение на персонала, както и гаранционно и извънгаранционно 
              обслужване на съоръженията. Всички наши употребявани машини са проверени и готови 
              за експлоатация.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <svg className="h-5 w-5 text-[#ff2e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Доставка</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <svg className="h-5 w-5 text-[#ff2e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Монтаж</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <svg className="h-5 w-5 text-[#ff2e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Пускане в експлоатация</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <svg className="h-5 w-5 text-[#ff2e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Обучение на персонала</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
                <svg className="h-5 w-5 text-[#ff2e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Гаранционно обслужване</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment List */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {usedEquipment.map((equipment) => (
              <div
                key={equipment.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Images Gallery */}
                  <div className="p-4">
                    <div className={`grid gap-4 ${equipment.images.length === 1 ? 'grid-cols-1' : equipment.images.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'}`}>
                      {equipment.images.map((image, idx) => (
                        <div key={idx} className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group">
                          <Image
                            src={image}
                            alt={`${equipment.title} - снимка ${idx + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {equipment.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {equipment.description}
                      </p>

                      {/* Specifications */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Спецификации:</h4>
                        <ul className="space-y-2">
                          {equipment.specifications.map((spec, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <svg
                                className="h-5 w-5 text-[#ff2e4a] flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              <span className="text-sm text-gray-700">{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Additional Features for Range Rover */}
                      {equipment.features && equipment.features.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Екстри:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {equipment.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <svg
                                  className="h-4 w-4 text-[#ff2e4a] flex-shrink-0 mt-0.5"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <span className="text-xs text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Documents */}
                      {equipment.documents.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Документи:</h4>
                          <div className="flex flex-wrap gap-2">
                            {equipment.documents.map((doc, idx) => (
                              <a
                                key={idx}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md text-sm transition-colors"
                              >
                                <ArrowDownTrayIcon className="h-4 w-4" />
                                {doc.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto pt-4">
                      <Link
                        href="/contacts"
                        className="inline-flex items-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-6 py-3 rounded-md text-base font-semibold transition-colors"
                      >
                        Поискайте оферта
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
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
            Заинтересовани ли сте от нашето употребявано оборудване?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Свържете се с нас за подробна информация, технически спецификации и ценови оферти. 
            Нашият екип е готов да ви консултира и помогне при избора на подходящо оборудване.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
            >
              Свържете се с нас
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/equipment"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
            >
              Разгледай ново оборудване
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
