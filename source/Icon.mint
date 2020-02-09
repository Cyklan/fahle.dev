component Icon {
    property title: String = "Icon"
    property to: String = "#"
    property icon: String = ""

    style fa {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        color: var(--main-color);
        font-size: 40px;
        text-decoration: none;
    }

    fun render: Html {
        <a href={to} target="_blank" rel="noopener noreferrer" title={title}>
            <i::fa class={icon} />
        </a>
    }
}