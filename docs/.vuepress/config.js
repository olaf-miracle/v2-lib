module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'V2Lib Library 🥂',
      description: 'Documentation site for the V2Lib library plugin'
    }
  },

  themeConfig: {
    repoLabel: 'Contribute!!!',
    repo: 'https://github.com/olaf-miracle/v2-lib',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    editLinkText: 'Help us improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Components', link: '/components/' },
          { text: 'GitHub', link: 'https://github.com/' }
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: [
                'bulletins',
                'functional-component'
              ]
            }
          ]
        }
      }
    }
  }
}
