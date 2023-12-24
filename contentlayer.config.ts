import {
    defineDocumentType,
    ComputedFields,
    makeSource,
} from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { DocumentMeta } from '@contentlayer/core'

const computedFields: ComputedFields = {
    path: {
        type: 'string',
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
}

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: './projects/**/*.mdx',
    contentType: 'mdx',

    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        date: {
            type: 'date',
        },
        url: {
            type: 'string',
        },
        published: {
            type: 'boolean',
        },
        repository: {
            type: 'string',
        },
    },
    computedFields,
}))

export const Page = defineDocumentType(() => ({
    name: 'Page',
    filePathPattern: 'pages/**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Page, Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
             rehypeAutolinkHeadings,
            rehypePrettyCode,
            rehypeSlug,
        ],
    },
})
