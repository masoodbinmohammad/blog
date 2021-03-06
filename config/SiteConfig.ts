export default {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Blog | Masood Mohammad', // Navigation and Site Title
  siteTitleAlt: 'Personal blog', // Alternative Site title for SEO
  siteUrl: 'https://blog-masoodbinmohammad.netlify.app', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteBanner: '/assets/banner.jpg', // Your image for og:image tag. You can find it in the /static folder
  defaultBg: '/assets/bg/6.jpg', // default post background header
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'A Place where i write', // Your site description
  author: 'Masood Mohammad',
  siteLogo: '/assets/logo.png',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@masoodbinmohmd', // Twitter Username - Optional
  ogSiteName: '', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.ts
  headerFontFamily: 'Bitter',
  bodyFontFamily: 'Open Sans',
  baseFontSize: '18px',

  // Social media
  siteFBAppID: '',

  //
  Google_Tag_Manager_ID: 'GTM-5GBNKV4',
  Google_Analytics_ID: 'UA-164005605-2',
  POST_PER_PAGE: 4,
};
