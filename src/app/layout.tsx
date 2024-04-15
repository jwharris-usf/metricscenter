import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VideoModal from "./components/modals/VideoModal";

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
    </html>
  );
}
