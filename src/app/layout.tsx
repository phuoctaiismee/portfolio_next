import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LocalFont from "@next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});
export const metadata: Metadata = {
  title: 'Dariel Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
      }`}>{children}</body>
    </html>
  )
}
