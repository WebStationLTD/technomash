import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "../../components/contactForm";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Контакти - Technomash",
    description:
      "Свържете се с нас. Намерете нашите контактни данни, адрес и форма за контакт.",
  };
}

export default async function ContactsPage() {
  // Contact information - hardcoded as requested
  const contactInfo = {
    address: "София, България",
    phone: "+359 2 123 4567",
    email: "office@technomash-bg.com",
    officeHours: "Понеделник - Петък: 09:00 - 18:00",
  };

  return (
    <div className="relative isolate bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-10/10 py-0 sm:px-6 sm:py-0 lg:px-0">
          <div className="relative isolate overflow-hidden px-6 py-12 text-center shadow-2xl sm:px-12">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Свържете се с нас
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-gray-300">
              Имате въпроси или нужда от помощ? Не се колебайте да се свържете с нас. Нашият екип е готов да ви помогне.
            </p>
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

      {/* Contact Information and Form */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-24 lg:px-8">
        {/* Contact Information */}
        <div className="lg:pr-8">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Контактна информация
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            Нашият офис е разположен в София и сме на разположение за всички ваши запитвания и нужди.
          </p>

          <dl className="mt-10 space-y-4 text-base text-gray-600">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <BuildingOffice2Icon className="h-7 w-6 text-gray-400" />
              </dt>
              <dd>
                <p className="font-semibold text-gray-900">Адрес</p>
                <p className="mt-1">{contactInfo.address}</p>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <PhoneIcon className="h-7 w-6 text-gray-400" />
              </dt>
              <dd>
                <p className="font-semibold text-gray-900">Телефон</p>
                <p className="mt-1">
                  <Link
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {contactInfo.phone}
                  </Link>
                </p>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <EnvelopeIcon className="h-7 w-6 text-gray-400" />
              </dt>
              <dd>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="mt-1">
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="hover:text-gray-900 transition-colors"
                  >
                    {contactInfo.email}
                  </Link>
                </p>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <MapPinIcon className="h-7 w-6 text-gray-400" />
              </dt>
              <dd>
                <p className="font-semibold text-gray-900">Работно време</p>
                <p className="mt-1">{contactInfo.officeHours}</p>
              </dd>
            </div>
          </dl>

          {/* Map placeholder */}
          <div className="mt-10 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
            <div className="flex h-full items-center justify-center text-gray-500">
              <div className="text-center">
                <MapPinIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm">Карта ще бъде добавена тук</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:pl-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
