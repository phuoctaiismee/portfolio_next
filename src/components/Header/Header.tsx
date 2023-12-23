import React from 'react'
import {Navlinks} from "@/types/configs";
import Link from "next/link";

const navigation: Navlinks[] = [
    {
        label: 'Projects',
        link: '/projects'
    },
    {
        label: 'Hire',
        link: '/hire'
    }
]

const Header = () => {
    return (
            <nav className="my-16 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.link}
                            href={item.link}
                            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                        >
                            {item.label}
                        </Link>
                    ))}
                </ul>
            </nav>
    )
}
export default Header
