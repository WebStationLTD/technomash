"use client";

import { Fragment, useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import { getServicesNav } from "../services/services";
import { searchContent } from "../services/search";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const [navigation, setNavigation] = useState({
    categories: [
      {
        id: "categories",
        name: "Услуги",
        featured: [],
        services: [],
      },
    ],
    pages: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/team" },
      { name: "Services", href: "/services" },
      { name: "Blog", href: "/blog" },
      { name: "Shop", href: "/contact" },
      { name: "Contacts", href: "/contact" },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const services = await getServicesNav();

        if (!services || !Array.isArray(services) || services.length === 0) {
          console.warn("No services found from API");
          return;
        }

        const featured = services.slice(0, 2);
        const remainingServices = services.slice(2);

        setNavigation((prev) => ({
          ...prev,
          categories: [
            {
              id: "categories",
              name: "Услуги",
              featured: featured.map((service) => ({
                name: service.title.rendered,
                href: `/services/${service.slug}`,
                imageSrc:
                  service.yoast_head_json?.og_image?.[0]?.url ||
                  "/placeholder.webp",
                imageAlt: service.title.rendered,
              })),
              services: remainingServices.map((service) => ({
                id: service.id,
                name: service.title.rendered,
                href: `/services/${service.slug}`,
              })),
            },
          ],
        }));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching navigation data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery.length < 3) {
      setSearchResults([]);
      return;
    }

    console.log(searchQuery);

    setIsSearching(true);
    setShowResults(true);

    const delayDebounceFn = setTimeout(async () => {
      const results = await searchContent(searchQuery);
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white sticky top-0 block w-full z-50">
      {/* Top Header Bar - Full Width with Black Background */}
      <div className="hidden lg:block bg-black">
        <div className="w-full px-5">
          <div className="flex items-center justify-between h-10 text-sm">
            {/* Left - Contact Info */}
            <div className="flex items-center gap-6 text-white">
              <span>Office: 123-456-789</span>
              <span>Factory: 123-456-789</span>
            </div>

            {/* Right - Social Icons and Search */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white hover:text-[#db2925] transition-colors"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#db2925] transition-colors"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#db2925] transition-colors"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#db2925] transition-colors"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <MagnifyingGlassIcon className="h-5 w-5 text-white hover:text-[#db2925] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
              <div className="ml-4">
                <Image
                  src="/next-level-logo.png"
                  alt=""
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
            {/* Links */}
            <TabGroup className="mt-2">
              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <Link
                      href={page.href}
                      className="-m-2 block p-2 font-medium text-gray-900"
                      onClick={() => setOpen(false)}
                      prefetch={true}
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-xl font-bold text-center text-gray-900 hover:text-[#129160] data-headlessui-state-selected:border-[#129160] data-headlessui-state-selected:text-[#129160]"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              {/* Loader */}
              {loading && (
                <div className="flex justify-center py-10">
                  <div className="w-12 h-12 border-4 border-gray-500 border-t-[#129160] rounded-full animate-spin"></div>
                </div>
              )}
              {!loading && (
                <TabPanels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <TabPanel
                      key={category.name}
                      className="space-y-6 px-4 pt-6 pb-8"
                    >
                      <ul className="flex flex-col space-y-4">
                        {[...category.featured, ...category.services].map(
                          (service) => (
                            <li
                              key={service.id || service.name}
                              className="flow-root"
                            >
                              <Link
                                href={service.href}
                                className="-m-2 block p-2 font-medium text-gray-900"
                                onClick={() => setOpen(false)}
                                prefetch={true}
                              >
                                {service.name}
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    </TabPanel>
                  ))}
                </TabPanels>
              )}
            </TabGroup>
          </DialogPanel>
        </div>
      </Dialog>
      <header className="relative bg-white shadow-sm">
        <nav aria-label="Top" className="w-full px-5">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left (Mobile & Desktop) */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/technomash-logo.png"
                  alt="Technomash Logo"
                  width={280}
                  height={93}
                  className="h-20 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Main Navigation - Center */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navigation.pages.map((page) => (
                <div key={page.name} className="relative group">
                  <Link
                    href={page.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1"
                    prefetch={true}
                  >
                    {page.name}
                    {page.name === "About Us" || page.name === "Blog" ? (
                      <ChevronDownIcon className="h-4 w-4" />
                    ) : null}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Side - Mobile Menu, Cart and Get a Quote Button */}
            <div className="flex items-center gap-4">
              {/* Shopping Cart Icon */}
              <button className="relative p-2 text-gray-700 hover:text-[#db2925] hidden lg:block transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#db2925] text-white text-xs flex items-center justify-center">
                  0
                </span>
              </button>

              {/* Get a Quote Button */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center gap-2 bg-[#db2925] hover:bg-[#b82220] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors"
              >
                Get a Quote
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

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-700 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
