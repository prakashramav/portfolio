import { ImageResponse } from "next/og"

export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#090d16",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#818cf8",
          borderRadius: "8px",
          fontWeight: 800,
          border: "1.5px solid rgba(129, 140, 248, 0.5)",
          fontFamily: "sans-serif",
        }}
      >
        P
      </div>
    ),
    { ...size }
  )
}
