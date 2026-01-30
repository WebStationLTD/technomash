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
import { getNavigationMenu } from "../services/navigation";
import { searchContent } from "../services/search";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [hoveredCategoryId, setHoveredCategoryId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);
  const [serviceCategories, setServiceCategories] = useState([]);
  const [navigation, setNavigation] = useState({
    pages: [
      { name: "Начало", href: "/" },
      {
        name: "За нас",
        href: "/about-us",
        hasDropdown: true,
        children: [
          {
            name: "История",
            href: "/about-us/history",
            hasSubmenu: true,
            submenuItems: [
              {
                name: "Мобилни бетонови възли",
                href: "/about-us/history/mobile-concrete-plants",
              },
              {
                name: "Модулни бетонови възли",
                href: "/about-us/history/modular-concrete-plants",
              },
              {
                name: "Пресевни и мобилни инсталации",
                href: "/about-us/history/screening-mobile-installations",
              },
              {
                name: "Асфалто-смесителни инсталации",
                href: "/about-us/history/asphalt-mixing-plants",
              },
              {
                name: "Зареждащи групи",
                href: "/about-us/history/feeding-groups",
              },
              {
                name: "Контролни кабини",
                href: "/about-us/history/control-cabins",
              },
              {
                name: "Генератори за електричество",
                href: "/about-us/history/generators",
              },
              {
                name: "Електронни кантари",
                href: "/about-us/history/electronic-scales",
              },
            ],
          },
        ],
      },
      {
        name: "Услуги",
        href: "#",
        hasDropdown: true,
        isDynamic: true,  // Flag to indicate this menu is loaded dynamically
      },
      { name: "Екип", href: "/team" },
      { name: "Контакти", href: "/contacts" },
    ],
  });

  // Fetch dynamic service categories and services
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const menuData = await getNavigationMenu();
        setServiceCategories(menuData.categories || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching navigation data:", error);
        setLoading(false);
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
              <span>Тел.: 0457 640 16</span>
              <span>GSM: +359 884 777 595, +359 888 0011 99</span>
            </div>

            {/* Right - Social Icons and Search */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-white hover:text-[#ff2e4a] transition-colors"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ff2e4a] transition-colors"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ff2e4a] transition-colors"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#ff2e4a] transition-colors"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <MagnifyingGlassIcon className="h-5 w-5 text-white hover:text-[#ff2e4a] cursor-pointer transition-colors" />
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
                  src="/technomash-logo.svg"
                  alt="Technomash Logo"
                  width={345}
                  height={80}
                  className="h-8 w-auto"
                />
              </div>
            </div>
            {/* Links */}
            <TabGroup className="mt-2">
              <div className="space-y-4 border-t border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    {page.hasDropdown && (page.children?.length > 0 || page.name === "Услуги") ? (
                      <div>
                        <div className="-m-2 block p-2 font-semibold text-gray-900 text-base">
                          {page.name}
                        </div>
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                          {page.isDynamic ? (
                            // Dynamic services menu with categories
                            serviceCategories.length > 0 ? (
                              serviceCategories.map((category) => (
                                <div key={category.id}>
                                  <div className="-m-2 block p-2 text-sm text-gray-900 font-semibold">
                                    {category.name}
                                  </div>
                                  {category.services && category.services.length > 0 && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                                      {category.services.map((service) => (
                                        <Link
                                          key={service.id}
                                          href={service.href}
                                          className="-m-2 block p-2 text-xs text-gray-500 hover:text-gray-700 hover:font-medium transition-colors"
                                          onClick={() => setOpen(false)}
                                          prefetch={true}
                                        >
                                          {service.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))
                            ) : loading ? (
                              <div className="px-2 py-2 text-gray-500 text-sm">Зареждане...</div>
                            ) : (
                              <div className="px-2 py-2 text-gray-500 text-sm">Няма налични услуги</div>
                            )
                          ) : page.children && page.children.length > 0 ? (
                            page.children.map((child) => (
                              <div key={child.name}>
                                <Link
                                  href={child.href}
                                  className="-m-2 block p-2 text-sm text-gray-600 hover:text-gray-900 hover:font-medium transition-colors"
                                  onClick={() => setOpen(false)}
                                  prefetch={true}
                                >
                                  {child.name}
                                </Link>
                                {child.hasSubmenu && child.submenuItems && child.submenuItems.length > 0 && (
                                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                                    {child.submenuItems.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        href={subItem.href}
                                        className="-m-2 block p-2 text-xs text-gray-500 hover:text-gray-700 hover:font-medium transition-colors"
                                        onClick={() => setOpen(false)}
                                        prefetch={true}
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))
                            ) : (
                              <div className="px-2 py-2 text-gray-500 text-sm">Няма налични опции</div>
                            )}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={page.href}
                        className="-m-2 block p-2 font-semibold text-gray-900 text-base hover:text-[#ff2e4a] transition-colors"
                        onClick={() => setOpen(false)}
                        prefetch={true}
                      >
                        {page.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </TabGroup>
          </DialogPanel>
        </div>
      </Dialog>
      <header className="relative bg-white shadow-sm">
        <nav aria-label="Top" className="w-full px-5">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo - Left (Mobile & Desktop) */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/technomash-logo.svg"
                  alt="Technomash Logo"
                  width={345}
                  height={80}
                  className="h-12 lg:h-20 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Main Navigation - Center */}
            <div className="hidden lg:flex lg:items-center lg:gap-8">
              {navigation.pages.map((page) => (
                <div key={page.name} className="relative group">
                  {page.hasDropdown && (page.children?.length > 0 || page.name === "Услуги") ? (
                    <>
                      <button
                        type="button"
                        className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1"
                      >
                        {page.name}
                        <ChevronDownIcon className="h-4 w-4" />
                      </button>
                      <div className="absolute left-1/2 z-10 mt-0 flex w-screen max-w-max -translate-x-1/2 px-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="w-64 flex-auto rounded-lg bg-white text-sm leading-6 shadow-xl ring-1 ring-gray-900/5">
                          <div className="p-2">
                            {page.isDynamic ? (
                              // Dynamic services menu with categories
                              serviceCategories.length > 0 ? (
                                serviceCategories.map((category) => {
                                  if (category.services && category.services.length > 0) {
                                    return (
                                      <div
                                        key={category.id}
                                        className="relative"
                                        onMouseEnter={() => setHoveredCategoryId(category.id)}
                                        onMouseLeave={() => setHoveredCategoryId(null)}
                                      >
                                        <button
                                          type="button"
                                          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                        >
                                          <span className="flex-1">{category.name}</span>
                                          <ChevronDownIcon className="h-4 w-4 ml-2 flex-shrink-0" />
                                        </button>
                                        {hoveredCategoryId === category.id && (
                                          <div className="absolute left-full top-0 ml-0 w-64 transition-all duration-200 z-20 rounded-lg bg-white shadow-xl ring-1 ring-gray-900/5">
                                            <div className="p-2">
                                              {category.services.map((service) => (
                                                <Link
                                                  key={service.id}
                                                  href={service.href}
                                                  className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                                  prefetch={true}
                                                >
                                                  {service.name}
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  }

                                  return (
                                    <Link
                                      key={category.id}
                                      href={category.href}
                                      className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                      prefetch={true}
                                    >
                                      {category.name}
                                    </Link>
                                  );
                                })
                              ) : loading ? (
                                <div className="px-3 py-2 text-gray-500 text-sm">Зареждане...</div>
                              ) : (
                                <div className="px-3 py-2 text-gray-500 text-sm">Няма налични услуги</div>
                              )
                            ) : page.children && page.children.length > 0 ? (
                              page.children.map((child) => {
                                if (
                                  child.hasSubmenu &&
                                  child.submenuItems &&
                                  child.submenuItems.length > 0
                                ) {
                                  return (
                                    <div
                                      key={child.name}
                                      className="relative"
                                      onMouseEnter={() => setHistoryOpen(true)}
                                      onMouseLeave={() => setHistoryOpen(false)}
                                    >
                                      <button
                                        type="button"
                                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                      >
                                        <span className="flex-1">{child.name}</span>
                                        <ChevronDownIcon className="h-4 w-4 ml-2 flex-shrink-0" />
                                      </button>
                                      {historyOpen && (
                                        <div className="absolute left-full top-0 ml-0 w-64 transition-all duration-200 z-20 rounded-lg bg-white shadow-xl ring-1 ring-gray-900/5">
                                          <div className="p-2">
                                            {child.submenuItems.map((subItem) => (
                                              <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                                prefetch={true}
                                              >
                                                {subItem.name}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  );
                                }

                                return (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                    prefetch={true}
                                  >
                                    {child.name}
                                  </Link>
                                );
                              })
                            ) : (
                              <div className="px-3 py-2 text-gray-500 text-sm">Няма налични опции</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={page.href}
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center gap-1"
                      prefetch={true}
                    >
                      {page.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side - Mobile Menu and CTA Button */}
            <div className="flex items-center gap-4">
              {/* CTA Button */}
              <Link
                href="/contacts"
                className="hidden lg:inline-flex items-center gap-2 bg-[#ff2e4a] hover:bg-[#b82220] text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors"
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
