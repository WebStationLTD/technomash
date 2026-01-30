"use client";

import { useState, useEffect } from "react";
import useSubscribe from "../hooks/useSubscribe";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const navigation = {
  company: [
    { name: "Home", href: "/" },
    { name: "Our factories", href: "#" },
    { name: "Mission and strategy", href: "#" },
    { name: "Charitable actions", href: "#" },
  ],
  production: [
    { name: "Technology", href: "#" },
    { name: "Products", href: "#" },
    { name: "Quality", href: "#" },
    { name: "Sales geography", href: "#" },
  ],
  contact: [
    { name: "Addresses of factories", href: "#" },
    { name: "Dealers", href: "#" },
    { name: "Trading houses", href: "#" },
    { name: "Brand shops", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/example",
      icon: FaFacebookF,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/example",
      icon: FaTwitter,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/example",
      icon: FaYoutube,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/example",
      icon: FaInstagram,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
};

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

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
              className="h-12 lg:h-20 w-auto"
            />
          </Link>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              Careers
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
              className="inline-flex items-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors"
            >
              Запитване
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

        {/* Main Footer Content - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Column 1 - Company */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Production */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              Production
            </h3>
            <ul className="space-y-4">
              {navigation.production.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact us */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              Contact us
            </h3>
            <ul className="space-y-4">
              {navigation.contact.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Shop with us */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-6">
              Shop with us
            </h3>
            {/* Payment Icons */}
            <div className="flex flex-wrap gap-2 mb-4">
              <div className="h-8 px-3 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700">
                  PayPal
                </span>
              </div>
              <div className="h-8 px-3 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700">
                  Stripe
                </span>
              </div>
              <div className="h-8 px-3 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700">
                  Visa
                </span>
              </div>
              <div className="h-8 px-3 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700">MC</span>
              </div>
              <div className="h-8 px-3 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700">
                  Amex
                </span>
              </div>
              <div className="h-8 px-3 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-700">
                  Discover
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Manufacturer – Factory, Industrial, Manufacturing WordPress Theme
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © {year} Technomash. Всички права запазени.{" "}
              <span className="inline-block">
                Powered by{" "}
                <a
                  href="https://webstation.bg/profesionalna-seo-optimizatsia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-[#ff2e4a] transition-colors"
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
                className="text-gray-600 hover:text-[#ff2e4a] transition-colors"
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
