import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Productions',
    description: 'Some of the products are from work and some are on my own time.',
}
export default function ProductsLayout({
                                           children,
                                       }: { children: React.ReactNode }) {
    return (
        <div
            className="relative min-h-screen dark:bg-gradient-to-tl dark:from-zinc-900 dark:via-zinc-400/10 dark:to-zinc-900 ">
            {children}
        </div>
    );
}
