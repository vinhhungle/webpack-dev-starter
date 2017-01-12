import React, {PropTypes} from 'react'
import render from './app.rt'

export default class App extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      message: 'Hello React',
      open: this.props.open
    }
  }

  handleClick (ev) {
    console.log('clicked', ev.target)
    this.setState({open: !this.state.open})
  }
}

App.prototype.render = render

App.propTypes = {
  open: PropTypes.bool
}

App.defaultProps = {
  open: false
}
