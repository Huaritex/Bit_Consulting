import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "BIT Consulting S.R.L. | Nearshore Engineering & Official IT Certification Center",
  description: "Based in Santa Cruz, Bolivia. Delivering world-class agile nearshore software engineering to North America (EST/AST sync) and authorized professional certification testing center locally.",
  keywords: [
    "BIT Consulting",
    "Nearshore Outsourcing Bolivia",
    "Staff Augmentation Santa Cruz",
    "Pearson VUE Bolivia",
    "Certiport Santa Cruz",
    "IT Certification Center Bolivia",
    "Agile Software Development",
    "Microsoft Official Courses",
  ],
  authors: [{ name: "BIT Consulting S.R.L." }],
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
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-primary/30 selection:text-slate-900">
        {children}
      </body>
    </html>
  );
}
