import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBrain } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope)
library.add(faBrain)
library.add(fab)

export default props =>
  <footer className="footer">
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="buttons">
          <a class="button is-medium is-rounded" href="https://minds.com/willsabol" target="_blank" without rel="noopener noreferrer">
            <FontAwesomeIcon icon="brain" />
          </a>
          <a class="button is-medium is-rounded" href="https://www.linkedin.com/in/will-sabol" target="_blank" without rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
          <a class="button is-medium is-rounded" href="https://github.com/wsabol" target="_blank" without rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a class="button is-medium is-rounded" href="mailto:hello@jethromay.com" target="_blank" without rel="noopener noreferrer">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </div>
      </div>
      <div  style={{marginTop: '2em'}}>
        <p>Proudly open source. Licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.</p>
      </div>
      <div className="columns is-centered is-vcentered" style={{marginTop: '1.6em'}}>
        <a href="https://bulma.io" target="_blank" without rel="noopener noreferrer">
          <img src="https://bulma.io/images/made-with-bulma--semiblack.png" alt="Made with Bulma" width="180" />
        </a>
        <a href="https://reactjs.org" target="_blank" without rel="noopener noreferrer">
          <img width="60" alt="Made with React" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" />
        </a>
      </div>
    </div>
  </footer>
