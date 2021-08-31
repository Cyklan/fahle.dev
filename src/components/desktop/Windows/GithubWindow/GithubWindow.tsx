import React from "react";
import Window from "../../Window/Window";
import { getGithubRepos } from "../../../../data/fetchGithub";
import { useEffect } from "react";
import { RepoOverview } from "../../../../model/GithubAPI";
import GithubRepo from "../../GithubRepo/GithubRepo";
import DefinedWindowProps from "../DefinedWindowProps";

export default function GithubWindow({ onClose,  title, updateZIndex }: DefinedWindowProps) {

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