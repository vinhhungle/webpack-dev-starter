import React from 'react'
import {Link} from 'react-router'

export default class Layout extends React.Component {
  render() {
    console.log('render layout')
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/not-found">Not Found</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
