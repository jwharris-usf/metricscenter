import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VideoModal from "./components/modals/VideoModal";
import { GoogleAnalytics } from '@next/third-parties/google'

const RedHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "METRICS",
  description: "Mental Health Evaluation, Training, Research, and Innovation Center for Schools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={RedHatDisplay.className}>
        <Header/>
        <VideoModal />
        {children}
        <Footer/>
      </body>
      {/* https://ospaarmann.medium.com/google-analytics-4-ga4-in-next-js-14-and-react-with-event-tracking-2ceabb00c59a */}
      <GoogleAnalytics gaId="G-3HKQL6E0DP" />
    </html>
  );
}
