export type Profile = {
  name: string;
  role: string;
  location: string;
  tagline: string;
  bio: readonly string[];
  skillGroups: readonly {
    title: string;
    items: readonly string[];
  }[];
  languages: readonly string[];
};
