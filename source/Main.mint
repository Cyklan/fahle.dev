component Main {
  style app {
    max-width: 100vw;
    max-height: 100vh;
    text-align: center;
  }

  style header {
    background: linear-gradient(130deg,#0f2027,#203a43,#2c5364);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  fun render: Html {
    <div::app>
      <header::header>
        <Title title="fahle.dev"/>
        <div>
        <Icon 
          title="Github" 
          to="https://www.github.com/cyklan" 
          icon="fab fa-github-alt" />
        <Icon 
          title="Email me" 
          to="mailto://nils@fahle.dev" 
          icon="fas fa-envelope" />
        <Icon 
          title="Twitch" 
          to="https://twitch.tv/cyklan" 
          icon="fab fa-twitch" />
        <Icon 
          title="Instagram" 
          to="https://instagram.com/cyklan" 
          icon="fab fa-instagram" />
        </div>
      </header>
    </div>
  }
}
