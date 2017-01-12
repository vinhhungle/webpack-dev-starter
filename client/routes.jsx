import React from 'react'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, hashHistory as history} from 'react-router'

import {initStore} from '../store'
import Layout from './layout'
import App from './app'
import About from './about'
import Users from './users'
import UserDetail from './userDetail'
import NoMatch from './noMatch'

let store = initStore(history)

export default class Routes extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={Layout}>
            <Route path="/">
              <IndexRoute component={App} />
              <Route path="about" component={About}/>
              <Route path="users" component={Users}>
                <Route path=":userId" component={UserDetail}/>
              </Route>
            </Route>
          </Route>
          <Route path="*" component={NoMatch}/>
        </Router>
      </Provider>
    )
  }
}
