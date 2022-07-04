module.exports = {
  pathPrefix: '/running_page', // Change to `/running_page` when running on github pages
  siteMetadata: {
    siteTitle: 'Dennis Running Page',
    siteUrl: 'https://run.domon.cn',
    logo: 'https://domon.cn/content/images/2020/06/avatar_shiba-2.jpg',
    description: '日子有些沉闷，但跑起来强风会吹拂',
    navLinks: [
      {
        name: 'Blog',
        url: 'https://www.domon.cn',
      },
      {
        name: 'Moment',
        url: 'https://t.me/s/hualihuawai',
      },
      {
        name: 'About',
        url: 'https://www.domon.cn/about',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    }
  ],
};
