import React from 'react'
import axios from 'axios';
import Notification from '../widgets/notification';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            isSending: false,
            isSent: false,
            response_message: '',
            response_status: '',
        }
    }

    handleFormSubmit() {
        this.setState({
            name: this.state.name.trim(),
            email: this.state.email.trim(),
            message: this.state.message.trim(),
        }, () => {
            if (!this.state.name) {
                this.setState({
                    isSending: false,
                    isSent: false,
                    response_message: 'name is blank',
                    response_status: 'error',
                })
                return;
            }

            if (!this.state.email) {
                this.setState({
                    isSending: false,
                    isSent: false,
                    response_message: 'email is blank',
                    response_status: 'error',
                })
                return;
            }

            if (!this.state.message) {
                this.setState({
                    isSending: false,
                    isSent: false,
                    response_message: 'message is blank',
                    response_status: 'danger',
                })
                return;
            }

            this.setState({
                isSending: true,
                isSent: false,
                response_message: '',
                response_status: '',
            }, () => {
                axios.post('/api/contact/', {
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message,
                })
                    .then(response => {
                        this.setState({
                            isSending: false,
                            isSent: true,
                            response_message: 'Thank you for your message!',
                            response_status: 'success',
                        })
                    })
                    .catch(error => {
                        console.error(error.response.data);
                        this.setState({
                            isSending: false,
                            isSent: false,
                            response_message: error.response.data.message,
                            response_status: 'danger',
                        })
                    })
            })
        })
    }

    render() {
        return (
            <section className="section section-border" id={this.props.id}>
                <div className="container">
                    <h3 className={'title has-text-centered'}>Contact</h3>
                    <div className="columns is-justify-content-center">
                        <div className="column is-6-desktop">
                            <div className="box">
                                {this.state.isSent ?
                                    <Notification color={this.state.response_status}
                                                  text={this.state.response_message}
                                                  fade_in={true}
                                    /> :
                                    <form action="#"
                                          onSubmit={(e) => {
                                              e.preventDefault()
                                              this.handleFormSubmit()
                                          }}
                                    >
                                        <div className="field">
                                            <label htmlFor="name" className="label is-hidden-mobile">Name</label>
                                            <div className="control">
                                                <input id="name" className="input" type="text" placeholder="Name"
                                                       value={this.state.name}
                                                       onChange={e => this.setState({name: e.target.value})}
                                                       disabled={this.state.isSending}
                                                       required
                                                />
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label htmlFor="email" className="label is-hidden-mobile">Email</label>
                                            <div className="control has-icons-left">
                                                <input id="email" className="input" type="email"
                                                       placeholder="Email"
                                                       value={this.state.email}
                                                       onChange={e => this.setState({email: e.target.value})}
                                                       disabled={this.state.isSending}
                                                       required
                                                />
                                                <span className="icon is-small is-left"><i
                                                    className={"fa fa-envelope"}></i></span>
                                            </div>
                                        </div>

                                        <div className="field">
                                            <label htmlFor="message" className="label is-hidden-mobile">Message</label>
                                            <div className="control">
                                                <textarea id="message" className="textarea" placeholder="Message"
                                                          onChange={e => this.setState({message: e.target.value})}
                                                          value={this.state.message}
                                                          disabled={this.state.isSending}
                                                          required
                                                ></textarea>
                                            </div>
                                        </div>

                                        {!this.state.response_message ? null :
                                            <Notification color={this.state.response_status}
                                                          text={this.state.response_message}/>
                                        }

                                        <div className="has-text-centered">
                                            <button type={'submit'}
                                                    className={"button is-primary is-rounded  is-uppercase"}
                                                    disabled={this.state.isSending}>
                                            <span className="icon">
                                                <i className={"fa fa-envelope"}></i>
                                            </span>
                                                <span>{this.state.isSending ? 'Sending' : 'Send'}</span>
                                            </button>
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
