import Window from "../../Window/Window";
import DefinedWindowProps from "../DefinedWindowProps";

export default function AboutMeWindow({onClose, title, updateZIndex}: DefinedWindowProps) {
  return (
    <Window 
      title={title} 
      onClose={onClose} 
      updateZIndex={updateZIndex}
      size={{x: 720, y: 500}}
      initialPosition={{x: 100, y: 150}}>
      <h4>Hi there 👋</h4>
      <p>I'm Nils, a software engineer from Germany. In my free time I write silly web apps, play board games and record audio books.</p>

      <h4>About my Programming</h4>
      <p>
        In 2021 I graduated from Johann-Philipp-Reis-Schule and became a certified 
        "IT specialist for application development" (Fachinformatiker - Anwendungsentwicklung). 
        But that's a stupid name, so I call myself a "software engineer". I usually work with
        TypeScript and React <i>(this website is just that!)</i>, but I also have experience with
        C# and Java. I'm also familiar with SQL databases. For more information of that you can 
        check out my GitHub <i>(it's right there on the desktop.)</i>.
      </p>

      <h4>About board games</h4>
      <p>
        I'm a big fan of board games, especially the big ones. I'm currently playing Gloomhaven with a group of friends.
        I hope we're done by 2023 (for reference, this was written in 2021). But in general, if you want to recommend
        a board game to me, just send me an email.
      </p>

      <h4>About audio books</h4>
      <p>
        Sometimes I record audio books (in german. Sorry non-germans.). I'm currently recording the book "Solo Leveling"
        by Chugong. You can listen to some examples of my work in the built-in audio player.<br/>
        My microphone setup:
        <ul>
          <li>Shure SM-7B</li>
          <li>Focusrite Scarlett Solo 3rd Gen</li>
        </ul>
      </p>
    </Window>
  )
}