import React from 'react'
import smoothScroll from '../widgets/smooth-scroll'
import { Typewriter } from 'react-simple-typewriter';

export default props => (
    <section className="hero is-fullheight" id="home">
        <div className="hero-body animated fadeIn">
            <div className="container">
                <h1 className="title is-1 mb-2">{props.title}</h1>
                <h2 className="subtitle is-3 mb-5">
                    I am{" "}
                    <Typewriter
                        words={props.subtitles}
                        loop={0} // Infinite loop
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <a onClick={smoothScroll} className="button is-primary is-rounded is-uppercase" href="#about">
                    See More
                </a>
            </div>
        </div>
        <div className="hero-image animated fadeIn">
        </div>
    </section>
)
