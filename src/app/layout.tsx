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

export const metadata = {
  title: "SSV Healthcare | Medical Equipment & Diagnostics",
  description:
    "SSV Healthcare is a trusted distributor of advanced healthcare, diagnostic, and laboratory equipment from leading global brands.",

  keywords: [
    "SSV Healthcare",
    "Medical Equipment",
    "Diagnostic Equipment",
    "Laboratory Equipment",
    "Healthcare Solutions",
    "Abbott",
    "Sysmex",
    "Bio-Rad",
    "Radiometer",
    "Nihon Kohden",
  ],

  icons: {
    icon: "/favicon.ico",
  },
    verification: {
    google: "DyavMt3t3_damtbZM_KF6GdE0xLKEKBZZNaGOP54Lbw",
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
