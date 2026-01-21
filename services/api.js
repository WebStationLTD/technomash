const API_BASE_URL = "https://technomash.admin-panels.com/wp-json/wp/v2";
import { cache } from "react";

/**
 * Universal fetch function
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Fetch options (optional)
 * @returns {Promise<any>} - JSON response
 */
export const fetchAPI = cache(async (endpoint, options = {}) => {
  try {
    const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!res.ok) {
      // For 404 errors, return null silently (endpoint doesn't exist)
      if (res.status === 404) {
        return null;
      }
      // For other errors, throw to be caught
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }

    const text = await res.text();

    try {
      // Try to parse response as JSON
      return JSON.parse(text);
    } catch (parseError) {
      // If we get HTML instead of JSON, throw clearer error
      if (text.includes("<br />") || text.includes("<html")) {
        throw new Error(
          `WordPress върна HTML вместо JSON: ${text.substring(0, 100)}...`
        );
      }
      throw new Error(
        `Failed to parse API response as JSON: ${parseError.message}`
      );
    }
  } catch (error) {
    // Only log non-404 errors
    if (!error.message?.includes("404")) {
      console.error("Fetch API Error:", error);
    }
    return null;
  }
});
