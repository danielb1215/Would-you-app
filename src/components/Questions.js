import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Panel, Grid, Col, Row, Image } from 'react-bootstrap'  
import Login from './Login'

class Questions extends Component{
    render(){
        const { questions, id, users } = this.props
        const optionOne = questions[id].optionOne.text;
        const author = questions[id].author
        const imagen = users[author].avatarURL
        if(questions === null ){
            return <p>This question doesn't exist</p>
        }
        return(
            <div>
            {this.props.authedUser === null
            ?<Login />
            :<div> 
                <Link to={`/questions/${id}`} >
                    <Panel>
                        <Panel.Heading>{author} asks .. </Panel.Heading>
                        <Panel.Body>
                            <Grid>
                                <Row>
                                    <Col xs={4} md={4}>
                                        <Image src={imagen} circle />
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <h3>Would you rather</h3>
                                        <p>{optionOne}</p>
                                        <button>View Pool</button>
                                    </Col>   
                                </Row>                        
                            </Grid>
                        </Panel.Body>
                    </Panel>     
                </Link>           
             </div>}
             </div>

        )
    }
 }


function mapStateToProps({ questions, users, authedUser }){
    return{
        questions,
        users,
        authedUser        
    }
}

export default withRouter(connect(mapStateToProps)(Questions))