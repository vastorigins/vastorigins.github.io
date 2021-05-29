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
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
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
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/vastorigins',
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
          // Please change this to your repo.
          editUrl:
            'https://github.com/vastorigins/vastorigins.github.io/tree/documentation/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/vastorigins/vastorigins.github.io/tree/documentation/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
