import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 38,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 96,
            height: 96,
            border: "10px solid #ff7a2f",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 16, height: 16, borderRadius: 9999, background: "#ff7a2f" }} />
        </div>
      </div>
    ),
    { ...size },
  )
}
