import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render(){
        console.log(this.props)
        const { users } = this.props
        return(
            <div>
                <h3>Your TimeLine</h3>
                <ul>
                    {this.props.users.map((users) =>(
                        <li >
                            {users}
                        </li>
                    ))}

                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users, questions }){
    return{
       users,
       questions
    }
}

export default connect(mapStateToProps)(Dashboard)