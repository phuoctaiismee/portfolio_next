import React from 'react'
import Particles from "@/components/Particles/Particles";
import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={200}
            />
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-8xl md:text-9xl whitespace-nowrap bg-clip-text ">
                dariel dev
            </h1>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <div className="my-16 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500 ">
                    Im{" "}
                    <Link
                        target="_blank"
                        href="#"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        enjoy
                    </Link>  creating delightful and designing that optimizes the user experience.
                </h2>
            </div>
        </>
    )
}
export default HeroSection
