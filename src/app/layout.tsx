import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/app/nextauth/NextAuthSessionProvider.js"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: "ICON APPSENIN",
description: "Next.js Aplikasi Absensi",
};

export default function RootLayout({
children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
    <html lang="en">
    <body className={inter.className}>  
      <NextAuthSessionProvider>
            {children}
      </NextAuthSessionProvider>

    </body>

    </html>
    );
    }
