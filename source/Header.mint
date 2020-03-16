component Header {

    style portfolioDiv {
        margin-top: 40px;
        line-height: 45px;
    }

    style portfolioLink {
        color: var(--main-color);
        font-size: 36px;
        font-weight: 600;
        cursor: pointer;
        text-transform: lowercase;
    }

    style githubLink {
        text-decoration: none;
        font-weight: 600;
        font-size: 30px;
    }

    fun scrollToPortfolio(): Void {
        `document.getElementById("portfolio").scrollIntoView(true)`
    }

    fun render(): Html {
        <div>
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
            <div::portfolioDiv>
                <span::portfolioLink onClick={scrollToPortfolio}>"go to portfolio"</span><br />
                <a::portfolioLink::githubLink href="https://github.com/cyklan/fahle.dev" target="_blank">"View me on Github"</a>
            </div>
        </div>
    }
}