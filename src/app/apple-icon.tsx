import { ImageResponse } from "next/og";

import { loadPoppins } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — same monogram as icon.svg, rendered without transparency
// so iOS home-screen tiles keep the violet ground.
export default async function AppleIcon() {
  const bold = await loadPoppins("Poppins-Bold.ttf");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "linear-gradient(135deg, #3C1278 0%, #1E0940 100%)",
          color: "#F3EEFB",
          fontFamily: "Poppins",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: -3,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 26,
            left: 28,
            width: 56,
            height: 8,
            borderRadius: 4,
            background: "#C9F24A",
            display: "flex",
          }}
        />
        AM
        <div
          style={{
            position: "absolute",
            right: 26,
            bottom: 26,
            width: 16,
            height: 16,
            borderRadius: 16,
            background: "#C9F24A",
            display: "flex",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Poppins", data: bold, weight: 700 as const, style: "normal" as const },
      ],
    }
  );
}
