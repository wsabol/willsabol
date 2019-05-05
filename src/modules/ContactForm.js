import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({action: 'email', ...this.state});
    if ( this.state.name.trim() !== '' && this.state.email.trim() !== '' ) {
      fetch(process.env.REACT_APP_API_SERVER+"/api/contact.json.php", {
        method: 'post',
        body: JSON.stringify({action: 'email', ...this.state})
      })
        .then(res => res.json())
        .then((res) => {
            console.log(res);
            this.setState({ mailSent: res.sent });
            window.setTimeout(() => this.setState({mailSent: false}), 2000);
          },
          (error) => {
            console.error(error)
          }
        )
    }
  }
  render() {
    return (
      <div className="columns is-vcentered">
        <div className={"column is-full " + (this.state.mailSent ? 'animated fadeInUp' : 'hidden')} >
          <h1 className="has-text-success has-text-centered title" >Thank you!</h1>
        </div>
        <div className="column is-full">
          <form action="#" className={this.state.mailSent ? 'is-invisible' : 'animated fadeIn'} >
            <div className="field">
              <label htmlFor="in_name" className="label is-hidden-mobile">Name</label>
              <div className="control">
                <input id="in_name" className="input" type="text" placeholder="Name"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="in_email" className="label is-hidden-mobile">Email</label>
              <div className="control has-icons-left">
                <input id="in_email" className="input" type="email" placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon="envelope" />
                </span>
              </div>
            </div>

            <div className="field">
              <label htmlFor="in_message" className="label is-hidden-mobile">Message</label>
              <div className="control">
                <textarea id="in_message" className="textarea" placeholder="Message"
                  onChange={e => this.setState({ message: e.target.value })}
                  value={this.state.message}
                ></textarea>
              </div>
            </div>

            <div className="field is-grouped has-text-centered">
              <div className="control"
                style={{margin: '0 auto'}}
              >
                <button className="button is-link is-medium is-rounded button-special"
                  onClick={e => this.handleFormSubmit(e)}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
