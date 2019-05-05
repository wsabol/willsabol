import React from 'react'
import { smoothScroll } from '../App'

export default profile =>
  <div className="box">
    <table className="table is-fullwidth">
      <tbody>
        <tr>
          <th>Name</th>
          <td>{profile.name}</td>
        </tr>
        <tr>
          <th>Location</th>
          <td>{profile.current_loc}</td>
        </tr>
        <tr>
          <th>Current Job</th>
          <td>Web Architect <a href="promedia.com" target="_blank">@ProMedia</a></td>
        </tr>
        <tr>
          <th>Favorite Tools</th>
          <td>Linux, MSSQL, node.js, React, Atom.io, Git Bash</td>
        </tr>
      </tbody>
    </table>
    <div className="buttons is-centered" >
      <a onClick={smoothScroll} className="button is-primary is-rounded button-special" href="#contact" >
        Contact Me
      </a>
    </div>
  </div>
