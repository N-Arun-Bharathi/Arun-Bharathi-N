import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 88,
          background: "#121212",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f5f5f5",
          borderRadius: 40,
          border: "4px solid rgba(255, 255, 255, 0.15)",
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-2px",
        }}
      >
        <span style={{ color: "#38bdf8" }}>A</span>
        <span style={{ color: "#ffffff" }}>B</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
