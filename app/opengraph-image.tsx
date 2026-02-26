import { ImageResponse } from "next/og";

export const runtime = "edge";

// Image metadata
export const alt = "StudioNeo - Desarrollo Web & Soluciones Digitales";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        background:
          "linear-gradient(to bottom right, #020617, #0f172a, #1e1b4b)", // Dark blue/slate gradient
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid rgba(255,255,255,0.1)",
          borderRadius: 30,
          padding: "40px 80px",
          background: "rgba(255,255,255,0.03)",
          boxShadow: "0 0 80px rgba(25, 60, 184, 0.2)", // Glow effect with brand color
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: 70,
              height: 70,
              background: "linear-gradient(135deg, #193cb8 0%, #3b82f6 100%)",
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 24,
              boxShadow: "0 4px 20px rgba(25, 60, 184, 0.5)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: 40, height: 40 }}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>

          <h1
            style={{
              fontSize: 84,
              fontWeight: 900,
              color: "white",
              margin: 0,
              letterSpacing: "-0.03em",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            }}
          >
            Studio
            <span
              style={{
                color: "transparent",
                backgroundClip: "text",
                background: "linear-gradient(135deg, #193cb8 0%, #3b82f6 100%)",
              }}
            >
              Neo
            </span>
          </h1>
        </div>

        <div
          style={{
            height: 4,
            width: 400,
            background:
              "linear-gradient(90deg, transparent, #3b82f6, transparent)",
            margin: "10px 0 30px 0",
          }}
        />

        <div
          style={{
            fontSize: 32,
            color: "#e2e8f0",
            textAlign: "center",
            fontWeight: 500,
            letterSpacing: "0.05em",
          }}
        >
          DESARROLLO WEB • E-COMMERCE • SISTEMAS
        </div>
      </div>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can use basic fonts.
      width: 1200,
      height: 630,
    },
  );
}
