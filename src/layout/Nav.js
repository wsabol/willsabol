import React from 'react';
import Burger from '../modules/Burger'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transparent: this.isTransparent()
    };
  }
  componentDidMount() {
    window.onresize = this.handleWindowChange;
    window.onscroll = this.handleWindowChange;
  }
  isTransparent = () => window.scrollY < window.innerHeight / 2;
  handleWindowChange = (e) => {
    this.setState({transparent: this.isTransparent()})
  }

  render() {
    return (
      <nav className={"navbar is-fixed-top animated fadeInRight"+(this.state.transparent ? ' is-transparent' : '')}>
        <div className="navbar-brand">
          <Burger />
        </div>
        <div id="navbar" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="#about">About</a>
            <a className="navbar-item" href="#portfolio">Lab</a>
            <a className="navbar-item" href="#resume">Resume</a>
            <a className="navbar-item" href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
}
