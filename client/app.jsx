import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import render from './app.rt'
import {titleActions} from '../store/actions'

class App extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      open: this.props.open
    }
    console.log('init app', this)
  }

  handleClick (ev) {
    console.log('clicked', ev.target)
    let newTitle = 'Action fired!'
    this.props.updateTitle(newTitle)
    this.setState({open: !this.state.open})
  }
}

App.prototype.render = render

App.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool
}

App.defaultProps = {
  title: 'Hello React',
  open: false
}

let wrapper = connect(
    ({title}, props) => {
      return { title }
    },
    (dispatch, props) => {
      return {
        updateTitle: (title) => dispatch(titleActions.updateTitle(title))
      }
    }
)

export default wrapper(App)
