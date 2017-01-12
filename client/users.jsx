import React from 'react'
import {Link} from 'react-router'

export default class Users extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      users: [
        { name: 'User 1', id: 1 },
        { name: 'User 2', id: 2 }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map((item, index) => <li key={index}><Link to={`/users/${item.id}`}> {item.name} </Link></li>)}
        </ul>
        {this.props.children}
      </div>
    )
  }

}
