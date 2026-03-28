export type Project = {
  name: string;
  description: string;
  tech: string[];
  img: string;
  clickAction: { type: 'web'; url: string } | { type: 'app'; androidUrl: string; iosUrl: string } | { type: 'none' };
};
