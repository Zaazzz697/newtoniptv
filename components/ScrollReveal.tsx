"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTORS = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset every reveal element on the incoming page so it starts hidden
    document.querySelectorAll(SELECTORS).forEach((el) => {
      el.classList.remove("is-visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    // Small delay so Next.js finishes painting the new page's DOM
    const timer = setTimeout(() => {
      document.querySelectorAll(SELECTORS).forEach((el) => observer.observe(el));
    }, 60);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]); // re-runs on every navigation

  return null;
}
