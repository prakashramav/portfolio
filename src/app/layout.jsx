import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Prakash Ramavath | Full-Stack & AI Systems Developer",
  description: "Portfolio of Prakash Ramavath — 3rd-year CS student and Full-Stack Developer specializing in production AI systems, hybrid RAG architectures, and scalable web platforms. Seeking SWE Internships.",
  keywords: [
    "Prakash Ramavath",
    "Software Engineering Intern",
    "Full Stack Developer",
    "Next.js",
    "FastAPI",
    "Python",
    "RAG",
    "pgvector",
    "AI Systems",
    "Tree-sitter",
    "Developer Portfolio"
  ],
  authors: [{ name: "Prakash Ramavath", url: "https://github.com/prakashramav" }],
  creator: "Prakash Ramavath",
  metadataBase: new URL("https://prakashramavath.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prakashramavath.vercel.app",
    title: "Prakash Ramavath | Full-Stack & AI Systems Developer",
    description: "CS student & Full-Stack Developer building production-grade GenAI platforms and high-throughput web systems. Seeking SWE internships.",
    siteName: "Prakash Ramavath Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakash Ramavath | Full-Stack & AI Systems Developer",
    description: "CS student building production AI architectures and full-stack platforms. Seeking SWE internships.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
