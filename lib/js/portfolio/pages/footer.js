import React from 'react';
import smoothScroll from '../widgets/smooth-scroll'

export default props =>
    <footer className="footer section-border has-background-light">
        <div className="container">
            <div className="columns is-centered mb-1">
                <div className="column is-narrow">
                    <a className="button is-rounded" href="https://www.linkedin.com/in/willsabol"
                       target="_blank" rel="noopener noreferrer">
                        <span className={'icon'}><i className={'fa fab fa-linkedin'}></i></span>
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className="column is-narrow">
                    <a className="button is-rounded" href="https://github.com/wsabol" target="_blank"
                       rel="noopener noreferrer">
                        <span className={'icon'}><i className={'fa fab fa-github'}></i></span>
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
            <div className="navbar is-transparent is-justify-content-center is-column-gap-3 mb-3" style={{
                backgroundColor: 'transparent'
            }}>
                <a className={'navbar-item'} onClick={smoothScroll} href="#home">Home</a>
                <a className={'navbar-item'} onClick={smoothScroll} href="#about">About</a>
                <a className={'navbar-item'} onClick={smoothScroll} href="#projects">Projects</a>
                <a className={'navbar-item'} onClick={smoothScroll} href="#contact">Contact</a>
            </div>
            <div className="has-text-centered has-text-grey">© {new Date().getFullYear()} Will Sabol</div>
        </div>
    </footer>
