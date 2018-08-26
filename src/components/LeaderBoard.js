import React, { Component } from 'react' 
import { connect } from 'react-redux'
import { Panel, Grid, Row, Col, Image} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

class LeaderBoard extends Component{    
    render(){
        const sortingUsers = Object.keys(this.props.users).map((x) => this.props.users[x])
        .sort((b,a) => (Object.keys(a.answers).length + a.questions.length) - (Object.keys(b.answers).length + b.questions.length))
        return(
            <div>
            {this.props.authedUser === null
                ?<Redirect to='/'/>
                :<div>
                    {
                        sortingUsers.map((user) =>(
                            <div key={user.id}>
                            <Panel>
                                <Panel.Heading><h3>{user.name}</h3></Panel.Heading>
                                <Panel.Body>
                                <Grid>
                                    <Row>
                                        <Col xs={4} md={4}>
                                            <Image src={user.avatarURL} circle />
                                        </Col>
                                        <Col xs={8} md={8}> 
                                        <p>Answered Questions: {Object.keys(user.answers).length}</p>
                                        <p>Created Questions: {user.questions.length}</p>
                                        <p>Total: {Object.keys(user.answers).length + user.questions.length}</p>                                                   
                                        </Col>   
                                    </Row>                        
                                </Grid>
                                    
                                </Panel.Body>
                            </Panel>
                                
                                
                            </div>
                    ))
                    }
                </div>
            }
            </div> 
        )
    }
}
 function mapStateToProps({ users, authedUser}){
     return{
        users: Object.values(users),
        authedUser
     }
    
 }

export default connect(mapStateToProps)(LeaderBoard)