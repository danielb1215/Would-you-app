import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/share'
import Dashboard from './Dashboard'
import Nav from './Nav'
import Login from './Login'
import Question from './Question'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import NoMatch from './NoMatch'


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())    
  }
  render() {
    return (
      <Router>
        <Fragment>
          
      <div className='container'>
        <div>
          <Nav/>
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/new' exact component={NewQuestion} />
            <Route path='/leaderboard' exact component={LeaderBoard} />
            <Route path='/question/:id' component={Question} />
            <Route path='/login' exact component={Login} />
            <Route component={NoMatch} />
          </Switch>  
        </div>
      </div>
      </Fragment>
      </Router>
    )
  }
}
function mapStateToProps({ users }){
  return{
    users,
  }
}

export default connect(mapStateToProps)(App);

