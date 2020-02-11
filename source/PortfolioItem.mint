component PortfolioItem {
    property title: String = "Portfolio Item"
    property image: String = ""
    property description: String = ""
    property direction: String = "left"
    property github: String = ""

    style item {
        color: var(--main-color);
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
    }

    fun render(): Html {
        <div::item class={direction}>
            <h1>
                <span::title><{title}></span>
            </h1>
            <p::description><{description}></p>

            if (github != "") { 
                <a::github href={github}>"View on GitHub"</a>
            }
        </div>
    }
}