import {configuration} from '@codedoc/core';

import {theme} from './theme';


export const config = /*#__PURE__*/configuration({
    theme,                                  // --> add the theme. modify `./theme.ts` for chaning the theme.
    dest: {
        html: 'dist',
        assets: 'dist',
        namespace: '/Astromine-Wiki'          // --> your github pages namespace. remove if you are using a custom domain.
    },
    page: {
        title: {
            base: 'Astromine Wiki'              // --> the base title of your doc pages
        },
        favicon: '/favicon.ico',
        meta: {
            subject: 'Astromine Wiki',
            description: 'A wikipedia for astromine.',
            keywords: [
                'documentation',
                'docs',
                'minecraft',
                'fabric',
                'open-source',
                'open source',
                'astromine',
            ]
        }
    },
    misc: {
        github: {
            user: 'Chainmail-Studios',          // --> your github username (where your repo is hosted)
            repo: 'Astromine-Wiki',             // --> your github repo name
        }
    },
    src: {
        base: 'src/markdowns',
        not_found: '404.md',
    },
});
