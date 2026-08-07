import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import AOSInit from "./components/AOSInit";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  /*
   * Main website URL
   * All relative metadata URLs will use this domain.
   */
  metadataBase: new URL("https://www.tairanos.com"),

  title: {
    default: "Tairanos | AI Automation & Digital Business Solutions",
    template: "%s | Tairanos",
  },

  description:
    "Tairanos provides AI automation, AI chatbots, website development, SEO, digital marketing, content services and custom digital solutions for businesses worldwide.",

  keywords: [
    "Tairanos",
    "AI Automation",
    "AI Chatbot",
    "Business Automation",
    "AI Solutions",
    "Website Development",
    "Web Development",
    "SEO Services",
    "Digital Marketing",
    "AI Voice Agent",
    "Content Writing",
    "Virtual Assistant",
    "Data Entry",
    "Bengali English Translation",
    "Graphic Design",
  ],

  authors: [
    {
      name: "Tairanos",
    },
  ],

  creator: "Tairanos",
  publisher: "Tairanos",
  applicationName: "Tairanos",
  category: "technology",

  /*
   * IMPORTANT:
   * "/" resolves to https://www.tairanos.com/
   */
  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/tairanos-logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/tairanos-logo.png",
    apple: "/tairanos-logo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tairanos.com/",
    siteName: "Tairanos",

    title: "Tairanos | AI Automation & Digital Business Solutions",

    description:
      "AI automation, chatbots, websites, SEO, digital marketing and custom digital solutions for businesses worldwide.",

    images: [
      {
        url: "/tairanos-logo.png",
        width: 1200,
        height: 630,
        alt: "Tairanos - AI Automation & Digital Business Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Tairanos | AI Automation & Digital Business Solutions",

    description:
      "AI automation, websites, chatbots, SEO and digital business solutions for clients worldwide.",

    images: ["/tairanos-logo.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "mICMa6LiRsyMojS3JYC7vTIslHNBosp3LUIksaSFJVM",
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
      <body className="min-h-full flex flex-col">
        <AOSInit />

        <ScrollProgress />

        <BackToTop />

        <WhatsAppButton />

        {children}
      </body>
    </html>
  );
}