import React from 'react';
import { Nav, Header, About, Portfolio, Resume, Contact, Footer } from './layout'

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
