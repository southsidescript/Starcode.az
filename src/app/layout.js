import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "StarCode Edu",
  description: "Изучайте IT, программирование и веб-разработку с профессиональными наставниками в Starcode. ",
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "It Courses  ",
      "name": "StarCode Edu",
      "url": "https://www.starcode.az",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 Fikret AmirovBaku",
        "addressLocality": "Baku",
        "addressCountry": "AZ"
      },
      "telephone": "+994 50 832 22 44"
    }),
  },
  icons: {
    icon: "/icons/starcode.png",
    shortcut: "/icons/starcode.png",
    apple: "/icons/starcode.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
