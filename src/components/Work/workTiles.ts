export type WorkTile = {
  title: string;
  description: string;
  image: {
    src?: string;
    width: number;
    height: number;
  };
};

export const workTiles: WorkTile[] = [
  {
    description: `Here are some things`,
    title: `I'am most Proud of`,
    image: {
      // src: '/static/images/aphex-apps.webp',
      width: 600,
      height: 770,
    },
  },
  {
    description: 'I built',
    title: 'HeyLime Web',
    image: {
      src: '/static/images/projects/heylime/heylime-web.png',
      width: 600,
      height: 554,
    },
  },
  {
    description: `I built`,
    title: 'HeyLime Mobile App',
    image: {
      src: '/static/images/projects/heylime/heylime-app.png',
      width: 600,
      height: 717,
    },
  },
  {
    description: `I built`,
    title: 'HeyLime Backend',
    image: {
      src: '/static/images/projects/heylime/final-result.png',
      width: 800,
      height: 717,
    },
  },
];
