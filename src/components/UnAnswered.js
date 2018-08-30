import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Panel, Grid, Col, Row, Image, Form, Checkbox, FormGroup } from 'react-bootstrap'
import { handleVote } from '../actions/questions'
import { Link } from 'react-router-dom'

class UnAnswered extends Component{
    handleChange = (option) => {
        const { dispatch } = this.props
        dispatch(handleVote(this.props.authedUser, this.props.id, option))        
    } 
    render(){
        const { questions, users, id } = this.props
        const optionOne = questions[id].optionOne.text;
        const optionTwo = questions[id].optionTwo.text;
        const author = questions[id].author
        const imagen = users[author].avatarURL
        if(questions === null ){
            return <p>This question doesn't exist</p>
        }
            return(
               <div> 
                {this.props.authedUser === null
                    ?<Link to={'/login'} />
                    :<div>                
                        <Panel>
                            <Panel.Heading>{author} asks .. </Panel.Heading>
                            <Panel.Body>
                                <Grid>
                                    <Row>
                                        <Col xs={4} md={4}>
                                            <Image src={imagen} circle />
                                        </Col>
                                        <Col xs={8} md={8}>
                                        <Form horizontal>
                                                <FormGroup onChange={(event) => this.handleChange(event.target.value)} >
                                                    <Checkbox value='optionOne'>{optionOne}</Checkbox>
                                                    <Checkbox value='optionTwo'>{optionTwo}</Checkbox>
                                                </FormGroup>                                        
                                            </Form>                                                          
                                        </Col>   
                                    </Row>                        
                                </Grid>
                            </Panel.Body>
                        </Panel>            
                    </div>}
            </div> 
            )
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

export default withRouter(connect(mapStateToProps)(UnAnswered))