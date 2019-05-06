import React from 'react'
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
    fetch(process.env.REACT_APP_API_SERVER+"api/portfolio.json.php")
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
        <div className="container">
          <div className="columns is-multiline">
            { portfolio === null ? 'what.' :
              portfolio.map((p, i) =>
                <div key={i} className="column is-4-desktop is-half-tablet">
                  <PortfolioItem {...p} />
                </div>
              )
            }
          </div>
        </div>
        <div className="section-footer has-text-centered">
          <h3 className="title has-text-black-darker">See More</h3>
          <div className="buttons">
            <a href="https://www.codepen.io/wsabol" target="_blank" rel="noopener noreferrer"
              className="button button-special is-rounded is-medium is-link">CodePen.io</a>
            <a href="https://www.github.com/wsabol" target="_blank" rel="noopener noreferrer"
              className="button button-special is-rounded is-medium is-link">GitHub</a>
          </div>
        </div>
      </section>
    )
  }
}
