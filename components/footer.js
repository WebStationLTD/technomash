"use client";

import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { getNavigationMenu } from "../services/navigation";

const navigation = {
  company: [
    { name: "Начало", href: "/" },
    { name: "За нас", href: "/team" },
    { name: "Блог", href: "/blog" },
    { name: "Контакти", href: "/contacts" },
  ],
  contact: [
    { name: "+359 884 777 595", href: "tel:+359884777595" },
    {
      name: "office@technomash-bg.com",
      href: "mailto:office@technomash-bg.com",
    },
    { name: "8900 Нова Загора, П.К. 30", href: "#" },
    { name: "Понеделник - Петък: 09:00 - 18:00", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/technomash",
      icon: FaFacebookF,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/technomash",
      icon: FaTwitter,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/technomash",
      icon: FaYoutube,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/technomash",
      icon: FaInstagram,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
};

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [categories, setCategories] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);

  // Fetch categories and services dynamically
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingServices(true);
        const menuData = await getNavigationMenu();
        setCategories(menuData.categories || []);
        setLoadingServices(false);
      } catch (error) {
        console.error("Error fetching navigation data:", error);
        setLoadingServices(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentYear = new Date().getFullYear();
      if (currentYear !== year) {
        setYear(currentYear);
      }
    }, 1000 * 60 * 60);

    return () => clearInterval(interval);
  }, [year]);

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-0 lg:px-0 py-16">
        {/* Top Section - Logo and Action Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-gray-200">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/technomash-logo.svg"
              alt="Technomash Logo"
              width={345}
              height={80}
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-[#db2925] hover:bg-[#b82220] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              Кариери
              <svg
                className="h-4 w-4"
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
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 bg-[#db2925] hover:bg-[#b82220] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              Поискайте оферта
              <svg
                className="h-4 w-4"
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

        {/* Main Footer Content - 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 py-12">
          {/* Column 1 - Company */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              Компания
            </h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-[#db2925] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 2-4 - Service Categories (Dynamic) */}
          {loadingServices ? (
            <div className="lg:col-span-3 flex justify-center items-center py-8">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-[#db2925] rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {categories.slice(0, 3).map((category, index) => (
                <div key={category.id || index}>
                  <h3 className="text-base font-semibold text-gray-900 mb-6">
                    {category.name}
                  </h3>
                  <ul className="space-y-4">
                    {category.services.map((service) => (
                      <li key={service.id}>
                        <Link
                          href={service.href}
                          className="text-sm text-gray-600 hover:text-[#db2925] transition-colors"
                          prefetch={true}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}

          {/* Column 5 - Contact & Info */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              Контакти
            </h3>
            <ul className="space-y-4 mb-6">
              {navigation.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-[#db2925] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-600 leading-relaxed">
                Технология, Иновации и Качество от Техномаш БИГ АД
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {year} Техномаш БИГ АД. Всички права запазени.{" "}
            <span className="inline-block">
              Изработено от{" "}
              <a
                href="https://webstation.bg/profesionalna-seo-optimizatsia/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-[#db2925] transition-colors"
              >
                WebStation™
              </a>
            </span>
          </p>
          <div className="flex gap-4">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.target}
                rel={item.rel}
                className="text-gray-600 hover:text-[#db2925] transition-colors"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
