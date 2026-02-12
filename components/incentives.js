"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getNavigationMenu } from "../services/navigation";

export default function Incentives() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories and services from WordPress API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const menuData = await getNavigationMenu();
        setCategories(menuData.categories || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching navigation data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get the first 3 categories for the 3 cards
  const category1 = categories[0] || {
    name: "ВЪЗОБНОВЯЕМА ЕНЕРГИЯ",
    services: [],
  };
  const category2 = categories[1] || {
    name: "ЕНЕРГИЙНА ИНФРАСТРУКТУРА",
    services: [],
  };
  const category3 = categories[2] || {
    name: "ИНФРАСТРУКТУРА И СТРОИТЕЛСТВО",
    services: [],
  };
  return (
    <>
      {/* Our Capabilities Section */}
      <div className="bg-[#f4f4f4] py-24 pt-32 sm:pt-36 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-0 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                За нас
              </p>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                ТЕХНОМАШ БИГ АД
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Компанията започва своята дейност в областта на тежкото
                машиностроене, като прецизността и качеството бързо я
                утвърждават на пазара и тя се превръща в една от водещите
                индустриални групи в България. „Техномаш“ е реализирала над 50
                индустриални проекта в страната и чужбина.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                От 2004 г. компанията е специализирана в изграждането на проекти
                за възобновяема енергия. Като главен изпълнител, ТЕХНОМАШ БИГ АД
                извършва инженеринг, транспорт на оборудване, монтаж, тестване,
                въвеждане в експлоатация и сервизно обслужване. Компанията
                разполага с екип от отлични професионалисти, доказали се в
                необичайни и извънредни ситуации.
              </p>
              <div className="pt-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#db2925] hover:bg-[#b82220] text-white px-8 py-3.5 rounded-md text-base font-semibold transition-colors"
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
                alt="Modern building architecture"
                src="/hero-image-desktop.jpg"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative red dot */}
              <div className="absolute bottom-8 right-8 w-4 h-4 bg-[#ff2e4a] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-0 lg:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 - Renewable Energy */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-96">
                <Image
                  src="/hero-image-mobile.jpg"
                  alt="Holiday Extras"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-6">{category1.name}</h3>
                  {loading ? (
                    <div className="flex justify-center py-4">
                      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <ul className="text-sm space-y-2 text-left w-full max-w-xs">
                      {category1.services &&
                        category1.services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={service.href}
                              className="hover:text-[#db2925] transition-colors flex items-start"
                              prefetch={true}
                            >
                              <span className="mr-2">•</span>
                              <span>{service.name}</span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Service Card 2 - Energy Infrastructure */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-96">
                <Image
                  src="/menu-hero-image.jpg"
                  alt="Jumpsuits & Boiler Suits"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-6">{category2.name}</h3>
                  {loading ? (
                    <div className="flex justify-center py-4">
                      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <ul className="text-sm space-y-2 text-left w-full max-w-xs">
                      {category2.services &&
                        category2.services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={service.href}
                              className="hover:text-[#db2925] transition-colors flex items-start"
                              prefetch={true}
                            >
                              <span className="mr-2">•</span>
                              <span>{service.name}</span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* Service Card 3 - Infrastructure & Construction */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-96">
                <Image
                  src="/hero-image-desktop.jpg"
                  alt="Summer Tops"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                  <h3 className="text-2xl font-bold mb-6">{category3.name}</h3>
                  {loading ? (
                    <div className="flex justify-center py-4">
                      <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <ul className="text-sm space-y-2 text-left w-full max-w-xs">
                      {category3.services &&
                        category3.services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={service.href}
                              className="hover:text-[#db2925] transition-colors flex items-start"
                              prefetch={true}
                            >
                              <span className="mr-2">•</span>
                              <span>{service.name}</span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
