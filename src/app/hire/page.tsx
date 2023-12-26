'use client'
import React from 'react'
import {useTheme} from "next-themes";
import {MoonIcon, SunIcon} from "lucide-react";

const Hire = () => {
    const {theme, setTheme} = useTheme();
    return (
        <div className="h-9 w-9 flex justify-center rounded-full md:p-0 ml-2 bg-gray-800">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
                {theme === "dark" ? (
                    <SunIcon className="h-8 w-8 text-orange-400"/>
                ) : (
                    <MoonIcon className="h-6 w-6 rounded-full text-gray-100"/>
                )}
            </button>
        </div>
    )
}
export default Hire
