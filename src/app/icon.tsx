import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#181818",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f5f5f5",
          borderRadius: 8,
          border: "1.5px solid rgba(255, 255, 255, 0.18)",
          fontWeight: 800,
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.5px",
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
