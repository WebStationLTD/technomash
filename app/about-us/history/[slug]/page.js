import { getPageById } from "../../../../services/pages";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { notFound } from "next/navigation";

// Dynamic loading of content component
const PageContent = dynamic(() => import("../../../../components/PageContent"), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse h-96 bg-gray-100 rounded-md"></div>
  ),
});

// ISR revalidation every hour
export const revalidate = 3600;

// History page IDs mapping
const historyPagesMap = {
  "mobile-concrete-plants": 561,
  "modular-concrete-plants": 563,
  "screening-mobile-installations": 565,
  "asphalt-mixing-plants": 567,
  "feeding-groups": 569,
  "control-cabins": 571,
  "generators": 573,
  "electronic-scales": 575,
};

const historyPagesTitles = {
  "mobile-concrete-plants": "Мобилни бетонови възли",
  "modular-concrete-plants": "Модулни бетонови възли",
  "screening-mobile-installations": "Пресевни и мобилни инсталации",
  "asphalt-mixing-plants": "Асфалто-смесителни инсталации",
  "feeding-groups": "Зареждащи групи",
  "control-cabins": "Контролни кабини",
  "generators": "Генератори за електричество",
  "electronic-scales": "Електронни кантари",
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageId = historyPagesMap[slug];

  if (!pageId) {
    return {
      title: "Страница не намерена - Technomash",
    };
  }

  const page = await getPageById(pageId);

  if (!page) {
    return {
      title: "Страница не намерена - Technomash",
    };
  }

  const meta = page.yoast_head_json || {};
  const ogImage =
    meta.og_image && meta.og_image.length > 0 ? meta.og_image[0].url : "";

  return {
    title: meta.title || page.title?.rendered || historyPagesTitles[slug] || "История - Technomash",
    description: meta.description || "История на Technomash",
    keywords: meta.keywords || ["история", "technomash"],
    openGraph: {
      title: meta.og_title || page.title?.rendered || historyPagesTitles[slug] || "История - Technomash",
      description: meta.og_description || "История на Technomash",
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: page.title?.rendered || historyPagesTitles[slug] || "История",
            },
          ]
        : [],
      type: "article",
    },
    alternates: {
      canonical: meta.canonical || `/about-us/history/${slug}`,
    },
  };
}

export default async function HistoryDetailPage({ params }) {
  try {
    const { slug } = await params;
    const pageId = historyPagesMap[slug];

    if (!pageId) {
      notFound();
    }

    const page = await getPageById(pageId);

    if (!page) {
      notFound();
    }

    const meta = page.yoast_head_json || {};
    const ogImage =
      meta.og_image && meta.og_image.length > 0 ? meta.og_image[0].url : "";

    // Prepare structured data for Schema.org
    const pageSchemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      name: page.title?.rendered || historyPagesTitles[slug] || "История",
      description:
        page.content?.rendered
          ?.replace(/<[^>]+>/g, "")
          .substring(0, 200) + "..." || "",
      url: meta.canonical || `https://technomash-bg.com/about-us/history/${slug}`,
      image: ogImage || "",
    };

    return (
      <>
        <Script
          id="history-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageSchemaData),
          }}
        />

        <div className="bg-white">
          <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                {page.title?.rendered || historyPagesTitles[slug] || "История"}
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
            <Suspense
              fallback={
                <div className="animate-pulse h-96 bg-gray-100 rounded-md"></div>
              }
            >
              <PageContent content={page.content?.rendered || ""} />
            </Suspense>
          </div>
        </div>
      </>
    );
  } catch (error) {
    notFound();
  }
}
