import AIChat from "./components/AIChat";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "./components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tairanos.com"),

  title: {
    default: "Tairanos | AI Automation & Business Solutions",
    template: "%s | Tairanos",
  },

  description:
    "Tairanos helps businesses automate customer support, websites, AI chatbots and business workflows using modern artificial intelligence.",

  keywords: [
    "Tairanos",
    "AI Automation",
    "AI Automation Platform",
    "AI Chatbot",
    "Business Automation",
    "Customer Support Automation",
    "AI Solutions",
    "Website Development",
    "SEO",
    "Digital Marketing",
  ],

  authors: [{ name: "Tairanos" }],
  creator: "Tairanos",
  publisher: "Tairanos",

  alternates: {
    canonical: "https://www.tairanos.com",
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
    title: "Tairanos | AI Automation & Business Solutions",
    description:
      "Automate customer support, websites, AI chatbots and business workflows with Tairanos.",

    url: "https://www.tairanos.com",
    siteName: "Tairanos",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/tairanos-logo.png",
        width: 1200,
        height: 630,
        alt: "Tairanos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tairanos | AI Automation & Business Solutions",
    description:
      "Automate customer support, websites, AI chatbots and business workflows with Tairanos.",

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
        {/* <AIChat /> */}

        {children}
      </body>
    </html>
  );
}