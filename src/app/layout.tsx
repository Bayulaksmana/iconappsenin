import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthLayout from "./(auth)/layout";
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
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            {children}
          </div>
        </body>
      </html>
    );
    }
