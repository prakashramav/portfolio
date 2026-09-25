import { ImageResponse } from "next/og"

export const alt = "Prakash Ramavath | Full-Stack & AI Systems Developer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#030712",
          backgroundImage: "radial-gradient(circle at 25px 25px, #1f2937 2%, transparent 0%), radial-gradient(circle at 75px 75px, #111827 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#f9fafb",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              padding: "8px 16px",
              backgroundColor: "rgba(99, 102, 241, 0.15)",
              border: "1px solid rgba(99, 102, 241, 0.4)",
              borderRadius: "9999px",
              color: "#818cf8",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            AVAILABLE FOR SWE INTERNSHIPS
          </div>
          <div
            style={{
              color: "#9ca3af",
              fontSize: "18px",
            }}
          >
            • 3rd-Year CS Student
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              display: "flex",
            }}
          >
            Prakash Ramavath
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Full-Stack Developer building production AI platforms, AST-aware code intelligence, and multi-tenant RAG systems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
            borderTop: "1px solid #1f2937",
            paddingTop: "32px",
          }}
        >
          {["Next.js", "FastAPI", "Python", "pgvector", "Tree-sitter", "Docker"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 18px",
                backgroundColor: "#111827",
                border: "1px solid #374151",
                borderRadius: "10px",
                color: "#d1d5db",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
