module.exports = {
    title: 'Chevereto V4 Docs',
    description: 'Image and Video hosting software',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }],
        ['meta', {
            name: 'theme-color',
            content: '#006edb'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/logo.png'
        }],
        ['meta', {
            name: 'msapplication-TileColor',
            content: '#000000'
        }],
        ['script', {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-66RGXZE185',
        }],
        ['script', {},
            [
                "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-66RGXZE185');",
            ],
        ],
    ],
    themeConfig: {
        logo: '/logo.svg',
        pwa: false,
        docsRepo: 'chevereto/v4-docs',
        docsBranch: 'main',
        smoothScroll: false,
        editLinks: true,
        lastUpdated: true,
        sidebarDepth: 3,
        nav_after: [
            {
              text: 'Manuals',
              ariaLabel: 'Manuals Menu',
              items: [
                { text: 'Admin manual', link: 'https://v4-admin.chevereto.com/' },
                { text: 'User manual', link: 'https://v4-user.chevereto.com/' },
              ]
            }
          ]
    },
};
