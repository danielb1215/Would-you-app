import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleVote } from '../actions/questions'
import UnAnswered from './UnAnswered'
import Answered from './Answered'
import { Redirect, Link } from 'react-router-dom'

class Questions extends Component{
    componentDidMount(){
        console.log(this.props)
    }
    
    handleChange = (option) => {
        const { dispatch } = this.props
        dispatch(handleVote(this.props.authedUser, this.props.id, option))        
    } 
    render(){

        const { questions, id, authedUser } = this.props
        if( authedUser === null ){
            
           
            return(
                <div>
                {this.props.history.push('/')}
                <Redirect  to='/' />
                </div>
            )
            
        }else{
        const rtaOptionOne = questions[id].optionOne.votes.includes(authedUser)
        const rtaOptionTwo = questions[id].optionTwo.votes.includes(authedUser)

        if(questions === null ){
            return <p>This question doesn't exist</p>
        }
        if( rtaOptionOne === false && rtaOptionTwo === false){
            return(
                <UnAnswered/>               
            )            
        }else{
            return(           
                <Answered/>
        )
      }
    }
    }
 }


function mapStateToProps({ questions, users, authedUser }, props){
    const { id } = props.match.params

    return{
        id,
        questions,
        users,
        authedUser               
    }
}

export default withRouter(connect(mapStateToProps)(Questions))