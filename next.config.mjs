import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = withMDX()({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: { unoptimized: true },
  basePath: "",
  output: "export",
});

export default nextConfig;
