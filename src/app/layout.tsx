import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Nguyen Minh Quang - Portfolio",
  description: "Strategic Planning • Product Development • Performance Marketing",
  keywords: "performance marketing, strategic planning, product development, marketing specialist, Vietnam",
  authors: [{ name: "Nguyen Minh Quang" }],
  openGraph: {
    title: "Nguyen Minh Quang - Performance Marketing Specialist",
    description: "Strategic Planning • Product Development • Cross-Functional Marketing Expert",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyen Minh Quang - Performance Marketing Specialist",
    description: "Strategic Planning • Product Development • Cross-Functional Marketing Expert"
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
        <link rel="icon" type="image/x-icon" href="/favicon1.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="manifest" href="/favicon1.ico" />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
