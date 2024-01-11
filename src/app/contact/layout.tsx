import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact me with information bellow.',
}
export default function ContactLayout({
                                          children,
                                      }: { children: React.ReactNode }) {
    return (
        <div
            className="relative min-h-screen dark:bg-gradient-to-tl dark:from-zinc-900 dark:via-zinc-400/10 dark:to-zinc-900 ">
            {children}
        </div>
    );
}
