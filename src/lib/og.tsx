import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const PAPER = "#EEEBE3";
const INK = "#15131A";
const INK_3 = "#7A7384";
const VIOLET_DEEP = "#3C1278";
const VIOLET = "#6D28D9";
const ACID = "#C9F24A";
const RULE = "#CFC9BC";

/**
 * Poppins (OFL, vendored under src/assets/fonts) is read from disk rather than
 * fetched from Google Fonts: the Fonts API no longer serves raw TrueType, and
 * a build-time network dependency would make OG generation flaky.
 */
export async function loadPoppins(file: string) {
  return readFile(join(process.cwd(), "src/assets/fonts", file));
}

export async function renderOgImage() {
  const heading = "Atik Mahbub";
  const title = "Full-Stack Engineer";
  const footer = "Scalable products · AI & LLM integrations · Web3 platforms";

  const [bold, medium] = await Promise.all([
    loadPoppins("Poppins-Bold.ttf"),
    loadPoppins("Poppins-Medium.ttf"),
  ]);

  const fonts = [
    { name: "Poppins", data: bold, weight: 700 as const, style: "normal" as const },
    { name: "Poppins", data: medium, weight: 500 as const, style: "normal" as const },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: PAPER,
          padding: "72px 80px",
          fontFamily: "Poppins, sans-serif",
          position: "relative",
        }}
      >
        {/* Violet corner wash */}
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -180,
            width: 640,
            height: 640,
            borderRadius: 640,
            background: `linear-gradient(135deg, ${VIOLET} 0%, ${VIOLET_DEEP} 100%)`,
            opacity: 0.12,
            display: "flex",
          }}
        />

        {/* Top row: monogram + availability */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: `linear-gradient(135deg, ${VIOLET_DEEP} 0%, #1E0940 100%)`,
              color: "#F3EEFB",
              fontSize: 28,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            AM
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              fontWeight: 500,
              color: INK_3,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 10,
                background: ACID,
                display: "flex",
              }}
            />
            atikmahbub.com
          </div>
        </div>

        {/* Name + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 700,
              color: INK,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            {heading}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: 500,
              color: VIOLET_DEEP,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
        </div>

        {/* Footer rule + stack */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", height: 2, background: RULE, width: "100%" }} />
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 500,
              color: INK_3,
            }}
          >
            {footer}
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
