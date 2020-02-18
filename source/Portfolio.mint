component Portfolio {
    style portfolio {
        margin-top: 10vh;
        padding-top: 40px;
        min-height: 100vh;
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
                 title="url shortener 'deinl.ink'"
                 description="deinl.ink (ger: 'Your Link') is a url shortener written in node.js, 
                 with a React.js frontend. It automatically generates URLs with an 
                 unpredictable pattern, while keeping the database clean by checking for duplicates. 
                 You also get the ability to see the unshortened link that has been 
                 shortened with deinl.ink."
                 direction="left"
                 github="https://github.com/cyklan/deinl.ink-backend"
                 url="https://www.deinl.ink"
                 />
                 <PortfolioItem
                 title="League A-Z Tracker"
                 direction="right"
                 github="https://github.com/Cyklan/LOL-A-Z-Challenge" 
                 url="https://cyklan.de/league/"
                 description="A live streamer I like to watch decided to challenge himself.
                 One of his most played games is 'League of Legends', and he wanted to win a round
                 of that game with every playable character in alphabetical order.
                 His viewers also wanted some kind of statistics, and tracking all that by hand is
                 very tedious. So, to save time I created a full stack application that communicates
                 with the 'League of Legends' API and displays stats about every played character.
                 All stored information is kept in a MySQL database."
                 />
                 <PortfolioItem
                 title="Share [work in progress]"
                 direction="left"
                 github="https://github.com/Lokk-In/share"
                 description="Share is a single use, time limited file sharing service. The API is written in C#,
                 while the client-side app is written with react. Its main focus is anonymity. No info about the
                 uploader will be kept, except for the file name. Once a file has been downloaded, it will be deleted shortly after.
                 Files are also only stored for a set amount of time. If the file wasn't downloaded before the time has run out,
                 it will also be deleted." 
                 />
            </div>
        </div>
    }
}