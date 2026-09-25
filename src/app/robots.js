export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://prakashramavath.vercel.app/sitemap.xml",
  };
}
