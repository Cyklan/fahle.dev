import React from "react";
import Window from "../../Window/Window";
import { getGithubRepos } from "../../../../data/fetchGithub";
import { useEffect } from "react";
import { RepoOverview } from "../../../../model/GithubAPI";
import GithubRepo from "../../GithubRepo/GithubRepo";

interface GithubWindowProps {
  onClose: Function;
  id: string;
  title: string;
  updateZIndex: Function;
}

export default function GithubWindow({ onClose, id, title, updateZIndex }: GithubWindowProps) {

  const [repos, setRepos] = React.useState<RepoOverview[]>([]);

  useEffect(() => {
    (async () => {
      const _repos = await getGithubRepos();
      setRepos(_repos);
    })();
  }, []);

  const repoElements = repos
    .filter(x => x.name !== "Cyklan")
    .map((repo: RepoOverview) =>
      <GithubRepo key={repo.id} repo={repo} />
    );

  return (
    <Window updateZIndex={updateZIndex} title={title} onClose={onClose}>
      <h3><a href="https://github.com/Cyklan" target="_blank" rel="noreferrer">Cyklan</a></h3>
      {repoElements}
    </Window>
  );
}