import React from 'react';
import { render } from 'react-dom';
import 'bulma/css/bulma.css';
import App from './App'
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

serviceWorker.register();
