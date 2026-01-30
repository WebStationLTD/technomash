import { fetchAPI } from "./api";
import { cache } from "react";

/**
 * Get navigation menu with categories and services
 * @returns {Promise<Object>} - Navigation structure with categories and their services
 */
export const getNavigationMenu = cache(async () => {
  try {
    // Fetch categories and services in parallel
    const [categories, services] = await Promise.all([
      fetchAPI("service_category?per_page=100&_fields=id,slug,name", {
        next: { revalidate: 60 },
      }),
      fetchAPI(
        "services?per_page=100&_fields=id,slug,title,service_category",
        {
          next: { revalidate: 60 },
        }
      ),
    ]);

    if (!categories || !services) {
      return { categories: [], servicesMap: {} };
    }

    // Create a map of services grouped by category ID
    const servicesMap = {};
    services.forEach((service) => {
      if (service.service_category && service.service_category.length > 0) {
        const categoryId = service.service_category[0];
        if (!servicesMap[categoryId]) {
          servicesMap[categoryId] = [];
        }
        servicesMap[categoryId].push({
          id: service.id,
          name: service.title.rendered,
          slug: service.slug,
          // Decode URL-encoded slug for href
          href: `/services/${decodeURIComponent(service.slug)}`,
        });
      }
    });

    // Format categories
    const formattedCategories = categories.map((category) => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      // Decode URL-encoded slug for href
      href: `/service-category/${decodeURIComponent(category.slug)}`,
      services: servicesMap[category.id] || [],
    }));

    return {
      categories: formattedCategories,
      servicesMap,
    };
  } catch (error) {
    console.error("Error fetching navigation menu:", error);
    return { categories: [], servicesMap: {} };
  }
});
