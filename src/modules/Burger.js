import React from 'react';

export default class extends React.Component {
  constructor(props){
    super(props);
    this.target = null
    this.targetId = props.target
    this.state = {
      active: false
    }
  }
  componentDidMount() {
    this.target = document.getElementById(this.targetId)
  }
  toggle = (e) => {
    this.target.classList.remove('animated')
    this.setState({active: !this.state.active});
  }
  render() {
    if ( this.target ) {
      if ( this.target.classList.contains('is-active') && !this.state.active ) {
        this.target.classList.remove('is-active');
      } else if ( !this.target.classList.contains('is-active') && this.state.active ) {
        this.target.classList.add('is-active');
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
