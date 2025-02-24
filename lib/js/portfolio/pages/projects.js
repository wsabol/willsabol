import React from 'react';
import axios from 'axios';
import Notification from '../widgets/notification';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            github: '',
            projectsIsLoading: true,
            projects: [],
        };
    }

    componentDidMount() {
        axios.get('/api/projects/')
            .then(response => {
                response = response.data

                this.setState({
                    projectsIsLoading: false,
                    projects: response.data.projects,
                    github: response.data.github,
                });
            })
    }

    singeProject(project) {
        return (
            <div className={'column is-6-tablet is-4-desktop'}>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={project.logo}
                                 alt={project.title}
                            />
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-5 mb-2">{project.title}</p>
                        <div className="content">{project.description}</div>
                    </div>
                    {project.links ?
                        <footer className="card-footer">
                            {project.links.map(lnk => <div className="card-footer-item">
                                <a className="has-text-info-40 on-hover-underline" target="_blank" href={lnk.url}>
                                    {lnk.text}
                                </a>
                            </div>)
                            }
                        </footer> :
                        null
                    }
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className="section section-border has-background-dark has-text-white" id={this.props.id}>

                <div className="container">
                    <div className="columns is-multiline is-5-desktop mb-5">
                        <div className="column is-full-tablet is-7-desktop">
                            <h2 className={'title has-text-white'}>Project Lab</h2>
                            <article>
                                <p>Beyond my professional work, I have dedicated significant time to building and refining
                                    personal projects that push the boundaries of my technical and creative abilities.
                                    These projects are a testament to my passion for product development, problem-solving, and continuous learning.</p>

                                <p>From concept to execution, I have independently designed, developed, and optimized these solutions,
                                    ensuring they are not only functional but also scalable and user-friendly. </p>
                            </article>
                        </div>
                    </div>
                    {
                        this.state.projectsIsLoading ? null : (
                            this.state.projects.length === 0 ?
                                <Notification
                                    color={'info'}
                                    text={'No projects'}/> :
                                <div className={'columns is-multiline is-6'}>
                                    {this.state.projects.map(p => this.singeProject(p))}
                                </div>
                        )
                    }
                </div>
            </section>
        )
    }
}
