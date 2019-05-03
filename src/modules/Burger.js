import React from 'react';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active: false
    }
  }
  toggle = (e) => {
    this.setState({active: !this.state.active});
  }
  render() {
    let target = document.getElementById('navbar');
    if ( target ) {
      if ( target.classList.contains('is-active') && !this.state.active ) {
        target.classList.remove('is-active');
      } else if ( !target.classList.contains('is-active') && this.state.active ) {
          target.classList.add('is-active');
      }
    }

    return (
      <div className={"navbar-burger burger" + (this.state.active ? ' is-active' : '')} onClick={this.toggle} >
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
