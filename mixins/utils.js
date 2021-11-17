export const skills = [
  {
    id: 1,
    category: 'Design & UX',
    tags: [
      {
        id: 1,
        title: 'xD',
      },
      {
        id: 2,
        title: 'Sketch',
      },
      {
        id: 3,
        title: 'Figma',
      },
      {
        id: 4,
        title: 'InVision',
      },
      {
        id: 5,
        title: 'Photoshop',
      },
    ],
  },
  {
    id: 2,
    category: 'Front-End',
    tags: [
      {
        id: 1,
        title: 'JavaScript (ES6+)',
      },
      {
        id: 2,
        title: 'Vue.js',
      },
      {
        id: 3,
        title: 'Nuxt.js',
      },
      {
        id: 4,
        title: 'Vite',
      },
      {
        id: 5,
        title: 'SASS',
      },
      {
        id: 6,
        title: 'Tailwind CSS / Tailwind UI',
      },
      {
        id: 7,
        title: 'Axios',
      },
      {
        id: 8,
        title: 'Lottie',
      },
    ],
  },
  {
    id: 3,
    category: 'Back-End',
    tags: [
      {
        id: 1,
        title: 'Node.js',
      },
      {
        id: 2,
        title: 'PHP (Laravel / SilverStripe / Craft)',
      },
      {
        id: 3,
        title: 'Shopify',
      },
      {
        id: 4,
        title: 'MySQL / NoSQL',
      },
      {
        id: 5,
        title: 'Stripe',
      },
      {
        id: 6,
        title: 'RESTful API / GraphQL',
      },
      {
        id: 7,
        title: 'Firebase',
      },
    ],
  },
]

export const projects = [
  {
    id: 1,
    production: true,
    slug: 'new-forests',
    brand: 'New Forests',
    project: 'Virtual tour application',
    snippet:
      "New Forests are a global leader in providing sustainable forestry investment opportunities. Due to Covid-19 preventing on-site investor tours we were engaged to create a 'Virtual Tour' application.",
    description:
      '<p>New Forests are a global leader in providing sustainable forestry investment opportunities. Due to Covid-19 preventing on-site investor tours we were engaged to create a "Virtual Tour" application.</p><p>The virtual tour needed to be as close to a real experience as possible in order to give investors a feel for the environment, location & ultimately the long-term viability of the investment opportunity.</p><p>From an investor perspective the UI/UX needed to be as clean & simple as possible with most core content including the Virtual Tour requiring authentication. Admins on the client side have full content management capability incl. creating multiple tours, management of tour content (Videos, notifications, supporting content etc), inviting users and moderation of share functionality.</p>',
    approach:
      '<p>We decided on Vue.js as the core front-end framework with the addition of Nuxt.js. Nuxt provides a number of very useful baked-in features and methods that compliment Vue really well. The primary feature that confirmed this was the correct approach for us was the Server Side Rendering (SSR) capability given the importance of SEO (albeit not an immediate requirement due to the lack of public facing content). The server-side of the application was developed in Laravel (integration to the Nova CMS) including exposing a number of RESTful endpoints to consumed by the font-end. From a front-end perspective, we needed to leverage the UI benefits of a modern JavaScript framework and Single Page Application but we also needed to deliver a highly SEO friendly solution over the longer-term.</p>',
    challenges:
      '<p>From the onset Video was going to be a core part of the application. Previously, I had utilised the Vimeo API extensively however due to some fairly complex project requirements (custom bi-lingual subtitles & custom text overlays at predefined times) investigation into another player was required. It was challenging to find something JavaScript based, with the required feature set, that was also open source and had a decent level of developer documentation. Eventually, Video.js was adopted and works very seamlessly in the application.</p>',
    features:
      '<ul><li><p>Video.js integration in order to provide a highly customisable media player incl. timed video notifications (configurable in the CMS) & custom multilingual captions.</p></li><li><p>Video completion modals which are configurable in the CMS (i.e. next video in...).</p></li><li><p>Google Maps JavaScript API integration. This enables client side admins to display the location(s) of tour stops within the tour.</p></li><li><p>Share functionality allowing the ability for users to "Invite" their contacts to a Virtual Tour.</p></li><li><p>Hyvor forum integration providing the ability for members to participate in group discussion.</p></li></ul>',
    tags: [
      {
        id: 1,
        title: 'Vue.js',
      },
      {
        id: 2,
        title: 'Nuxt.js',
      },
      {
        id: 3,
        title: 'SPA',
      },
      {
        id: 4,
        title: 'Video.js',
      },
      {
        id: 5,
        title: 'Google Maps API',
      },
    ],
    skills: [
      {
        id: 1,
        title: 'Vue.js',
      },
      {
        id: 2,
        title: 'Nuxt.js',
      },
      {
        id: 3,
        title: 'Vuex',
      },
      {
        id: 4,
        title: 'Video.js',
      },
      {
        id: 5,
        title: 'Google Maps API',
      },
      {
        id: 6,
        title: 'SCSS',
      },
      {
        id: 7,
        title: 'Tailwind UI',
      },
    ],
    images: {
      mobile: [
        {
          id: 1,
          path: 'nf-dash-mobile.png',
        },
        {
          id: 2,
          path: 'nf-map-mobile-v4.png',
        },
        {
          id: 3,
          path: 'nf-video-mobile.png',
        },
      ],
      desktop: [
        {
          id: 1,
          path: 'nf-mobile.png',
        },
      ],
    },
  },
  {
    id: 2,
    production: true,
    brand: 'RFI Fusion',
    project: 'Request for informaton application (SaaS)',
    snippet:
      'RFI Fusion is a collaborative tool to streamline the communication between teams during projects. Users can easily invite core project members, engage with each other & upload important documents - all to help ensure a smooth project workflow.',
    description: 'this is the Fusion description!',
    slug: 'rfi-fusion',
    tags: [
      {
        id: 1,
        title: 'Vue.js',
      },
      {
        id: 2,
        title: 'Nuxt.js',
      },
      {
        id: 3,
        title: 'SPA',
      },
      {
        id: 4,
        title: 'Vuex',
      },
      {
        id: 5,
        title: 'Laravel 8',
      },
      {
        id: 6,
        title: 'Stripe API',
      },
      {
        id: 7,
        title: 'AWS',
      },
    ],
    skills: [
      {
        id: 1,
        title: 'Vue.js',
      },
      {
        id: 2,
        title: 'Nuxt.js',
      },
      {
        id: 3,
        title: 'Vuex',
      },
      {
        id: 4,
        title: 'Video.js',
      },
      {
        id: 5,
        title: 'Google Maps API',
      },
      {
        id: 6,
        title: 'SCSS',
      },
      {
        id: 7,
        title: 'Tailwind UI',
      },
    ],
  },
  {
    id: 3,
    production: true,
    brand: 'Tu Kaha',
    project: 'Learning management system (LMS)',
    snippet:
      'Since 2017, the Tu Kaha Foundation has been touring NZ, delivering values-based and culturally relevant learning experiences to decile 1-3 children. We were engaged to enable the client to deliver their programme online direct to the students whare.',
    description: 'this is the Tu Kaha description!',
    slug: 'tu-kaha',
    tags: [
      {
        id: 1,
        title: 'Vue.js',
      },
      {
        id: 2,
        title: 'SPA',
      },
      {
        id: 3,
        title: 'Vuex',
      },
      {
        id: 4,
        title: 'Vimeo API',
      },
      {
        id: 5,
        title: 'SaaS',
      },
    ],
    skills: [
      {
        id: 1,
        title: 'Vue.js',
      },
      {
        id: 2,
        title: 'Nuxt.js',
      },
      {
        id: 3,
        title: 'Vuex',
      },
      {
        id: 4,
        title: 'Video.js',
      },
      {
        id: 5,
        title: 'Google Maps API',
      },
      {
        id: 6,
        title: 'SCSS',
      },
      {
        id: 7,
        title: 'Tailwind UI',
      },
    ],
  },
  {
    id: 4,
    production: true,
    brand: 'McLeavey Gallery',
    project: 'SilverStripe CMS & UX',
    snippet:
      'McLeavey Gallery engaged with me to resolve a range of issues with their existing SilverStripe website. We kicked off a project to improve the overall UX from the design & layout, page speed (incl. AWS hosting migration) and lead facilitation.',
    description:
      '<p>McLeavey Gallery operate a boutique Gallery in central Wellington and required a refreshed digital presence with a focus on user experience. This involved a ground-up rethink of the layout and design, creating a seamless experience for the end-user whilst helping to facilitate sales leads.</p><p>In addition to the front-end, a number of enhancements were identified relating to the SilverStripe platform including updating to the latest stable release and updates to the database relationships to support the UX updates.</p><p>Lastly, to resolve a number of other pain points (including slow page load times) a devops phase was implemented including migrating from a slow and restrictive shared hosting platform to Amazon Web Services.</p>',
    approach:
      '<p>To achieve the ultimate goal of improving the general UX, we kicked off by identifying current pain points and gaps in the current flow. Once I had a clear picture of this, I creating a fresh set of wireframes across all key page templates using Adobe xD. This gave us a solid foundation to iterate over until we were able to achieve a high fidelity prototype.</p><p>Once this clear view of the revised website had been achieved, I utilised a “bottom-up” approach starting with the devops updates including generating a fresh instance of SilverStripe and configuring AWS hosting and GitHub integration to provide a smooth local development workflow. From there, I refined and extended the existing relationships and controllers to facilitate the new features. Lastly, I moved to the front-end to and feature implementation (see core features below).</p>',
    challenges: "",
    features:
      '<ul><li><p>Feature works have click to “pan & zoom” functionality (Viewer JS)</p></li><li><p>Sortable CMS dataobjects allowing the client to easily reorder feature works etc (SilverStripe Sortable Grid Field)</p></li><li><p>Directly enquiry on artwork (SilverStripe User Forms) & MailGun integration)</p></li><li><p>Refactored grid (CSS grid)</p></li><li><p>Vimeo integration</p></li><li><p>Webpack compilation and bundling of SCSS & JS and hot reloading.</p></li><li><p>AWS hosing and GitHub auto-deploy</p></li></ul>',
    slug: 'mcleavey-gallery',
    tags: [
      {
        id: 1,
        title: 'SilverStripe',
      },
      {
        id: 2,
        title: 'Adobe Xd',
      },
      {
        id: 3,
        title: 'MailGun',
      },
      {
        id: 4,
        title: 'AWS',
      },
      {
        id: 5,
        title: 'Vimeo',
      },
    ],
    skills: [
      {
        id: 1,
        title: 'SilverStripe',
      },
      {
        id: 2,
        title: 'Adobe xD',
      },
      {
        id: 3,
        title: 'MailGun',
      },
      {
        id: 4,
        title: 'MySQL',
      },
      {
        id: 5,
        title: 'Vimeo',
      },
      {
        id: 6,
        title: 'Webpack',
      },
      {
        id: 7,
        title: 'AWS',
      },
    ],
    images: {
      mobile: [
        {
          id: 1,
          path: 'mg-twenty-mobile.png',
        },
        {
          id: 2,
          path: 'mg-artists-mobile.png',
        },
        {
          id: 3,
          path: 'mg-early-mobile.png',
        },
      ],
      desktop: [
        {
          id: 1,
          path: 'mg-desktop.png',
        },
      ],
    },
  },
  {
    id: 5,
    production: false,
    brand: 'Detail Connect',
    project: 'Google Maps / JavaScript API',
    snippet:
      'Detail Connect required a way to showcase their portfolio of nationwide projects. This was achieved by creating a Node.js CSV upload utility, integrating with a Firebase database & integrating the UI with the Google Maps JavaScript API.',
    description: 'this is the DC description!',
    slug: 'detail-connect',
    tags: [
      {
        id: 1,
        title: 'Node.js',
      },
      {
        id: 2,
        title: 'Firebase',
      },
      {
        id: 3,
        title: 'Google Maps JavaScript API',
      },
    ],
    skills: [
      {
        id: 1,
        title: 'Vue.js',
      },
      {
        id: 2,
        title: 'Nuxt.js',
      },
      {
        id: 3,
        title: 'Vuex',
      },
      {
        id: 4,
        title: 'Video.js',
      },
      {
        id: 5,
        title: 'Google Maps API',
      },
      {
        id: 6,
        title: 'SCSS',
      },
      {
        id: 7,
        title: 'Tailwind UI',
      },
    ],
  },
  {
    id: 6,
    production: false,
    brand: 'Covid-19',
    project: 'NZ case tracker',
    snippet:
      'As a side-project, I thought it would be interesting (and relevant!) to build a Covid-19 case tracker and localise this to New Zealand. An interesting Vue.js project integrating with an external Covid-19 API. The app will display a range of case data and the ability to refine results by region.',
    slug: 'covid-19',
    tags: [
      {
        id: 1,
        title: 'Vue.js 3.0',
      },
      {
        id: 2,
        title: 'SPA',
      },

      {
        id: 3,
        title: 'Vuex',
      },
      {
        id: 4,
        title: 'RESTful API / Axios',
      },
      {
        id: 5,
        title: 'Side project',
      },
    ],
    skills: [
      {
        id: 1,
        title: 'Vue.js',
      },
      {
        id: 2,
        title: 'Nuxt.js',
      },
      {
        id: 3,
        title: 'Vuex',
      },
      {
        id: 4,
        title: 'Video.js',
      },
      {
        id: 5,
        title: 'Google Maps API',
      },
      {
        id: 6,
        title: 'SCSS',
      },
      {
        id: 7,
        title: 'Tailwind UI',
      },
    ],
  },
]
