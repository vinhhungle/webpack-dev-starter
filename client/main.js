import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './routes'

let rootEl = document.body.querySelector('#root')

ReactDOM.render(
  <Routes />,
  rootEl
)
