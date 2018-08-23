import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import Questions from './Questions'
import { Tabs, Tab } from 'react-bootstrap'

class Dashboard extends Component {
    render(){

        const { answeredId, unAnsweredId } = this.props
        return(        
            <div>
                {this.props.authedUser === null
                ?<Login try='yes'/>
                :<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">                    
                    <Tab eventKey={1} title="UnAnswered">
                    <ul>
                        {unAnsweredId.map((id) =>(
                            <li key={id}>
                                <Questions id={id} />
                            </li>
                        ))}

                    </ul>
                    </Tab> 
                    <Tab eventKey={2} title="Answered">
                    <ul>
                    {answeredId.map((id) =>(
                        <li key={id}>
                            <Questions id={id} />
                        </li>
                    ))}
                    </ul>
                    </Tab>  
                </Tabs>}               
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }){
    const unAnswered = Object.keys(questions)
    .filter( q => (!questions[q].optionOne.votes.includes(authedUser) && !questions[q].optionTwo.votes.includes(authedUser)))
    .sort((c,d) => (questions[d].timestamp - questions[c].timestamp))

    const answered = Object.keys(questions)
    .filter( q => (questions[q].optionOne.votes.includes(authedUser) || questions[q].optionTwo.votes.includes(authedUser)))
    .sort((c,d) => (questions[d].timestamp - questions[c].timestamp))

    return{
        authedUser,
        answeredId: answered,
        unAnsweredId: unAnswered
    }
}

export default connect(mapStateToProps)(Dashboard)