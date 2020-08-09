export default {
    name: 'jobListings',
    type: 'document',
    title: 'Job Listings',
    __experimental_actions: [
      'create',
      'update',
      'delete',
      'publish'
    ],
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'body',
        type: 'array',
        title: 'Description',
        description: 'Describe briefly the job description for the position.',
        of: [
          {type: 'block'}
        ]
      },
      {
        name: 'buttonTxt',
        type: 'string',
        title: 'Button Text'
      },
      {
        name: 'buttonURL',
        type: 'url',
        title: 'URL'
      },
    ]
  }
  