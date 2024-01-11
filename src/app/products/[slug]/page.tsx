import type {Metadata, ResolvingMetadata} from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    {params, searchParams}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const id = params.id

    return {
        title: id + "Hello"
    }
}

export default function Page({params, searchParams}: Props) {
    return <>
        <h1 className={'text-white'}>Hello</h1></>
}