export interface RepoOverview {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  url: string;
  languages_url: string;
  stargazers_count: number;
  description: string;
  language: string;
}

export interface RepoLanguages {
  [key: string]: number;
}

export default interface Repo {
  repo: RepoOverview,
  languages: RepoLanguages;
}