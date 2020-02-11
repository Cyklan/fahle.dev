component Portfolio {
    style portfolio {
        margin-top: 10vh;
        padding-top: 40px;
    }
    
    style headline {
        color: var(--main-color);
        font-family: 'Cambay', sans-serif;
        font-size: 48px;
    }

    style container {
        max-width: 60%;
        margin: auto;
    }

    fun render(): Html {
        <div::portfolio id="portfolio">
            <h1::headline>"portfolio"</h1>
            <div::container>
                <PortfolioItem
                 title="url shortener \"deinl.ink\"" 
                 description="deinl.ink is a url shortener written in node.js, with a React.js front end. It automatically generates URLs with a unpredictable pattern, while keeping the database clean by checking for duplicates. You also get the ability to see the full version of a link that has been shortened with deinl.ink."
                 direction="left"
                 github="https://github.com/cyklan/deinl.ink-backend"
                 />
            </div>
        </div>
    }
}