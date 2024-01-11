"use client";
import Link from "next/link";
import {IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconBrandTwitter, IconEye} from "@tabler/icons-react";
import {Navigation} from "@/components/Navigation/Navigation";
import {Card} from "@/components/Card/Card";
import {Article} from "@/app/projects/article";
import React from "react";


const socials = [
    {
        icon: <IconBrandLinkedin size={20}/>,
        href: "https://linkedin.com/in/phuoctaiismee",
        label: "Linkedin",
        handle: "@NguyễnPhướcTài",
    },
    {
        icon: <IconBrandGmail size={20}/>,
        href: "mailto:imphuoctai@gmail.com",
        label: "Email",
        handle: "imphuoctai@gmail.com",
    },
    {
        icon: <IconBrandGithub size={20}/>,
        href: "https://github.com/phuoctaiismee",
        label: "Github",
        handle: "phuoctaiismee",
    },
];
export default function Example() {
    return (
        <div className="dark:bg-gradient-to-tl dark:from-zinc-900/0 dark:via-zinc-900 dark:to-zinc-900/0">
            <Navigation/>
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                Helloo Product
            </div>
        </div>
    );
}
