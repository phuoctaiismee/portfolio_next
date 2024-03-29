import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import LocalFont from "next/font/local";
import AppProvider from "@/app/provider";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const calSans = LocalFont({
    src: "../../public/fonts/CalSans-SemiBold.ttf",
    variable: "--font-calsans",
});
export const metadata: Metadata = {
    title: {
        default: 'Dariel',
        template: '%s | Dariel'

    },
    description: 'This is portfolio dariel developer',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={[inter.variable, calSans.variable].join(" ")} suppressHydrationWarning>
        <body className={`bg-white dark:bg-black text-white dark:text-black
      ${process.env.NODE_ENV === "development" ? "debug - screens" : undefined}
      `}>
        <AppProvider>
            {children}
        </AppProvider>
        </body>
        </html>
    )
}
