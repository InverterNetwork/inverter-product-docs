// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to Inverter Network',
  tagline: 'The funding tool that increase accountibility and transparency while reducing administrative effort',
  // add website address here when it's ready
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
  ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // we'll need to get this data once we publish the site publicly
      // apply here - https://docsearch.algolia.com/apply/
     // algolia: {
     //   // The application ID provided by Algolia
     //   appId: 'YOUR_APP_ID',
  //
     //   // Public API key: it is safe to commit it
     //   apiKey: 'YOUR_SEARCH_API_KEY',
  //
     //   indexName: 'YOUR_INDEX_NAME',
     // },
      navbar: {
        title: 'Inverter Network',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: 'docs/whatIsInverter/',
            activeBasePath: 'whatIsInverter',
            position: 'left',
            label: 'What is Inverter?',
          },
          {
            to: 'docs/proposalGuide/',
            activeBasePath: 'proposalGuide',
            position: 'left',
            label: 'Proposal Guide',
          },
          {
            label: "Go to the dApp",
            // change this once we have a website
            href: 'https://twitter.com/inverternetwork',
            position: 'left'
      }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get Started',
            items: [
              {
                label: 'What is Inverter?',
                to: 'whatIsInverter',
              },
              {
                label: "Go to the dApp",
                // change this once we have a website
                href: 'https://twitter.com/inverternetwork'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/inverternetwork',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/qNrHakF6B5',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/inverter-network',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Mirror',
                href: 'https://mirror.xyz/0x0966262125B5E01B5D77B862830a341419BC2872'
              },
             // {
             //   label: 'Medium',
             //   href: ''
             // },
              {
                label: 'GitHub',
                href: 'https://github.com/InverterNetwork',
              },
            ],
            
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Inverter Network. Built with Docusaurus.`,
      },
      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config