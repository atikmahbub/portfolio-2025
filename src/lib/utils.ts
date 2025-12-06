import { createElement, Fragment } from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function preventOrphans(text: string) {
  const normalized = text.trim()
  if (!normalized) return normalized

  const words = normalized.split(/\s+/)
  if (words.length <= 2) {
    return normalized
  }

  const lastTwo = words.slice(-2).join(" ")
  const firstPart = words.slice(0, -2).join(" ")

  return createElement(
    Fragment,
    null,
    `${firstPart} `,
    createElement("span", { style: { whiteSpace: "nowrap" } }, lastTwo),
  )
}
