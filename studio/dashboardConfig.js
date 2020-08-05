export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f2a9db929170800c22f50b1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qshp1g4s',
                  apiId: '21c32cf5-5846-4053-9bc3-c4a38466cd18'
                },
                {
                  buildHookId: '5f2a9db98c12c7017daff32b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gdk2aju1',
                  apiId: '3c01e95a-ddf4-4feb-9fbe-617333aec177'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahc258/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gdk2aju1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
