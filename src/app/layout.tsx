import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Nguyen Minh Quang - Product Growth Portfolio",
  description: "Product Growth • Product Development • User Intelligence",
  keywords: "product growth, product development, user intelligence, performance marketing, strategic planning, Vietnam",
  authors: [{ name: "Nguyen Minh Quang" }],
  openGraph: {
    title: "Nguyen Minh Quang - Product Growth Portfolio",
    description: "Product Growth • Product Development • User Intelligence",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Minh Quang - Product Growth Portfolio",
    description: "Product Growth • Product Development • User Intelligence"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
