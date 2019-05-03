import React from 'react'
import ScrollComponent from '../modules/ScrollComponent'
import AppPie from '../modules/AppPie'
import ProfileCard from '../modules/ProfileCard'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id
    this.state = {
      profile: null,
      skills: null
    };
  }

  componentDidMount() {
    fetch(window.apiServer + "/api/profile.json.php")
      .then(res => res.json())
      .then((profile) => {
          this.setState({ profile });
        },
        (error) => {
          console.error(error)
        }
      )

    fetch(window.apiServer + "/api/skills_profile.json.php")
      .then(res => res.json())
      .then((skills) => {
          this.setState({ skills });
        },
        (error) => {
          console.error(error)
        }
      )
  }

  render() {
    const { profile, skills } = this.state;

    if ( skills !== null ) {
      let skills_sum = Object.values(skills).reduce((t, v) => t + v );
      for (const s of Object.keys(skills))
        skills[s] = 100 * skills[s] / skills_sum;
    }

    return (
      <section className="section" id={this.id}>
        <div className="section-heading has-text-centered">
          <h3 className="title">About</h3>
        </div>
        <ScrollComponent className="container">
          { profile === null ? 'Loading...' :
            <div className="columns is-multiline">
              <div className="column is-full-tablet is-7-desktop">
                <article>
                  <p>Full-stack developer with more than <strong>{new Date().getFullYear() - 2015} years</strong> of well-rounded experience
                  in web design and software engineering, extensive knowledge of modern Web techniques,
                  database management, and love for <strong>Music</strong> and coffee.</p>
                  <p>With BS in Mechanical Engineering, I have unique insight into <strong>data</strong> analytics,
                  signal processing, and systems thinking.</p>
                  <p>Looking for creators with great <strong>ideas</strong> aiming for long term success.</p>
                </article>
                { window.innerWidth < 1088 ? '' :
                  <ProfileCard {...profile} /> }
              </div>
              { window.innerWidth < 1088 ?
                <div className="column is-6-tablet">
                  <ProfileCard {...profile} />
                </div>
                : '' }
              <div className="column is-5-desktop is-6-tablet is-8-mobile is-offset-2-mobile">
                { skills === null ? '' :
                  <AppPie labels={Object.keys(skills)} series={Object.values(skills)} />
                }
              </div>
            </div>
          }
          <div className="section-footer has-text-centered">
            <h3 className="title has-text-black-darker">Get Social</h3>
            <div class="buttons">
              <a href="www.codepen.io/wsabol" target="_blank" rel="noopener noreferrer" class="button is-large is-link">CodePen.io</a>
              <a href="www.github.com/wsabol" target="_blank" rel="noopener noreferrer" class="button is-large is-link">GitHub</a>
            </div>
          </div>
        </ScrollComponent>
      </section>
    )
  }
}
