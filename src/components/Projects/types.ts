import { techStackItem } from '@/data/techStack';

type liveLinkItem = {
  name: string;
  image: string;
  url: string;
};

type imageItem = {
  url: string;
  height: number;
  width: number;
};

export interface Project {
  title: string;
  description: string;
  image: imageItem;
  live_url?: string;
  github_url?: string;
  techStack: techStackItem[];
  live_links?: liveLinkItem[];
}
