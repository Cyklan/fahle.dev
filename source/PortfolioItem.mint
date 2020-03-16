component PortfolioItem {
    property title: String = "Portfolio Item"
    property image: String = ""
    property description: String = ""
    property direction: String = "left"
    property github: String = ""
    property url: String = ""

    style item {
        color: var(--main-color);
        margin-bottom: 50px;
        text-align: #{direction};
    }

    style title {
        border-bottom: 5px solid var(--main-color);
        font-family: "Cambay";
    }

    style description {
        margin: 10px 0;
        font-size: 20px;
        font-family: "Cambay", sans-serif;
        font-weight: 500;
        text-transform: lowercase;
    }

    style github {
        color: var(--main-color);
        text-decoration: none;
        text-transform: lowercase;
        if (direction == "right") {
            margin-left: 20px;
        } else {
            margin-right: 20px;
        }
    }

    fun render(): Html {
        <div::item class={direction}>
            <h1>
                <span::title><{title}></span>
            </h1>
            <p::description><{description}></p>

            if (url != "") {
                <a::github href={url} target="_blank" rel="noopener noreferrer">"Try it out"</a>
            }

            if (github != "") { 
                <a::github href={github} target="_blank" rel="noopener noreferrer">"View on GitHub"</a>
            } else {
                <a::github>"Closed source :("</a>
            }
        </div>
    }
}