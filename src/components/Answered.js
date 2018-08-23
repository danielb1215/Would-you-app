import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Panel, Grid, Col, Row, Image, Form, Checkbox, FormGroup, ProgressBar } from 'react-bootstrap'


class Answered extends Component{

    render(){
        const { questions, users, id, authedUser } = this.props
        const optionOne = questions[id].optionOne.text;
        const optionTwo = questions[id].optionTwo.text;
        const author = questions[id].author 
        const imagen = users[author].avatarURL
        const rtaOptionOne = questions[id].optionOne.votes.includes(authedUser)
        const lengthOne = questions[id].optionOne.votes.length
        const lengthTwo = questions[id].optionTwo.votes.length
        const totalVotes = (lengthOne + lengthTwo)
        const porcentOne = (100 * lengthOne)/ totalVotes 
        const porcentTwo = (100 * lengthTwo)/ totalVotes 
        if(questions === null ){
            return <p>This question doesn't exist</p>
        }
         return(
            <div>                
                <Panel>
                    <Panel.Heading>{author} asks .. </Panel.Heading>
                    <Panel.Body>
                        <Grid>
                            <Row>
                                <Col xs={4} md={4}>
                                    <Image src={imagen} circle />
                                </Col>
                                <Col xs={6} md={6}>
                                { rtaOptionOne === true 
                                  ?(<Form horizontal>
                                    <FormGroup >
                                    <Checkbox  validationState="success" checked readOnly>{optionOne}</Checkbox>
                                    <ProgressBar now={porcentOne} label={lengthOne + ' Out of ' + totalVotes + 'Votes ' + `${porcentOne}%`} />
                                    <Checkbox readOnly>{optionTwo}</Checkbox>
                                    <ProgressBar now={porcentTwo} label={lengthTwo + ' Out of ' + totalVotes + 'Votes ' + `${porcentTwo}%`} />
                                    </FormGroup>                                        
                                    </Form> )
                                  :(<Form horizontal>
                                    <FormGroup>
                                        <Checkbox readOnly>{optionOne}</Checkbox>
                                        <ProgressBar now={porcentOne} label={lengthOne + ' Out of ' + totalVotes + 'Votes ' + `${porcentOne}%`} />
                                        <Checkbox validationState="success" checked readOnly>{optionTwo}</Checkbox>
                                        <ProgressBar now={porcentTwo} label={lengthTwo + ' Out of ' + totalVotes + 'Votes ' + `${porcentTwo}%`} />
                                        </FormGroup>                                        
                                    </Form> )
                                 }                            
                                </Col>   
                            </Row>                        
                        </Grid>
                    </Panel.Body>
                </Panel>            
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

export default withRouter(connect(mapStateToProps)(Answered))