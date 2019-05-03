import React from 'react'

export default profile =>
  <div className="box">
    <table className="table is-fullwidth">
      <tbody>
        <tr>
          <th>Name</th>
          <td>{profile.name}</td>
        </tr>
        <tr>
          <th>Place of Birth</th>
          <td>{profile.birthplace}</td>
        </tr>
        <tr>
          <th>Date of Birth</th>
          <td>{profile.birthday}</td>
        </tr>
        <tr>
          <th>Current Location</th>
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
  </div>
