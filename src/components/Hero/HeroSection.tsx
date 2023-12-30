'use client'
import React, {useEffect, useState} from 'react'
import Particles from "@/components/Particles/Particles";
import Link from "next/link";
import {useTheme} from "next-themes";

const HeroSection = () => {
    // const {theme, setTheme} = useTheme();
    // const [isRefresh, setIsRefresh] = useState(false)
    // useEffect(() => {
    //     if (theme) {
    //         setIsRefresh(true);
    //     }
    // }, [theme]);
    return (
        <>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-800/0 via-zinc-900/50 to-zinc-800/0 dark:bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0"
            />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={200}
                // refresh={isRefresh}

            />
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-black dark:bg-white cursor-default text-edge-outline-light dark:text-edge-outline animate-title font-display sm:text-8xl md:text-9xl whitespace-nowrap bg-clip-text ">
                dariel dev
            </h1>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-right  bg-gradient-to-r from-zinc-800/0 via-zinc-900/50 to-zinc-800/0 dark:bg-gradient-to-r dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0"/>
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500 ">
                    Im{" "}
                    <Link
                        target="_blank"
                        href="#"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        enjoy
                    </Link> creating delightful and designing that optimizes the user experience.
                </h2>
            </div>
        </>
    )
}
export default HeroSection
