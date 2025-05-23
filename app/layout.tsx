import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
// import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import ModalProvider from "@/providers/modal-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Collaborative Whiteboard | Real-time Whiteboard App",
  description:
    "Brainstorm, collaborate, and visualize ideas with our real-time collaborative whiteboard. Built with Next.js and Convex.",
  keywords: [
    "Collaborative Whiteboard",
    "Online Whiteboard",
    "Whiteboard App",
    "Real-time Collaboration",
    "Next.js Whiteboard",
    "Convex",
    "Web Drawing Tool",
    "Team Brainstorming",
  ],
  authors: [
    { name: "Prabhat Kumar", url: "https://github.com/Prabhat2912" },

    {
      name: "Shivang Jha",
      url: "https://github.com/ShivaangJha",
    },
    {
      name: "Kirti Sachdeva",
      url: "https://github.com/123Kirti",
    },
    {
      name: "Apurva Agarwal",
      url: "https://github.com/arg-appu",
    },
    {
      name: "Ayush Aryan Singh",
      url: "https://github.com/AyushAryanSingh",
    },
  ],
  creator: "Binary",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Collaborative Whiteboard | Real-time Whiteboard App",
    description:
      "Draw, brainstorm, and collaborate seamlessly with our intuitive whiteboard app powered by Convex and Next.js.",
    url: "https://collabrative-whiteboard.vercel.app/",
    siteName: "Collaborative Whiteboard",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Collaborative Whiteboard App Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Collaborative Whiteboard",
    description:
      "Collaborate in real-time with our Next.js powered whiteboard app. Built for teams and creators.",
    images: ["/og-image.png"],
    creator: "@real_prabhat1",
  },
  appleWebApp: {
    title: "Collaborative Whiteboard",
    statusBarStyle: "black-translucent",
    capable: true,

    startupImage: [
      "/og-image.png",
      {
        url: "/og-image.png",
        media: "(device-width: 375px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },

  applicationName: "Collaborative Whiteboard",

  metadataBase: new URL("https://collabrative-whiteboard.vercel.app/"),
};

export const viewport: Viewport = {
  themeColor: "black",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          <Toaster richColors theme="system" />
          <ModalProvider />
          {children}
          <SpeedInsights />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
