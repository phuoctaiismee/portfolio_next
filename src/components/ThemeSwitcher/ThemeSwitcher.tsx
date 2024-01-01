'use client'
import {IconSun, IconMoon} from '@tabler/icons-react';
import {useTheme} from 'next-themes';
import {useEffect, useState} from "react";

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <button
            className="h-9 w-9 flex justify-center rounded-full items-center bg-zinc-950 dark:bg-gray-800 "
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {isClient && theme && theme === 'dark' ? <IconSun className="w-5 text-orange-400"/> :
                <IconMoon className="w-4 rounded-full text-gray-100"/>}
        </button>
    );
};

export default ThemeSwitcher;
