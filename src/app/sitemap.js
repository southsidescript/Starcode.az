export default function sitemap() {
    return [
      {
        url: "https://www.starcode.az",
        lastModified: new Date().toISOString(),
        changeFrequency: "daily",
        priority: 1.0,
      },
      {
        url: "https://www.starcode.az/order",
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.8,
      },
    ];
  }
  