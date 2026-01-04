"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_MEASUREMENT_ID } from "@/constants/constants";
import { pageview } from "@/lib/gtag";

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams?.toString() ?? "";

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    const url = searchParamsString
      ? `${pathname}?${searchParamsString}`
      : pathname;
    pageview(url);
  }, [pathname, searchParamsString]);

  return null;
}
