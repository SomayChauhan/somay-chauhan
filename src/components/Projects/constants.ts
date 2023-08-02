import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'HeyLime Website',
    image: { url: '/static/images/projects/heylime/heylime-web.png', height: 300, width: 400 },
    description:
      'heyLIme a platform that makes it possible to Host digital gatherings for your family, friends, and co-workers whenever you like over any video conferencing medium.',
    techStack: [
      {
        name: 'HTML',
        link: '/static/images/techStack/brand-html5.svg',
      },
      {
        name: 'CSS',
        link: '/static/images/techStack/brand-css.svg',
      },
      {
        name: 'Bootstrap',
        link: '/static/images/techStack/brand-bootstrap.svg',
      },
      {
        name: 'Sass',
        link: '/static/images/techStack/brand-sass.svg',
      },
      {
        name: 'React',
        link: '/static/images/techStack/brand-react.svg',
      },
      {
        name: 'Redux',
        link: '/static/images/techStack/brand-redux.svg',
      },
      {
        name: 'Websocket',
        link: '/static/images/techStack/brand-websocket.svg',
      },
      {
        name: 'AWS-Cognito',
        link: '/static/images/techStack/brand-aws-cognito.svg',
      },
    ],
    live_links: [
      {
        name: 'visit website',
        url: 'https://heylime.com/',
        image: '/static/images/icons8-external-link.svg',
      },
    ],
  },
  {
    title: 'HeyLime mobile app',

    image: { url: '/static/images/projects/heylime/heylime-app.png', height: 300, width: 300 },
    description: '',
    techStack: [
      {
        name: 'React Native',
        link: '/static/images/techStack/brand-react.svg',
      },
      {
        name: 'Redux',
        link: '/static/images/techStack/brand-redux.svg',
      },
      {
        name: 'Websocket',
        link: '/static/images/techStack/brand-websocket.svg',
      },
    ],
    live_links: [
      {
        name: 'PlayStore',
        url: 'https://play.google.com/store/apps/details?id=com.gameapart.player&hl=en&gl=US&pli=1',
        image: '/static/images/icons8-google-play.svg',
      },
      {
        name: 'AppStore',
        url: 'https://apps.apple.com/us/app/heylime-remote-teambuilding/id1515421728',
        image: '/static/images/apple-app-store.svg',
      },
    ],
  },
  {
    title: 'HeyLime Backend',
    image: { url: '/static/images/projects/heylime/final-result.png', height: 300, width: 500 },
    description:
      'to connect users in real time, we used websockets and hosted the entire thing on aws using serverless so that we dont have to worry much about the infrastructure and scaling',
    github_url: 'https://heylime.com/',
    techStack: [
      {
        name: 'NodeJS',
        link: '/static/images/techStack/brand-nodejs.svg',
      },
      {
        name: 'AWS',
        link: '/static/images/techStack/brand-aws.svg',
      },
      {
        name: 'AWS-Cognito',
        link: '/static/images/techStack/brand-aws-cognito.svg',
      },
      {
        name: 'Serverless',
        link: '/static/images/techStack/brand-serverless.svg',
      },
      {
        name: 'Websocket',
        link: '/static/images/techStack/brand-websocket.svg',
      },
      {
        name: 'Cloudfront',
        link: '/static/images/techStack/brand-cloudfront.svg',
      },
      {
        name: 'Cloudwatch',
        link: '/static/images/techStack/brand-cloudwatch.svg',
      },
      {
        name: 'DynaomoDb',
        link: '/static/images/techStack/brand-dynamodb.svg',
      },
      {
        name: 'S3',
        link: '/static/images/techStack/brand-s3.svg',
      },
    ],
  },
];
