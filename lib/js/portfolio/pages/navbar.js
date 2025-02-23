import React from 'react';
import Burger from '../widgets/burger'
import smoothScroll from '../widgets/smooth-scroll'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.burgerNode = React.createRef()
        this.backgroundChangePosition = 600

        this.state = {
            transparent: window.scrollY < this.backgroundChangePosition
        };

        this.handleScroll = () => {
            this.setState({
                transparent: window.scrollY < this.backgroundChangePosition
            })
        }
    }

    handleBurger() {
        this.burgerNode.current.setState({active: false})
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <nav className={"navbar is-fixed-top" + (this.state.transparent ? ' is-transparent' : '')}>
                <div className="navbar-brand">
                    <a onClick={e => {
                        this.handleBurger()
                        smoothScroll(e)
                    }} className="navbar-item" href="#home">
                        <img src="/assets/logo.png" alt="logo" id={"nav-logo"}/>
                    </a>
                    <Burger target="navbar" ref={this.burgerNode}/>
                </div>
                <div id="navbar" className="navbar-menu animated fadeInRight">
                    <div className="navbar-end">
                        <a onClick={e => {
                            this.handleBurger()
                            smoothScroll(e)
                        }} className="navbar-item" href="#home">Home</a>
                        <a onClick={e => {
                            this.handleBurger()
                            smoothScroll(e)
                        }} className="navbar-item" href="#about">About</a>
                        <a onClick={e => {
                            this.handleBurger()
                            smoothScroll(e)
                        }} className="navbar-item" href="#projects">Projects</a>
                        <a onClick={e => {
                            this.handleBurger()
                            smoothScroll(e)
                        }} className="navbar-item" href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
        );
    }
}
