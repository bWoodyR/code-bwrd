export type TProjectData = {
  title: string;
  path: string;
  usedTechImgs: TTechImages[];
  description: string;
  img: string[];
  video: string;
  liveSiteURL: string;
  demoSiteURL: string;
  availableForPublic: boolean;
  inDevelopment: boolean;
};

export type TProjectDataExtended = {
  type: string;
  projects: TProjectData[];
};

export type TTechImages = {
  img: string;
  title: string;
  labels: string[];
};
