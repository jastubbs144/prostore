import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: "Prostore",
  description: "A modern ecommerce platfrom built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
        <Header/>
        <main className="flex-1 wrapper">
            {children}
        </main>
    </div>
  );
}
