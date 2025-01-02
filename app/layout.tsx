import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impact Lab | निशुलक कंप्यूटर प्रशिक्षण केंद्र - कुशल युवा कार्यक्रम",
  description: "इंपैक्ट लैब एक प्रमुख प्रशिक्षण केंद्र है जो 'कुशल युवा कार्यक्रम' के तहत निशुल्क कंप्यूटर प्रशिक्षण प्रदान करता है। यह व्यक्तियों को आवश्यक डिजिटल कौशल से सशक्त बनाता है, ताकि वे अपने करियर के अवसरों को बढ़ा सकें और उभरती टेक इंडस्ट्री में योगदान दे सकें।",
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
        <Analytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
