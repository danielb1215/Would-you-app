import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'
import { Jumbotron, FormControl, FormGroup } from 'react-bootstrap'

class Login extends Component{
    handleChange = (event) => {
        const { dispatch } = this.props
       dispatch(handleSetAuthedUser(event))
    }   
    render(){
        const users = Object.values(this.props.users) 
        return(
            <div className='container'>
                <Jumbotron>
                    <form onSubmit={this.login} className='form'>
                        <FormGroup>
                            <h2>Welcome to the Would You Rather App</h2>
                            <h4>Please sign in to continue</h4>
                            <FormControl componentClass='select' onChange={(event) => this.handleChange(event.target.value)}>
                                <option>Select user</option>
                                { users.map((user) => (
                                    <option src={user.avatarURL} key={user.id} value={user.id}>{user.name}</option>
                                ))
                                }
                            </FormControl>
                        </FormGroup>
                    </form>
                </Jumbotron>    
            </div>
        )
    }
}
function mapStateToProps({ users } , id){
    return{
       users,
       id
    }
}
export default connect(mapStateToProps)(Login)