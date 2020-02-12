component Main {
  style app {
    width: 100vw;
    max-width: 100vw;
    text-align: center;
    margin-bottom: 50px;
  }

  style header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  fun render: Html {
    <div::app>
      <header::header>
        <Header />
      </header>
      <Portfolio />
    </div>
  }
}
