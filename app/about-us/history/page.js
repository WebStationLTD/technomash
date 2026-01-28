import { getPageById } from "../../../services/pages";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import Link from "next/link";

// Dynamic loading of content component
const PageContent = dynamic(() => import("../../../components/PageContent"), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse h-96 bg-gray-100 rounded-md"></div>
  ),
});

// ISR revalidation every hour
export const revalidate = 3600;

// History page IDs mapping
const historyPages = [
  { id: 561, slug: "mobile-concrete-plants", title: "Мобилни бетонови възли" },
  { id: 563, slug: "modular-concrete-plants", title: "Модулни бетонови възли" },
  { id: 565, slug: "screening-mobile-installations", title: "Пресевни и мобилни инсталации" },
  { id: 567, slug: "asphalt-mixing-plants", title: "Асфалто-смесителни инсталации" },
  { id: 569, slug: "feeding-groups", title: "Зареждащи групи" },
  { id: 571, slug: "control-cabins", title: "Контролни кабини" },
  { id: 573, slug: "generators", title: "Генератори за електричество" },
  { id: 575, slug: "electronic-scales", title: "Електронни кантари" },
];

export async function generateMetadata() {
  return {
    title: "История - Technomash",
    description: "История на Technomash",
  };
}

export default async function HistoryPage() {
  try {
    // Fetch all history pages
    const pagesData = await Promise.all(
      historyPages.map(async (pageInfo) => {
        try {
          const page = await getPageById(pageInfo.id);
          return {
            ...pageInfo,
            page: page || null,
          };
        } catch (error) {
          console.error(`Error fetching page ${pageInfo.id}:`, error);
          return {
            ...pageInfo,
            page: null,
          };
        }
      })
    );

    return (
      <>
        <div className="bg-white">
          <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                История
              </h1>
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
        <div className="bg-white py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {pagesData.map((item) => (
                <Link
                  key={item.id}
                  href={`/about-us/history/${item.slug}`}
                  className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  prefetch={true}
                >
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#ff2e4a] transition-colors">
                    {item.title}
                  </h3>
                  {item.page && (
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                      {item.page.content?.rendered
                        ?.replace(/<[^>]+>/g, "")
                        .substring(0, 100) || ""}
                      ...
                    </p>
                  )}
                  <div className="mt-4 flex items-center text-sm font-medium text-[#ff2e4a] group-hover:text-[#0d7045]">
                    Научете повече
                    <svg
                      className="ml-2 h-4 w-4"
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
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    return (
      <p className="text-gray-600 text-center mt-10">
        Неуспешно зареждане на страниците!
      </p>
    );
  }
}
