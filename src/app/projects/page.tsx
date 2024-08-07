import Link from 'next/link'
import React from 'react'
import {allProjects} from 'contentlayer/generated'
import {Navigation} from '@/components/Navigation/Navigation'
import {Card} from '@/components/Card/Card'
import {Article} from './article'
import {IconEye} from "@tabler/icons-react";

// const redis = Redis.fromEnv();

export const revalidate = 60
export default async function ProjectsPage() {
    //Lấy ra projects trọng tâm
    const featured = allProjects.find((project) => project.slug === 'zoom-clone')!
    //Lấy ra projects top 2
    const top2 = allProjects.find((project) => project.slug === 'fantastic-five')!
    // console.log(featured)
    //Lấy ra projects top 3
    const top3 = allProjects.find((project) => project.slug === 'apple-website')!

    //Lọc ra những projects còn lại
    const sorted = allProjects
        // .filter((p) => p.published)

        //Loại bỏ 3 projects top
        .filter(
            (project) =>
                project.slug !== featured.slug &&
                project.slug !== top2.slug &&
                project.slug !== top3.slug
        )

        //Sắp xếp theo thứ tự ngày tạo
        .sort(
            (a, b) =>
                new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
                new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
        )

    return (
        <div className="relative pb-16">
            <Navigation/>
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                        Projects
                    </h2>
                    <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                        Some of the projects are from work and some are on my
                        own time.
                    </p>
                </div>
                <div className="w-full h-px bg-zinc-400 dark:bg-zinc-800"/>

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <Card>
                        <Link href={`/projects/${featured.slug}`}>
                            <article className="relative w-full h-full p-4 md:p-8">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="text-xs text-zinc-500 dark:text-zinc-100">
                                        {featured.date ? (
                                            <time
                                                dateTime={new Date(
                                                    featured.date
                                                ).toISOString()}
                                            >
                                                {Intl.DateTimeFormat(
                                                    undefined,
                                                    {
                                                        dateStyle: 'medium',
                                                    }
                                                ).format(
                                                    new Date(featured.date)
                                                )}
                                            </time>
                                        ) : (
                                            <span>SOON</span>
                                        )}
                                    </div>
                                    <span className="flex items-center gap-1 text-xs text-zinc-700 dark:text-zinc-500">
                                        <IconEye className="w-4 h-4"/>{' '}
                                        {/*{Intl.NumberFormat("en-US", { notation: "compact" }).format(*/}
                                        {/*    views[featured.slug] ?? 0,*/}
                                        {/*)}*/}
                                    </span>
                                </div>

                                <h2
                                    id="featured-post"
                                    className="mt-4 text-3xl font-bold text-zinc-800 dark:text-zinc-100 dark:group-hover:text-white sm:text-4xl font-display"
                                >
                                    {featured.title}
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-500 dark:text-zinc-400 dark:group-hover:text-zinc-300">
                                    {featured.description}
                                </p>
                                <div className="absolute bottom-4 md:bottom-8">
                                    <p className="hidden text-zinc-400 dark:text-zinc-200 dark:hover:text-zinc-50 lg:block">
                                        Read more{' '}
                                        <span aria-hidden="true">&rarr;</span>
                                    </p>
                                </div>
                            </article>
                        </Link>
                    </Card>

                    <div
                        className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
                        {[top2, top3].map((project, index) => (
                            <Card key={index}>
                                <Article project={project} views={0}/>
                                {/*<h1>{projects + ''}</h1>*/}
                            </Card>
                        ))}
                    </div>
                </div>
                {/*<div className="hidden w-full h-px md:block bg-zinc-800"/>*/}
                <div className="hidden md:block w-full h-px bg-zinc-400 dark:bg-zinc-800"/>

                <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 0)
                            .map((project) => (
                                <Card key={project.slug}>
                                    <Article project={project} views={0}/>
                                </Card>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 1)
                            .map((project) => (
                                <Card key={project.slug}>
                                    <Article project={project} views={0}/>
                                </Card>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {sorted
                            .filter((_, i) => i % 3 === 2)
                            .map((project) => (
                                <Card key={project.slug}>
                                    <Article project={project} views={0}/>
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
