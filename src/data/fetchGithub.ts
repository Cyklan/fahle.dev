import axios from "axios";
import Repo, { RepoLanguages, RepoOverview } from "../model/GithubAPI";

export async function getGithubRepos() {
  return new Promise<RepoOverview[]>((resolve, reject) => {
    axios
      .get<RepoOverview[]>("https://api.github.com/users/cyklan/repos")
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function getGithubRepoLanguages(url: string) {
  return new Promise<RepoLanguages>((resolve, reject) => {
    axios
      .get<RepoLanguages>(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export async function fetchRepos(): Promise<Repo[]> {
  const repos = await getGithubRepos();
  const reposWithLanguages = await Promise.all(
    repos.map(async repo => {
      const languages = await getGithubRepoLanguages(repo.languages_url);
      return { repo, languages };
    })
  );
  return reposWithLanguages;
}