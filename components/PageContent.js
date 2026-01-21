"use client";

import { useEffect, useState } from "react";

/**
 * Component for rendering WordPress page content
 * This component loads dynamically and uses client-side code for optimization
 */
export default function PageContent({ content }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Use IntersectionObserver for "lazy loading" of content
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const contentContainer = document.getElementById("page-content");
    if (contentContainer) {
      observer.observe(contentContainer);
    }

    return () => {
      if (contentContainer) {
        observer.unobserve(contentContainer);
      }
      observer.disconnect();
    };
  }, []);

  // Optimize images in content
  useEffect(() => {
    if (isVisible) {
      // Find all images in content
      const images = document.querySelectorAll("#page-content img");

      // Add lazy loading and webp format for all images
      images.forEach((img) => {
        if (!img.hasAttribute("loading")) {
          img.setAttribute("loading", "lazy");
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute("decoding")) {
          img.setAttribute("decoding", "async");
        }
      });
    }
  }, [isVisible]);

  return (
    <article className="mx-auto max-w-8xl w-full">
      <div
        id="page-content"
        className={`wordpress-content prose max-w-none leading-relaxed ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </article>
  );
}
