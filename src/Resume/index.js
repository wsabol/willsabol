import React from 'react'
import ScrollComponent from '../ScrollComponent'
import 'bulma-timeline/dist/css/bulma-timeline.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      work: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_SERVER+"api/work_experience.json.php")
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
                          <span className="tag is-danger">{new Date(w.start_date).getFullYear()}</span>
                        </ScrollComponent> : ''
                      ) : '' }
                      <ScrollComponent className={"timeline-item is-"+w.line_type}>
                        <div className={"timeline-marker is-"+w.marker_type+(w.icon === '' ? '' : ' is-icon')}>
                          {w.icon === '' ? '' : <FontAwesomeIcon icon={w.icon} />}
                        </div>
                        <div className="timeline-content">
                          <p className="heading" style={{fontSize:'12px',marginBottom:'2px'}}>{w.date_formatted}</p>
                          <p style={{marginBottom:'4px'}}>{w.content}</p>
                          <p>{w.skills.split(',').map((s, j) =>
                            <span key={j} className="tag" style={{fontSize:'13px'}}>{s}</span>
                          )}</p>
                        </div>
                      </ScrollComponent>
                    </React.Fragment>
                  )
                })
              }
            </div>
          }
          <div className="section-footer has-text-centered">
            <h3 className="title has-text-black-darker">Learn More</h3>
            <div className="buttons">
              <a className="button is-info is-rounded button-special"
                target="_blank" rel="noopener noreferrer"
                href="https://drive.google.com/open?id=0B19WlCTcwWR9cDFpSm9mUElJdlU"
              >
                <span className="icon">
                  <FontAwesomeIcon icon="file" />
                </span>
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
