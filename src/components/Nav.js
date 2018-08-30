import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogOut = (event) => {
    let a = window.confirm("Want to log Out?")
    if(a === true){
    const { dispatch } = this.props
    dispatch(handleSetAuthedUser(event))
    }
    
  }
  render(){
    const authedUser = this.props.authedUser
    return(
        <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='active'>
            LeaderBoard
          </NavLink>
        </li>
        <li>
          {authedUser !== null
          ?<NavLink to='/' exact onClick={(event) => this.handleLogOut(null)} >
            {authedUser}Log Out
          </NavLink>
          :<NavLink to='/Login' activeClassName='active'>
            Login
          </NavLink>}
          
        </li>
      </ul>
    </nav>
    )
  }
}
function mapStateToProps({ authedUser }){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)