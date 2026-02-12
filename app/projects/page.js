import Image from "next/image";

export const metadata = {
  title: "Завършени обекти в страната - Technomash",
  description:
    "Разгледайте завършените проекти на Техномаш БИГ АД в цяла България - бетонови възли, асфалтови бази и пресевни инсталации.",
};

const projects = [
  {
    id: 1,
    title: "Добрич - фирма \"Стронко\"",
    description: "Мобилен бетонов възел, производителност 60 м³",
    image: "/projects/project-1.jpg",
  },
  {
    id: 2,
    title: "Летище Сарафово - \"Пътни строежи\" Пловдив",
    description: "Производителност 140 м³",
    image: "/projects/project-2.jpg",
  },
  {
    id: 3,
    title: "Разлог - \"Агромах\" ЕООД",
    description: "Мобилен бетонов възел - производителност 60 м³",
    image: "/projects/project-3.jpg",
  },
  {
    id: 4,
    title: "Смолян - \"ВиА Стройинженеринг\"",
    description: "Производителност 60 м³",
    image: "/projects/project-4.jpg",
  },
  {
    id: 5,
    title: "Нови Искър - \"Бат Пел\"",
    description: "Производителност 60 м³",
    image: "/projects/project-5.jpg",
  },
  {
    id: 6,
    title: "Пампорово - \"Роял Лодж\"",
    description: "Производителност 60 м³",
    image: "/projects/project-6.jpg",
  },
  {
    id: 7,
    title: "София - \"СтройИнжект\"",
    description: "Производителност 60 м³",
    image: "/projects/project-7.jpg",
  },
  {
    id: 8,
    title: "Чирпан - \"МостСтрой\"",
    description: "Производителност 60 м³",
    image: "/projects/project-8.jpg",
  },
  {
    id: 9,
    title: "Харманли - \"МостСтрой\"",
    description: "Производителност 60 м³",
    image: "/projects/project-9.jpg",
  },
  {
    id: 10,
    title: "Велинград - \"ДС Билд\"",
    description: "Производителност 60 м³",
    image: "/projects/project-10.jpg",
  },
  {
    id: 11,
    title: "Казанлък - \"Кумакс Инвест\"",
    description: "Мобилмикс 60",
    image: "/projects/project-11.jpg",
  },
  {
    id: 12,
    title: "Белово - \"Екохидро90\" ООД",
    description: "Техномикс 60",
    image: "/projects/project-12.jpg",
  },
  {
    id: 13,
    title: "Лакатник - \"ГеоТехМин\" ООД",
    description: "Мобилмикс 60",
    image: "/projects/project-13.jpg",
  },
  {
    id: 14,
    title: "Пирдоп - \"ГеоТехМин\" ООД",
    description: "Мобилмикс 60",
    image: "/projects/project-14.jpg",
  },
  {
    id: 15,
    title: "Пещера - \"Гудекс\" АД",
    description: "Техномикс 60",
    image: "/projects/project-15.jpg",
  },
  {
    id: 16,
    title: "Варна - \"Одисей\" ООД",
    description: "Техномикс 60",
    image: "/projects/project-16.jpg",
  },
  {
    id: 17,
    title: "Ямбол - \"Пътно поддържане\"",
    description: "Асфалтосмесителна инсталация",
    image: "/projects/project-17.jpg",
  },
  {
    id: 18,
    title: "Варна - \"Агрорезерв\" ООД",
    description: "Техномикс 60",
    image: "/projects/project-18.jpg",
  },
  {
    id: 19,
    title: "Варна - ЕТ \"Желев 93\"",
    description: "Техномикс 60",
    image: "/projects/project-19.jpg",
  },
  {
    id: 20,
    title: "Разлог - \"Агромах\" ЕООД",
    description: "Техномикс 100",
    image: "/projects/project-20.jpg",
  },
  {
    id: 21,
    title: "Пещера - \"Екохидро90\" ООД",
    description: "Техномикс 60",
    image: "/projects/project-21.jpg",
  },
];

const additionalProjects = [
  { name: "Ахелой", description: "Производителност 120 м³" },
  { name: "Варна", description: "Производителност 40 м³" },
  { name: "Фирма \"Ескана\"", description: "Мобилен бетонов възел, производителност 60 м³" },
  { name: "Елин Пелин", description: "Производителност 80 м³" },
  { name: "Летище София ЕТ \"ЕКСИ\"", description: "Производителност 100 м³" },
  { name: "Обзор - ЕТ \"Атлант Кръстев\"", description: "Производителност 60 м³" },
  { name: "Пловдив - \"Пътстрой пътища\"", description: "Производителност 80 м³" },
  { name: "В.Търново - \"ЕкспресСтрой\"", description: "Производителност 60 м³" },
  { name: "ПСК \"Пътища\"", description: "Мобилен бетонов възел, производителност 60 м³" },
  { name: "Русе - фирма \"Пътстрой\"", description: "Производителност 180 м³" },
  { name: "Сливен - \"Пътстрой\" Сливен", description: "Производителност 100 м³" },
  { name: "Харманли - \"Пътстрой\"", description: "Производителност 40 м³" },
  { name: "Козлодуй - \"Строймаш\"", description: "Производителност 180 м³" },
  { name: "Плевен - \"Трансмаш\"", description: "Производителност 80 м³" },
  { name: "Айтос", description: "Производителност 60 м³" },
  { name: "Шумен - \"Шуменска крепост\"", description: "Производителност 80 м³" },
  { name: "Сливен - ЕТ \"Такси Рони\"", description: "Мобилмикс 60" },
  { name: "Варна - фирма \"Ескана\" АД", description: "Мобилмикс 60" },
  { name: "София - \"Надежда Ви\" ООД", description: "Мобилмикс 60" },
  { name: "Бургас - \"Тотан\" ЕООД", description: "Техномикс 100" },
  { name: "Бургас - \"Инстрой\" ЕООД", description: "Техномикс 60" },
  { name: "Шабла - \"Станевтекс\"", description: "Техномикс 60" },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Завършени обекти в страната
              </h1>
              <p className="mt-6 text-lg/8 text-white">
                Разгледайте успешно реализираните проекти на Техномаш БИГ АД в цяла България. 
                Ноу-хауто на Техномаш и извършването на научноизследователска работа допринасят 
                положително за високите изисквания на съвременните проекти.
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
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg/8 text-gray-600">
              Техномаш инвестира главно в човешкия фактор, научното познание, страстта за 
              индивидуалност, приятелство, незабавни отговори, близки отношения с пазарните 
              потребности и очаквания на клиентите.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Projects List */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8 text-center">
              Други завършени обекти
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {additionalProjects.map((project, index) => (
                <div
                  key={index}
                  className="border-l-4 border-[#ff2e4a] bg-gray-50 p-4 hover:bg-gray-100 transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {project.name}
                  </h4>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl mb-6">
            Искате да реализирате вашия проект?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Свържете се с нас днес и нека обсъдим как можем да ви помогнем с модерни решения 
            и професионално изпълнение.
          </p>
          <a
            href="/contacts"
            className="inline-flex items-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
          >
            Свържете се с нас
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
