import React from 'react'
import ScrollComponent from '../modules/ScrollComponent'
import PortfolioItem from '../modules/PortfolioItem'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id
    this.state = {
      portfolio: null
    };
  }

  componentDidMount() {
    fetch(window.apiServer + "/api/portfolio.json.php")
      .then(res => res.json())
      .then((portfolio) => {
          this.setState({ portfolio });
        },
        (error) => {
          console.error(error)
        }
      )
  }

  render() {
    const portfolio = this.state.portfolio;

    return (
      <section className="section has-background-light" id={this.id}>
        <div className="section-heading has-text-centered">
          <h3 className="title has-text-black-darker">Design Lab</h3>
        </div>
        <ScrollComponent className="container">
          <div className="columns is-multiline">
            { portfolio === null ? 'what.' :
              portfolio.map(p =>
                <div className="column is-4-desktop is-half-tablet">
                  <PortfolioItem {...p} />
                </div>
              )
            }
          </div>
        </ScrollComponent>
        <div className="section-footer has-text-centered">
          <h3 className="title has-text-black-darker">See More</h3>
          <div class="buttons">
            <a href="www.codepen.io/wsabol" target="_blank" rel="noopener noreferrer" class="button is-large is-link">CodePen.io</a>
            <a href="www.github.com/wsabol" target="_blank" rel="noopener noreferrer" class="button is-large is-link">GitHub</a>
          </div>
        </div>
      </section>
    )
  }
}
