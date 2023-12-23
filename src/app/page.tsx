import Image from 'next/image'
import HeroSection from "@/components/Hero/HeroSection";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main className="mx-auto py-5 px-10 flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Header/>
        <HeroSection/>
    </main>
  )
}
