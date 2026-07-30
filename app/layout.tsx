import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Tairanos | AI Automation & Business Solutions",
  description:
    "Tairanos helps businesses automate customer support, websites, AI chatbots and business workflows using modern artificial intelligence.",
    icons: {
  icon: "/tairanos-logo.png",
},
  keywords: [
    "Tairanos",
    "AI Automation",
    "AI Automation Platform",
    "AI Chatbot",
    "Business Automation",
    "Customer Support Automation",
    "AI Solutions for Businesses",
  ],
  authors: [{ name: "Tairanos" }],
  creator: "Tairanos",
  publisher: "Tairanos",
  metadataBase: new URL("https://tairanos.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tairanos - AI Automation Platform for Businesses",
    description:
      "Automate customer support, websites, AI chatbots and business workflows with Tairanos.",
    url: "https://tairanos.vercel.app",
    siteName: "Tairanos",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "wBxDxHBillNbAvLxOarXgwh6ZiJRapGp6wKQ243vYg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
