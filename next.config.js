/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://uur.notion.site/Newsletter-8ca44ac1b49c4e399672f7777af74923',
        permanent: true,
      },
      {
        source:'/en',
        destination:'https://uur.notion.site/Monthly-Newsletters-e3d3864d7a5c4bbfaca0cfa73eabb47c',
        permanent:false
      },
      {
        source:'/tr',
        destination:'https://uur.notion.site/Ayl-k-Makaleler-1e3ccb22765341c781c768d736e68787',
        permanent:false
      }
    ]
  } 
}

module.exports = nextConfig
