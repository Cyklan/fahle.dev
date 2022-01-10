import React from "react";
import Window from "../../Window/Window";
import { getGithubRepos } from "../../../../data/fetchGithub";
import { useEffect } from "react";
import { RepoOverview } from "../../../../model/GithubAPI";
import GithubRepo from "../../GithubRepo/GithubRepo";
import DefinedWindowProps from "../DefinedWindowProps";
import RepositoryHighlight from "./RepositoryHighlight";

export default function GithubWindow({ onClose, title, updateZIndex }: DefinedWindowProps) {

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
    <Window
      updateZIndex={updateZIndex}
      title={title}
      onClose={onClose}
      size={{ x: 720, y: 500 }}
      initialPosition={{ x: 100, y: 150 }} >
      <h4>My Code</h4>
      <p>
        Now, my GitHub profile is not that filled as other peoples GitHub profile is.
        I have a lot of projects, but most of them don't make it out of the prototyping phase, but
        the ones that do I put online. I'd also like to highlight some of them before showing the rest.<br/>
      </p>
      <RepositoryHighlight title="Songify" link="https://github.com/Songify-Rocks/Songify">
        Songify is a desktop application built around Spotify and other music streaming services.
        It is targeted to live streamers and gives them the ability to show what they are listening to.
        It ties in with a web application, called the "<a target="_blank" rel="noreferrer" href="github.com/songify-rocks/Songify-Widget">Widget</a>", 
        which is a small web app that shows the song in a more unified way.
      </RepositoryHighlight>
      <RepositoryHighlight title="PNGEverything" link="https://github.com/Cyklan/PNGeverything">
        PNGEverything is a web application i wrote for the <a target="_blank" rel="noreferrer" href="https://itch.io/jam/the-tool-jam">The Tool Jam</a>.
        It does exactly what you might think it does: It takes a file, any file and turns it into a PNG <i>(yes, you can convert it back)</i>.
        For this I implemented the PNG file format from scratch, mostly because there is no TypeScript implementation.
        Using a canvas was unreliable, so that was my only option. The png algorithm works (kinda). Windows Image viewer supports works, but that's just about it.<br/>
        Still, it was a fun project to work on.
      </RepositoryHighlight>
      <RepositoryHighlight title="System Irrelevant" link="https://github.com/CodeArcade/System-Irrelevant">
        System Irrelevant is a game I made with a friend for a <a target="_blank" rel="noreferrer" href="https://itch.io/jam/brackeys-6">Game Jam</a>.
        The theme was "Let There Be Chaos", so we made a 
      </RepositoryHighlight>
      <br/>
      <h4><a href="https://github.com/Cyklan" target="_blank" rel="noreferrer">My Github</a></h4>
      {repoElements}
    </Window>
  );
}