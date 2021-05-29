/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'O\'l Research',
  tagline: 'How long is forever?',
  url: 'https://vastorigins.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vastorigins',
  projectName: 'vastorigins.github.io',
  themeConfig: {
    navbar: {
      title: 'O\'l Research',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://www.vastorigins.com', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/vastorigins/vastorigins.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorials',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/vastorigins-tutorial',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/vastorigins',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/vastorigins',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Portfolio',
              href: 'https://portfolio.vastorigins.com',
            },
            {
              label: 'Blog / Website',
              href: 'https://www.vastorigins.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/vastorigins/vastorigins.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Where It All Started, Ltd. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/vastorigins/vastorigins.github.io/edit/documentation/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
