"use client";

import { useEffect, useState } from "react";
import { getLatestPosts } from "../services/posts";
import Link from "next/link";
import Image from "next/image";

export default function LatestPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  // Fetch latests posts from WordPress API on component mount
  useEffect(() => {
    setLoading(true);
    const fetchLatestPosts = async () => {
      const postsData = await getLatestPosts();
      setPosts(postsData);
      setLoading(false);
    };

    fetchLatestPosts();
  }, []);

  // Placeholder news data for demo
  const newsItems = [
    {
      id: 1,
      title: "New Fabric opening",
      image: "/menu-hero-image.jpg",
    },
    {
      id: 2,
      title: "Applied DNA Sciences, WestPoint Home Sign",
      image: "/hero-image-desktop.jpg",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-0 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              News & Media Center
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              We are always open for any kind of cooperation and looking for new
              promising projects
            </p>
            <div className="pt-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#db2925] hover:text-[#b82220] text-base font-semibold transition-colors"
              >
                VIEW ALL NEWS
              </Link>
            </div>
          </div>

          {/* Right Side - News Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {newsItems.map((item) => (
                  <div key={item.id} className="flex-shrink-0 w-full">
                    <div className="relative h-80 overflow-hidden group cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-8 bg-[#db2925]"
                      : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Office Contacts Section */}
        <div className="mt-24 sm:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Contact Info */}
          <div className="bg-gray-50 p-12 rounded-lg space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Office Contacts
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              The textile, textile product, and apparel manufacturing industries
              include establishments that process...
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    350 Flatbush ave New York
                  </p>
                  <p className="text-sm text-gray-600">NY 10018 USA.</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">123-456-789</p>
                  <p className="text-sm text-gray-600">234-432-456</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="relative h-96 lg:h-full min-h-[400px]">
            <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
              {/* Dotted USA Map SVG */}
              <svg
                className="w-full h-full p-8"
                viewBox="0 0 800 500"
                fill="none"
              >
                {/* Simplified dotted map of USA */}
                <g opacity="0.3">
                  {Array.from({ length: 50 }).map((_, i) => {
                    const x = 100 + (i % 20) * 30;
                    const y = 100 + Math.floor(i / 20) * 30;
                    return <circle key={i} cx={x} cy={y} r="2" fill="#000" />;
                  })}
                </g>
                {/* Location markers */}
                <circle cx="500" cy="150" r="8" fill="#db2925" />
                <circle cx="300" cy="200" r="8" fill="#db2925" />
                <circle cx="550" cy="180" r="8" fill="#db2925" />
                <circle cx="600" cy="250" r="8" fill="#db2925" />
                <circle cx="450" cy="280" r="8" fill="#db2925" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
