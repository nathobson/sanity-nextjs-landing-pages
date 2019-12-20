export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dfc904ae9ce84e3ff2ae223',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j76scsnh',
                  apiId: '750e2a34-6f4b-4607-a772-54e55df693a6'
                },
                {
                  buildHookId: '5dfc904a4e46f031a6664f5c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ti67jcki',
                  apiId: '2fda4b47-743b-4e4e-92f7-26f597802b46'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathobson/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ti67jcki.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
