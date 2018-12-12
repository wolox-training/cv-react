import React from 'react';
import App from '../app/screens/App'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const RoutesApp = () => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  )
}

export default RoutesApp;
