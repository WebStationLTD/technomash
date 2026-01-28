"use client";

import { useState } from "react";
import Swal from "sweetalert2";

// CF7 service form endpoint base (formId comes from props)
const getFormUrl = (formId) =>
  `https://technomash.admin-panels.com/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`;

/**
 * Contact form used on service pages.
 * Sends data to a dedicated CF7 form and includes the service name.
 */
export default function ServiceContactForm({ formId = 585, serviceName }) {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phoneNumber = e.target["phone-number"].value;
    const message = e.target.message.value;

    // CF7 required fields – must match fields in form with ID 585
    formData.append("_wpcf7_unit_tag", String(formId));
    formData.append("your-name", name);
    formData.append("your-email", email);
    formData.append("your-tel", phoneNumber);
    formData.append("your-message", message);
    // Custom hidden field to know from which service/page the request comes
    formData.append("service-name", serviceName || "");

    const reqOptions = {
      method: "POST",
      body: formData,
    };

    try {
      const req = await fetch(getFormUrl(formId), reqOptions);
      const response = await req.json();

      if (response.status === "validation_failed") {
        const fieldErrors = {};
        response.invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
      } else if (response.status === "mail_sent") {
        Swal.fire({
          icon: "success",
          title: "Успешно изпратено!",
          text: "Очаквайте отговор скоро : )",
          timer: 4000,
        });
        setErrors({});
        e.target.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Грешка при изпращане!",
          text: "Моля, опитайте отново по-късно.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Неуспешно изпращане!",
        text: "Проверете връзката с интернет и опитайте отново.",
      });
    }

    setLoading(false);
  }

  return (
    <div className="relative mt-12">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-10 pointer-events-none">
          <div className="w-12 h-12 border-4 border-gray-400 border-t-[#ff2e4a] rounded-full animate-spin"></div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`px-6 pt-10 pb-16 sm:pb-16 lg:px-8 lg:py-16 bg-gray-50 rounded-2xl ${
          loading ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl mb-6">
            Изпратете запитване за тази услуга
          </h2>
          {/* Hidden field to display current service name above the form */}
          {serviceName && (
            <p className="mb-4 text-sm text-gray-600">
              Услуга: <span className="font-semibold">{serviceName}</span>
            </p>
          )}
          <input type="hidden" name="service-name" value={serviceName || ""} />
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Име*
              </label>
              <div className="mt-2.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["your-name"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["your-name"]}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Имейл*
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["your-email"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["your-email"]}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Телефон*
              </label>
              <div className="mt-2.5">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
              {errors["your-tel"] && (
                <p className="text-red-600 text-sm mt-1">
                  {errors["your-tel"]}
                </p>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Съобщение
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-[#ff2e4a] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[#b82220] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              disabled={loading}
            >
              Изпрати запитване
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

