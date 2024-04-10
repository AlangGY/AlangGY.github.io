import withBundleAnalyzer from "@next/bundle-analyzer";
import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(
  withMDX()({
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    images: { unoptimized: true },
    basePath: "",
    output: "export",
  })
);

export default nextConfig;
