import type { Metadata } from "next";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from '@vercel/speed-insights/next';

import { roboto } from "@/app/font";
import Header from "@/components/layout/header";
import SideBar from "@/components/layout/side-bar";
import Hello from "@/components/hello";
import { ProgressBar } from "@/components/progress-bar";
import { WebVitals } from "@/components/web-vitals";
import config from "@/config";

import "@/app/globals.css";

const {
  title,
  description,
  author,
  keywords,
  googleAnalyticId,
  googleTagManagerId,
  openGraph,
  about,
  avatar,
  status,
  navigationLinks,
} = config;

const { firstName, lastName, middleName, preferredName } = about;

export const metadata: Metadata = {
  title: title,
  description: description,
  authors: [{ name: author }],
  creator: author,
  keywords: keywords,
  openGraph: {
    url: openGraph.url,
    type: "website",
    siteName: openGraph.siteName,
    title: openGraph.title,
    description: openGraph.description,
    images: openGraph.images,
  },
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },
};

function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.className}`}>
      <WebVitals gaId={googleAnalyticId} />
      <body>
        <ProgressBar className="fixed top-0 h-1 bg-yellow-500">
          <Hello />
          <main>
            <SideBar
              avatar={avatar}
              firstName={firstName}
              lastName={lastName}
              middleName={middleName}
              preferredName={preferredName}
              status={status}
            />
            <div className="main-content">
              <Header navigationLinks={navigationLinks} />
              {children}
            </div>
          </main>
        </ProgressBar>
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId={googleAnalyticId} />
      <GoogleTagManager gtmId={googleTagManagerId} />
    </html>
  );
}

export default RootLayout;
