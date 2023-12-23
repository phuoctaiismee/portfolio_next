import React from 'react'
import Logo from "@/components/Logo/Logo";
import {Navlinks} from "@/types/configs";
import Link from "next/link";

const navigation: Navlinks[] = [
    {
        label: 'Home',
        link: '/'
    },
    {
        label: 'Project',
        link: '/projects'
    },
    {
        label: 'Contact',
        link: '/contact'
    },
    {
        label: 'Hire',
        link: '/hire'
    }
]

const Header = () => {
    return (
        <header className={'flex justify-between items-center'}>
            <Logo hasText={true} primaryColor={'#243A5A'} secondaryColor={'white'}/>
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
        </header>
    )
}
export default Header
