import HeroSection from "../components/hero";
import { WebVitals } from "./web-vitals";
import dynamic from "next/dynamic";

// Dynamic loading of components with lazy loading
const Incentives = dynamic(() => import("../components/incentives"), {
  ssr: true,
});
const Equipment = dynamic(() => import("../components/equipment"), {
  ssr: true,
});
const CTA = dynamic(() => import("../components/cta"), { ssr: true });
const Lastestposts = dynamic(() => import("../components/latestposts"), {
  ssr: true,
});

// Commented out unused components - keeping for future use
// const Team = dynamic(() => import("../components/team"), { ssr: true });
// const Clients = dynamic(() => import("../components/clients"), { ssr: true });
// const Newsletter = dynamic(() => import("../components/newsletter"), {
//   ssr: true,
// });
// const Testimonial = dynamic(() => import("../components/testimonial"), {
//   ssr: true,
// });

// ISR revalidation every hour
export const revalidate = 3600;

// Metadata for home page
export const metadata = {
  title: "MFCT - Manufacturer & Exporter Of Fabulous Fabrics & Made Ups",
  description:
    "In the list of importers – 45 countries: Germany, Spain, Italy, Poland, Portugal, Turkey, South Korea, Japan, etc.",
  keywords: [
    "fabrics",
    "manufacturer",
    "exporter",
    "textile",
    "weaving",
    "processing",
    "printing",
    "stitching",
  ],
  openGraph: {
    title: "MFCT - Manufacturer & Exporter Of Fabulous Fabrics & Made Ups",
    description: "In the list of importers – 45 countries: Germany, Spain, Italy, Poland, Portugal, Turkey, South Korea, Japan, etc.",
    images: [
      {
        url: "/hero-image-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "MFCT",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MFCT - Manufacturer & Exporter Of Fabulous Fabrics & Made Ups",
    description: "In the list of importers – 45 countries",
    images: ["/hero-image-desktop.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <WebVitals />
      <HeroSection />
      <Incentives />
      <Equipment />
      <CTA />
      <Lastestposts />
    </>
  );
}
