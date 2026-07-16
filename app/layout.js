import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import ConditionalLayout from "@/components/ConditionalLayout";
import RegisterSW from "@/components/RegisterSW";

export const metadata = {
  title: "Shubham Gupta | Full-Stack Web Developer | TypeScript & Next.js Projects",
  description:
    "Explore Shubham Gupta's portfolio of TypeScript and Next.js projects. View details of my full-stack web development work including SaaS applications and open-source contributions.",
  alternates: {
    canonical: "https://www.shubhamgupta.online",
  },
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
  metadataBase: new URL("https://www.shubhamgupta.online"),
  openGraph: {
    title: "Shubham Gupta | Full-Stack Web Developer",
    description:
      "Portfolio of Shubham Gupta – building fast, modern full-stack apps using Next.js, TypeScript, and more.",
    url: "https://www.shubhamgupta.online",
    siteName: "Shubham Gupta Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Gupta | Full-Stack Web Developer",
    description:
      "Explore the portfolio of Shubham Gupta, showcasing projects, skills, and experience in full-stack development.",
    creator: "@i_m_shubham45",
  },
};

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased relative`}
      >
        {/* Subtle premium background glow */}
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
        
        <div className="relative z-0">
          <Analytics />
          <ConditionalLayout>
            <RegisterSW/>
            {children}
          </ConditionalLayout>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
