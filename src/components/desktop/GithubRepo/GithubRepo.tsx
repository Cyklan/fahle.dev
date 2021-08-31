import "./GithubRepo.css";
import { RepoOverview } from "../../../model/GithubAPI";

interface RepoProps {
  repo: RepoOverview;
}

export default function GithubRepo({ repo }: RepoProps) {
  return (
    <div className="repo">
      <h4 className="repo-name"><a href={repo.html_url} rel="noreferrer" target="_blank">{repo.name}</a></h4>
      <p className="repo-details">{repo.stargazers_count}⭐<span className="repo-lang">Main Language: {repo.language}</span></p>
      <p className="repo-description">{repo.description}</p>
    </div>
  );
}