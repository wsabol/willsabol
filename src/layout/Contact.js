import React from 'react'
import ScrollComponent from '../modules/ScrollComponent'
import ContactForm from '../modules/ContactForm.js'

export default props =>
  <section className="section has-background-primary" id="contact">
    <ScrollComponent className="container">
      <div className="section-heading has-text-centered">
        <h3 className="title has-text-black-darker">Get in touch</h3>
      </div>

      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="box">
            <ContactForm />
          </div>
        </div>
      </div>

    </ScrollComponent>
  </section>
