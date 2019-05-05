import React from 'react'
import ScrollComponent from '../modules/ScrollComponent'

export default data => {

  return (
    <ScrollComponent className="card portfolio-item">
      <div className="card-image">
        <figure className="image is-5by3" >
          <img src={data.img} alt={data.title} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title" >{data.title}</p>
        <div className="content">{data.description}</div>
      </div>
      <footer className="card-footer">
        { data.github === '' ? '' :
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="card-footer-item">On GitHub</a>
        }
        { data.url === '' ? '' :
          <a href={data.href} target="_blank" rel="noopener noreferrer" className="card-footer-item">On the Web</a>
        }
      </footer>
    </ScrollComponent>
  )
}
