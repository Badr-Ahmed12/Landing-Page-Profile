import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visual Designer | Portfolio & Blog",
  description:
    "Experience in designing for web and mobile. Check out my portfolio and blog for more information.",
  keywords: ["Visual Designer", "Web Design", "Mobile Design", "Portfolio", "Blog"],
  openGraph: {
    title: "Visual Designer | Portfolio & Blog",
    description:
      "Experience in designing for web and mobile. Check out my portfolio and blog for more information.",
    images: [
      {
        url: "/og-image.png",
        alt: "Visual Designer Portfolio Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual Designer | Portfolio & Blog",
    description:
      "Experience in designing for web and mobile. Check out my portfolio and blog for more information.",
    images: [
      {
        url: "/og-image.png",
        alt: "Visual Designer Portfolio Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
