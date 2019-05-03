import React from 'react'
import ScrollComponent from '../modules/ScrollComponent'
import 'bulma-timeline/dist/css/bulma-timeline.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
library.add(faBriefcase)
library.add(faGraduationCap)

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(window.apiServer + "/api/work_experience.json.php")
      .then(res => res.json())
      .then((work) => {
          this.setState({ isLoaded: true, work });
        },
        (error) => {
          console.error(error)
        }
      )
  }

  render() {

    return (
      <section className="section" id="resume">
        <div className="section-heading has-text-centered">
          <h3 className="title has-text-black-darker">Work Experience</h3>
        </div>
        <div className="container">
          { !this.state.isLoaded ? '...' :
            <div className="timeline is-centered">
              <header className="timeline-header">
                <span className="tag is-medium is-info">Now</span>
              </header>
              {
                this.state.work.map((w, i, arr) => {
                  return (
                    <React.Fragment key={i} >
                      { i > 0 ? (
                        new Date(arr[i-1].start_date).getYear() !== new Date(w.start_date).getYear() ?
                        <ScrollComponent tagName="header" className="timeline-header">
                          <span className="tag is-link">{new Date(w.start_date).getFullYear()}</span>
                        </ScrollComponent> : ''
                      ) : '' }
                      <ScrollComponent className={"timeline-item is-"+w.line_type}>
                        <div className={"timeline-marker is-"+w.marker_type+(w.icon === '' ? '' : ' is-icon')}>
                          {w.icon === '' ? '' : <FontAwesomeIcon icon={w.icon} />}
                        </div>
                        <div className="timeline-content">
                          <p className="heading">{w.date_formatted}</p>
                          <p>{w.content}</p>
                          <p>{w.skills.split(',').map((s, j) =>
                            <span key={j} className="tag">{s}</span>
                          )}</p>
                        </div>
                      </ScrollComponent>
                    </React.Fragment>
                  )
                })
              }
            </div>
          }
        </div>
      </section>
    )
  }
}
