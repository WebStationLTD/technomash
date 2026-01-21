import Image from "next/image";
import Link from "next/link";
import { getMembers } from "../../services/members";

export const metadata = {
  title: "Екип - Technomash",
  description:
    "Запознайте се с нашия професионален екип от експерти, които работят за успеха на вашите проекти.",
};

export default async function Team() {
  let members = [];
  
  try {
    members = await getMembers();
  } catch (error) {
    console.error("Error fetching team members:", error);
  }

  // Example team members if none found
  const exampleMembers = [
    {
      id: 1,
      name: "Иван Петров",
      position: "Главен изпълнителен директор",
      description: "Иван Петров е с над 20 години опит в строителната индустрия. Той ръководи екипа ни с видение и страст към иновациите.",
      profilepicture: "/placeholder.webp",
      slug: "ivan-petrov",
    },
    {
      id: 2,
      name: "Мария Георгиева",
      position: "Технически директор",
      description: "Мария Георгиева е експерт в областта на производствените процеси и технологичните решения. Тя осигурява високо качество на всички проекти.",
      profilepicture: "/placeholder.webp",
      slug: "maria-georgieva",
    },
    {
      id: 3,
      name: "Петър Стоянов",
      position: "Директор по продажбите",
      description: "Петър Стоянов има дългогодишен опит в управлението на клиентски отношения и развитието на бизнеса. Той е ключовата фигура в нашия успех.",
      profilepicture: "/placeholder.webp",
      slug: "petar-stoyanov",
    },
  ];

  const displayMembers = members.length > 0 ? members : exampleMembers;

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
            <div className="mx-auto max-w-2xl text-center">
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
                  <stop stopColor="#db2925" />
                  <stop offset={1} stopColor="#db2925" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5">
          <div className="w-full xl:max-w-2xl xl:col-span-2 order-last xl:order-first">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              За екипа
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Нашият екип се състои от опитни професионалисти, които споделят обща страст към иновациите и качеството. Работим заедно, за да осигурим най-добрите решения за нашите клиенти.
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Всеки член на екипа принася уникални умения и опит, което прави Technomash лидер в индустрията. Ние вярваме в сътрудничеството, професионализма и постоянния стремеж към усъвършенстване.
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Присъединете се към нас в пътуването към успеха!
            </p>
          </div>
          <ul role="list" className="divide-y divide-gray-200 xl:col-span-3">
            {displayMembers.map((member) => (
              <li
                key={member.id}
                className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row"
              >
                <Link href={`/team/${member.slug}`} prefetch={true}>
                  <Image
                    width={250}
                    height={375}
                    alt={member.name || "Член на екипа"}
                    src={member.profilepicture || "/placeholder.webp"}
                    className="rounded-2xl object-cover"
                  />
                </Link>
                <div className="max-w-xl flex-auto">
                  <Link href={`/team/${member.slug}`} prefetch={true}>
                    <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
                      {member.name || "Член на екипа"}
                    </h3>
                    <p className="text-base/7 text-gray-600">
                      {member.position || ""}
                    </p>
                    <div
                      className="mt-6 text-base/7 text-gray-600 prose"
                      dangerouslySetInnerHTML={{
                        __html:
                          member.description && member.description.length > 100
                            ? `${member.description.slice(0, 200)}...`
                            : member.description || "",
                      }}
                    />
                  </Link>
                  {member.linkedin && member.linkedin.url && (
                    <ul role="list" className="mt-6 flex gap-x-6">
                      <li>
                        <Link
                          href={member.linkedin.url}
                          target={member.linkedin.target || "_blank"}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            className="size-5"
                          >
                            <path
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
