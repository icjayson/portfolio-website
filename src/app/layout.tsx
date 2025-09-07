import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Nguyen Minh Quang - Performance Marketing Specialist",
  description: "Strategic Planning • Product Development • Cross-Functional Marketing Expert",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body className={`${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
