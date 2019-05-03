import React from 'react'

export default class extends React.Component {
  constructor(props){
    super(props)
    this.node = React.createRef()
    this.speed = 0.5
    this.opacity = 0
    this.tagName = props.tagName || 'div';
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
    if (this.opacity < 1) {
      this.opacity += .02;
      setTimeout(this.incFade,10);
    }
    this.node.current.style.opacity = this.opacity;
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
