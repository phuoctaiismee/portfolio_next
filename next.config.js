const {withContentlayer} = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, swcMinify: true, pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    experimental: {
        mdxRs: true,
    },
}

module.exports = withContentlayer(nextConfig)