export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://arjun-prakash.vercel.app/sitemap.xml",
  };
}
