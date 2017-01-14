import React, {PropTypes} from 'react'
import render from './app.rt'

const styles = require('./styles/modules/app.mcss')

console.log('styles', styles)

class App extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      message: 'Hello React',
      open: this.props.open
    }
    this.styles = styles
  }

  handleClick (ev) {
    console.log('clicked', ev.target)
    this.setState({open: !this.state.open})
  }
}

App.propTypes = {
  open: PropTypes.bool
}

App.defaultProps = {
  open: false
}

App.prototype.render = render

export default App
