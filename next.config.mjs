/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    reactCompiler: {
      compilationMode: 'annotation'
    }
  }
}

export default nextConfig
