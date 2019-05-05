import React from 'react'

export default class extends React.Component {
  constructor(props){
    super(props)
    this.node = React.createRef()
    this.fps = props.fps || 60
    this.speed = props.speed || 0.5
    this.tagName = props.tagName || 'div';
    this.opacity = 0
    this.handler = null;
    this.state = {
      ...props
    };
  }
  componentWillReceiveProps(newProps) {
    if ( newProps.children !== this.state.children ) {
      this.setState({children: newProps.children});
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.show);
    this.show()
  }
  incFade = () => {
    this.opacity += (1 / (this.speed*this.fps))
    if (this.opacity < 1) {
      this.node.current.style.opacity = this.opacity;
      setTimeout(this.incFade, 1000 / this.fps);
    } else {
      this.node.current.style.opacity = 1
    }
  }
  show = () => {
    const rect = this.node.current.getBoundingClientRect();
    if ( rect.top < window.innerHeight - 80 ) {
      this.incFade()
      window.removeEventListener('scroll', this.show);
    } else {
      this.node.current.style.opacity = 0;
    }
  }
  render() {
    const CustomTag = `${this.tagName}`;
    return <CustomTag className={this.state.className} ref={this.node}>
      {this.state.children}
    </CustomTag>
  }
}
