component Title {
    property title: String = "fahle.dev"

    style top {
        position: relative;
        color: transparent;
        font-family: 'Cambay', sans-serif;
        font-size: 10vw;
        font-weight: 700;
        letter-spacing: -0.02em;
        line-height: 1.03em;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    style segment {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        color: var(--main-color);
        pointer-events: none;
    }

    style one {
        -webkit-mask-image: linear-gradient(black 25%, transparent 25%);
        mask-image: linear-gradient(black 25%, transparent 25%);
        animation: deconstructed1 12s infinite;
    }

    style two {
        -webkit-mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);
        mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);
        animation: deconstructed2 12s infinite;
    }

    style three {
        -webkit-mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);
        mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);
        animation: deconstructed3 12s infinite;
    }

    style four {
        -webkit-mask-image: linear-gradient(transparent 75%, black 75%);
        mask-image: linear-gradient(transparent 75%, black 75%);
        animation: deconstructed4 12s infinite;
    }

    fun render: Html {
        <div::top>
            <{title}>
    	    <div::segment::one><{title}></div>
            <div::segment::two><{title}></div>
            <div::segment::three><{title}></div>
            <div::segment::four><{title}></div>
        </div>
    }
}