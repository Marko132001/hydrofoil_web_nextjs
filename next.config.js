/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = nextConfig

module.exports = {

  env: {
    STRAPI_URL: process.env.STRAPI_URL,
  },

  publicRuntimeConfig: {
      STRAPI_URL: process.env.STRAPI_URL,
  },

  images: {
    domains: ['https://res.cloudinary.com/hydrofoilweb'],
  },

}
