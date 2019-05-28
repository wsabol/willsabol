import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props =>
  <footer className="footer">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-narrow has-text-centered">
          <a className="button is-large is-rounded" href="https://minds.com/willsabol" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="brain" />
          </a>
        </div>
        <div className="column is-narrow has-text-centered">
          <a className="button is-large is-rounded" href="https://www.linkedin.com/in/willsabol" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
        </div>
        <div className="column is-narrow has-text-centered">
          <a className="button is-large is-rounded" href="https://github.com/wsabol" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </div>
        <div className="column is-narrow has-text-centered">
          <a className="button is-large is-rounded" href="mailto:wsabol39@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </div>
      </div>
      <div className="columns is-centered is-vcentered" style={{marginTop: '1.6em'}}>
        <div className="column is-narrow has-text-centered">
          <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">
            <img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="180" />
          </a>
        </div>
        <div className="column is-narrow has-text-centered">
          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            <img width="60" alt="Made with React" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />
          </a>
        </div>
      </div>
    </div>
  </footer>
