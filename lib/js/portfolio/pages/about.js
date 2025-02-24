import React from 'react';
import axios from 'axios';
import Experience from '../widgets/experience';
import Education from '../widgets/education';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkedin: '',
            experienceIsLoading: true,
            experience: [],
            educationIsLoading: true,
            education: []
        };

        this.imgSize = 260;
    }

    componentDidMount() {
        axios.get('/api/experience/')
            .then(response => {
                response = response.data

                this.setState({
                    experienceIsLoading: false,
                    experience: response.data.experience,
                    linkedin: response.data.linkedin,
                });
            })

        axios.get('/api/education/')
            .then(response => {
                response = response.data

                this.setState({
                        educationIsLoading: false,
                        education: response.data.education
                    });
            })
    }

    render() {
        return (
            <section className="section section-border has-background-offset" id={this.props.id}>

                <div className="container">
                    <h3 className={'subtitle'}>About</h3>
                    <div className="columns is-multiline is-5-desktop mb-5">
                        <div className="column is-full-tablet is-7-desktop">
                            <h2 className={'title'}>Will Sabol</h2>
                            <article>
                                <p>I'm a product manager and full-stack developer with over a decade of experience
                                    in web development and software engineering. My expertise spans the entire product lifecycle,
                                    from conceptualization and design to development, deployment, and scaling.</p>

                                <p>With a Bachelor’s degree in Mechanical Engineering, I bring a strong analytical mindset
                                    to problem-solving. My background in data analytics, mathematical modeling, and systems
                                    thinking allows me to approach software development with precision and efficiency,
                                    ensuring that technical solutions align seamlessly with business objectives.</p>

                                <p>I am passionate about bringing products to life — transforming ideas into functional,
                                    user-centric applications that drive value. Whether leading cross-functional teams,
                                    optimizing workflows, or architecting scalable systems, I thrive at the intersection
                                    of business needs, user needs, and technical constraints. </p>
                            </article>
                        </div>
                        <div className={"column is-flex is-flex-direction-row is-justify-content-center"}>
                            <div className="card img-headshot" style={{
                                width: this.imgSize + 'px',
                                height: this.imgSize + 'px',
                            }}>
                                <div className="card-image">
                                    <figure className="image is-square">
                                        <img alt={"headshot"} src={"/assets/images/will-professional-square.jpg"}/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column is-full-tablet is-7-desktop">
                            <div className="card about-card">
                                <div className="card-content">
                                    <h3 className={'subtitle mb-4'}>Experience Highlights</h3>
                                    <hr className={'mt-0'}/>
                                    <div className="content">
                                        {
                                            this.state.experienceIsLoading ? null :
                                                <Experience data={this.state.experience}/>
                                        }
                                    </div>
                                </div>
                                {
                                    !this.state.linkedin ? null :
                                        <footer className="card-footer">
                                            <div className="card-footer-item">
                                                <a className={"has-text-info-40 on-hover-underline"} target={"_blank"}
                                                   href={this.state.linkedin}>
                                                    See more on LinkedIn
                                                </a>
                                            </div>
                                        </footer>
                                }
                            </div>

                            <div className="card about-card">
                                <div className="card-content">
                                    <h3 className={'subtitle mb-4'}>Education</h3>
                                    <hr className={'mt-0'}/>
                                    <div className="content">
                                        {
                                            this.state.educationIsLoading ? null :
                                                <Education data={this.state.education}/>
                                        }
                                    </div>
                                </div>
                                {
                                    !this.state.linkedin ? null :
                                        <footer className="card-footer">
                                            <div className="card-footer-item">
                                                <a className={"has-text-info-40 on-hover-underline"} target={"_blank"}
                                                   href={this.state.linkedin}>
                                                    See more on LinkedIn
                                                </a>
                                            </div>
                                        </footer>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
