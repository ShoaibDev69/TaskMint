import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskMint",
  description: "A DeFi App for Task Accountability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider>
          {children}
        </ThirdwebProvider>
        <Analytics />
      </body>
    </html>
  );
}
