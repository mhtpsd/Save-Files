import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dropdox",
  description: "Access your files from anywhere",
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

          <Toaster position="bottom-center"/>
        </ThemeProvider>
        
      </body>
      </html>
    </ClerkProvider>
    
  );
}
