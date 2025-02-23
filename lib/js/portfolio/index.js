import React from 'react';
import Navbar from './pages/navbar';
import Hero from './pages/hero';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Footer from './pages/footer';

export default () =>
    <>
        <Navbar/>
        <Hero
            title="Will Sabol"
            subtitles={[
                "a product person",
                "an engineer",
                "a problem solver",
                "a leader"
            ]}
        />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
        <Footer />
    </>
