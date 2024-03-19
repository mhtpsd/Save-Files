import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import toast, { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaveFiles",
  description: "Access your files from anywhere",
  icons: {
    icon: "../public/images/savefiles.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
          <Header />
          {children}
          <Analytics />
          <Toaster position="bottom-center"/>
        </ThemeProvider>
        
      </body>
      </html>
    </ClerkProvider>
    
  );
}
