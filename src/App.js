import React from 'react';
import EasingFunctions from './EasingFunctions'
import { Nav, Header, About, Portfolio, Resume, Contact, Footer } from './layout'
import './css/animate.css';
import './css/App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFile, faEnvelope, faBrain, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
library.add(faBriefcase)
library.add(faGraduationCap)
library.add(faEnvelope)
library.add(faBrain)
library.add(faFile)
library.add(fab)

const smoothScroll = (e) => {
  e.preventDefault()
  const id = e.currentTarget.getAttribute('href').slice(1)
  const targetEl = document.getElementById(id)
  if(!targetEl) return;

  const html = document.querySelector('html');
  const body = document.querySelector('body');

  var t = 0;
  const fps = 60,
    finish = targetEl.offsetTop - 52,
    start = html.scrollTop, // pixel
    dir = finish>start?1:-1


  function move() {
    let fraction = EasingFunctions.easeInOutQuint(t);
    t += 1/fps;
    let position = fraction * (finish - start) + start
    if (position*dir >= finish*dir || t >= 1) {
      clearInterval(handler);
      html.scrollTop = finish;
      body.scrollTop = finish;
      return;
    }
    html.scrollTop = position;
    body.scrollTop = position;
  }
  var handler = setInterval(move, 1000 / fps);
}
export { smoothScroll, library }

export default props =>
  <React.Fragment>
    <Nav />
    <Header
      greeting="Hi"
      title="I'm Will"
      subtitle="a Web Architect"
     />
    <About id="about" />
    <Portfolio id="portfolio" />
    <Resume id="resume" />
    <Contact id="contact" />
    <Footer />
  </React.Fragment>
