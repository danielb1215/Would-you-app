import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class NoMatch extends Component{
    render(){
        return(
            <div>
            {this.props.authedUser === null
                ?<Redirect to='/'/>
                :<h1>404 Page no found</h1>
            }    
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return{
        authedUser
    }
}
export default connect(mapStateToProps)(NoMatch) 