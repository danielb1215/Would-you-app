import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/share'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
    console.log(this.props)
  }
  render() {
    return (
      <Router>
        <Fragment>
      <div className='container'>
        <div>
        <Route path='/' component={Dashboard} />
        </div>
      </div>
      </Fragment>
      </Router>
    )
  }
}
function mapStateToProps({ user }){
  return{
    users,
  }
}

export default connect(mapStateToProps)(App);
