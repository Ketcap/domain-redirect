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
        source: '/en',
        destination: 'https://uur.notion.site/Monthly-Newsletters-e3d3864d7a5c4bbfaca0cfa73eabb47c',
        permanent: false
      },
      {
        source: '/tr',
        destination: 'https://uur.notion.site/Ayl-k-Makaleler-1e3ccb22765341c781c768d736e68787',
        permanent: false
      },
      {
        source: '/en/august-2022',
        destination: 'https://uur.notion.site/August-2022-8308ec9131f7416ca2d28ca34972aa83',
      },
      {
        source: '/tr/agustos-2022',
        destination: 'https://uur.notion.site/A-ustos-2022-a4c0dd9bc02f479f9d21974de5e12152',
      },
      {
        source: '/en/july-2022',
        destination: 'https://uur.notion.site/July-2022-b5fdef8c740843d6bf989436efdd12cf',
      },
      {
        source: '/tr/temmuz-2022',
        destination: 'https://uur.notion.site/Temmuz-2022-cbf3fab8d2c0411096f053a8f36554fe',
      }
    ]
  }
}

module.exports = nextConfig
