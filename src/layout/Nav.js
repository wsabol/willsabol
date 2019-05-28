import React from 'react';
import Burger from '../modules/Burger'
import { smoothScroll } from '../App'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.burgerNode = React.createRef()
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
  navClick = (e) => {
    this.burgerNode.current.setState({active: false})
    smoothScroll(e)
  }

  render() {
    return (
      <nav className={"navbar is-fixed-top"+(this.state.transparent ? ' is-transparent' : '')}>
        <div className="navbar-brand">
          <a onClick={this.navClick} className="navbar-item" href="#home">
            <img src="/assets/logo.png" alt="logo" />
          </a>
          <Burger target="navbar" ref={this.burgerNode} />
        </div>
        <div id="navbar" className="navbar-menu animated fadeInRight">
          <div className="navbar-end">
            <a onClick={this.navClick} className="navbar-item" href="#about">About</a>
            <a onClick={this.navClick} className="navbar-item" href="#portfolio">Lab</a>
            <a onClick={this.navClick} className="navbar-item" href="#resume">Resume</a>
            <a onClick={this.navClick} className="navbar-item" href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
}
