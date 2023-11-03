import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/header";
import BackToTop from "@/components/back-to-top";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Zachary DeParle | Personal", // Updated with your name
  authors: [
    { name: "Zachary DeParle", url: "https://www.linkedin.com/in/zachary-deparle/" }, // Updated with your LinkedIn profile URL
  ],
  description: "Zachary DeParle's personal portfolio website", // Updated with your description
  openGraph: {
    title: "Zachary DeParle | Personal", // Updated with your name
    description: "Zachary DeParle's personal portfolio website", // Updated with your description
    url: "https://www.your-website-url.com", // Updated with your website URL
    images: [
      {
        url: "/photo.jpeg", // Update with your photo URL
        alt: "Zachary DeParle | Personal", // Updated with your name
        width: 640,
        height: 800,
      },
    ],
  },
  alternates: {
    canonical: "https://www.your-website-url.com", // Updated with your website URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main className="container lg:px-28">{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
