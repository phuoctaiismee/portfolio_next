'use client'
import {ThemeProvider} from 'next-themes'

export default function AppProvider({
                                        children, // will be a page or nested layout
                                    }: {
    children: React.ReactNode
}) {
    return (
        <ThemeProvider attribute={'class'}>
            {children}
        </ThemeProvider>
    )
}