import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <p>App</p>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
