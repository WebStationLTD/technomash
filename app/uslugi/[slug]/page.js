import { getPageById } from "../../../services/pages";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { notFound } from "next/navigation";
import ServiceContactForm from "../../../components/ServiceContactForm";

// Dynamic loading of content component
const PageContent = dynamic(() => import("../../../components/PageContent"), {
  ssr: true,
  loading: () => (
    <div className="animate-pulse h-96 bg-gray-100 rounded-md"></div>
  ),
});

// ISR revalidation every hour
export const revalidate = 3600;

// Service page IDs mapping (for pages that are also services)
const servicePagesMap = {
  "izgrazhdane-fotovoltaichni-tsentrali": 417,
  "izgrazhdane-fotovoltaiichni-tsentrali": 417, // Alternative spelling
  "izgrazhdane-na-poststantsii": 408,
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageId = servicePagesMap[slug];

  // Try to get service from WordPress REST API (CPT: service)
  try {
    const response = await fetch(
      `https://technomash.admin-panels.com/wp-json/wp/v2/services?slug=${slug}&_fields=id,slug,yoast_head_json,title,content`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (response.ok) {
      const services = await response.json();
      if (services.length > 0) {
        const service = services[0];
        const meta = service.yoast_head_json || {};
        const ogImage =
          meta.og_image && meta.og_image.length > 0 ? meta.og_image[0].url : "";

        return {
          title: meta.title || service.title?.rendered || "Услуга - Technomash",
          description: meta.description || "Услуга - Technomash",
          keywords: meta.keywords || ["услуга", "technomash"],
          openGraph: {
            title: meta.og_title || service.title?.rendered || "Услуга - Technomash",
            description: meta.og_description || "Услуга - Technomash",
            images: ogImage
              ? [
                  {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: service.title?.rendered || "Услуга",
                  },
                ]
              : [],
            type: "article",
          },
          alternates: {
            canonical: meta.canonical || `/uslugi/${slug}`,
          },
        };
      }
    }
  } catch (error) {
    console.error("Error fetching service:", error);
  }

  // Fallback to page by ID if service not found
  if (pageId) {
    const page = await getPageById(pageId);
    if (page) {
      const meta = page.yoast_head_json || {};
      return {
        title: meta.title || page.title?.rendered || "Услуга - Technomash",
        description: meta.description || "Услуга - Technomash",
      };
    }
  }

  return {
    title: "Услуга - Technomash",
  };
}

export default async function ServicePage({ params }) {
  try {
    const { slug } = await params;
    let page = null;

    // Try to get service from WordPress REST API (CPT: service)
    try {
      const response = await fetch(
        `https://technomash.admin-panels.com/wp-json/wp/v2/services?slug=${slug}&_fields=id,slug,yoast_head_json,date,title,content`,
        {
          next: { revalidate: 3600 },
        }
      );
      if (response.ok) {
        const services = await response.json();
        if (services.length > 0) {
          page = services[0];
        }
      }
    } catch (error) {
      console.error("Error fetching service:", error);
    }

    // Fallback to page by ID if service not found
    if (!page) {
      const pageId = servicePagesMap[slug];
      if (pageId) {
        page = await getPageById(pageId);
      }
    }

    if (!page) {
      notFound();
    }

    const meta = page.yoast_head_json || {};
    const ogImage =
      meta.og_image && meta.og_image.length > 0 ? meta.og_image[0].url : "";

    // Prepare structured data for Schema.org
    const pageSchemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title?.rendered || "Услуга",
      description:
        page.content?.rendered
          ?.replace(/<[^>]+>/g, "")
          .substring(0, 200) + "..." || "",
      url: meta.canonical || `https://technomash-bg.com/uslugi/${slug}`,
      image: ogImage || "",
      provider: {
        "@type": "Organization",
        name: "Technomash",
        url: "https://technomash-bg.com",
      },
    };

    return (
      <>
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageSchemaData),
          }}
        />

        <div className="bg-white">
          <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                {page.title?.rendered || "Услуга"}
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
                    <stop stopColor="#db2925" />
                    <stop offset={1} stopColor="#db2925" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white py-12 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-12">
            <Suspense
              fallback={
                <div className="animate-pulse h-96 bg-gray-100 rounded-md"></div>
              }
            >
              <PageContent content={page.content?.rendered || ""} />
            </Suspense>
            <ServiceContactForm
              formId={585}
              serviceName={page.title?.rendered || slug}
            />
          </div>
        </div>
      </>
    );
  } catch (error) {
    notFound();
  }
}
