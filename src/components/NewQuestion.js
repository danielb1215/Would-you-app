import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import {Form, Panel, Button, FormGroup, FormControl } from 'react-bootstrap'
import { handleAddQuestion } from "../actions/questions";

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
    }
    handleOptionOne = (e) => {
        const text = e.target.value

        this.setState(() => ({
            optionOne: text
        }))
        console.log(this.state)

    }
    handleOptiontwo = (e) => {
        const text = e.target.value

        this.setState(() => ({
            optionTwo: text
        }))
        console.log(this.state)

    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOne, optionTwo } = this.state
        const { dispatch, authedUser} = this.props
        dispatch(handleAddQuestion(optionOne, optionTwo, authedUser))

        console.log('New Question', optionOne, optionTwo)
        
        this.setState(() => ({
            optionOne: '',
            optionTwo: '', 
        }))

        alert('Your question have been added successfully!')
    }
    render(){
        const { optionOne, optionTwo } = this.state
        return(        
            <div>
                {this.props.authedUser === null
                ? <Login try='yes'/>
                : 
                <div>
                <Panel>
                    <Panel.Heading><h1>Create New Question</h1></Panel.Heading>
                    <Panel.Body>
                        <h3>Complete the question</h3>
                        <h2>Would You Rather... </h2>
                        <Form horizontal onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <FormControl type='text' placeholder='Enter Option One Text Here' value={optionOne} onChange={this.handleOptionOne}/>
                            </FormGroup>
                            <h3>Or</h3>
                            <FormGroup>
                                <FormControl type='text' placeholder='Enter Option Two Text Here' value={optionTwo} onChange={this.handleOptiontwo} />
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Panel.Body>
                </Panel>
                    
                </div>
                }               
            </div>
        )
    }
}

function mapStateToProps({  authedUser }){
    return{
        authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion)