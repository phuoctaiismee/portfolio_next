'use client'
import React from 'react'
import {useTheme} from "next-themes";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

const Hire = () => {
    const {theme, setTheme} = useTheme();
    return (
        <div className="flex justify-center my-5">
            <ThemeSwitcher/>
        </div>
    )
}
export default Hire
