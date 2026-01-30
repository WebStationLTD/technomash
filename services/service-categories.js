import { fetchAPI } from "./api";
import { cache } from "react";

/**
 * Get all service categories
 * @returns {Promise<Array>} - List of service categories
 */
export const getServiceCategories = cache(async () => {
  return await fetchAPI("service_category?per_page=100", {
    next: { revalidate: 60 },
  });
});

/**
 * Get a single service category by slug
 * @param {string} slug - Category slug
 * @returns {Promise<Object|null>} - Category data
 */
export const getServiceCategoryBySlug = cache(async (slug) => {
  return await fetchAPI(
    `service_category?slug=${slug}&_fields=id,slug,name,description`
  );
});

/**
 * Get services by category ID
 * @param {number} categoryId - Category ID
 * @returns {Promise<Array>} - List of services in category
 */
export const getServicesByCategoryId = cache(async (categoryId) => {
  return await fetchAPI(
    `services?service_category=${categoryId}&_fields=id,slug,title,service_category&per_page=100`,
    {
      next: { revalidate: 60 },
    }
  );
});
