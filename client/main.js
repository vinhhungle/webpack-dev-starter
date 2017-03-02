import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import {Hello} from './hello'

let rootEl = document.body.querySelector('#root')

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  rootEl
)
