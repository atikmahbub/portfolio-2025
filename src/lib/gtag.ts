import { GA_MEASUREMENT_ID } from "@/constants/constants";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = GA_MEASUREMENT_ID;

export const pageview = (url: string) => {
  if (!GA_ID || typeof window === "undefined") {
    return;
  }

  window.gtag?.("config", GA_ID, {
    page_path: url,
  });
};

export {};
