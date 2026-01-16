import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshay Gupta | Portfolio",
  description: "Portfolio of Lakshay Gupta - Software Developer, Designer, and Electronics Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased tracking-tight">
        {children}
      </body>
    </html>
  );
}
