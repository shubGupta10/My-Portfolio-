import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/sections/Footer";
import Header from "@/components/Header";
import ConditionalLayout from "@/components/ConditionalLayout";

export const metadata = {
  title: "Shubham Gupta | Full-Stack Web Developer | TypeScript & Next.js Projects",
  description: "Explore Shubham Gupta's portfolio of TypeScript and Next.js projects. View details of my full-stack web development work including SaaS applications and open-source contributions.",
  keywords: [
    "Shubham Gupta",
    "Full-Stack Developer",
    "Next.js Portfolio",
    "MERN Stack",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Tailwind CSS",
    "React Developer",
  ],
  authors: [{ name: "Shubham Gupta" }],
  creator: "Shubham Gupta",
  metadataBase: new URL("https://shubgupta.vercel.app"),
  openGraph: {
    title: "Shubham Gupta | Full-Stack Web Developer",
    description:
      "Portfolio of Shubham Gupta – building fast, modern full-stack apps using Next.js, TypeScript, and more.",
    url: "https://shubgupta.vercel.app",
    siteName: "Shubham Gupta Portfolio",
    images: [
      {
        url: "https://shubgupta.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shubham Gupta Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Gupta | Full-Stack Web Developer",
    description:
      "Explore the portfolio of Shubham Gupta, showcasing projects, skills, and experience in full-stack development.",
    images: ["https://shubgupta.vercel.app/og-image.png"],
    creator: "@i_m_shubham45",
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weights: ["300", "400", "500", "600", "700"],
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={spaceGrotesk.className}>
        <Analytics />
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <Toaster />
      </body>
    </html>
  );
}
