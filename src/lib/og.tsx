import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/business";

export const ogSize = { width: 1200, height: 630 };

export const ogContentType = "image/png";

export function ogImage({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(135deg, #03045E 0%, #023E8A 45%, #0077B6 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 32,
              background: "#ffffff",
              color: "#023E8A",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 30, fontWeight: 700 }}>
              {BUSINESS.name}
            </span>
            <span style={{ fontSize: 20, color: "#ADE8F4" }}>
              Percetakan Yasin · Bekasi
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#48CAE4",
              fontWeight: 600,
            }}
          >
            {eyebrow}
          </span>
          <span
            style={{
              marginTop: 18,
              fontSize: 68,
              lineHeight: 1.08,
              fontWeight: 700,
              maxWidth: 980,
            }}
          >
            {title}
          </span>
          <span
            style={{
              marginTop: 20,
              fontSize: 28,
              color: "#CAF0F8",
              maxWidth: 900,
            }}
          >
            {subtitle}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#CAF0F8",
          }}
        >
          <span>{BUSINESS.addressLine}</span>
          <span>Buka {BUSINESS.hoursShort}</span>
        </div>
      </div>
    ),
    {
      width: ogSize.width,
      height: ogSize.height,
    },
  );
}
