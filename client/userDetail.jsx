import React from 'react'

export default class UserDetail extends React.Component {
  render() {
    return (
      <div>
        <h3>User Id: {this.props.params.userId}</h3>
      </div>
    )
  }
}
