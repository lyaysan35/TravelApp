import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreatePlace extends Component {
  constructor(){
    super();

    this.state = {
      city: '',
      country: '',
      image: '',
      text: ''
    }
  }
  handleSubmit = (e) =>{
    console.log('handle submit inside create form')
    e.preventDefault()
    this.props.addPlace(e, this.state)
    this.setState({
      city: '',
      country: '',
      image: '',
      text: ''
    })

  } 
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  render(){
    return (
      <Segment>
        <h4>Create Place</h4>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Label>City:</Label>
          <Form.Input type='text' name='city' value={this.state.city} onChange={this.handleChange}/>
          <Label>Country:</Label>
          <Form.Input type='text' name='country' value={this.state.country} onChange={this.handleChange}/>
          <Label>Image:</Label>
          <Form.Input type='text' name='image' value={this.state.image} onChange={this.handleChange}/>
          <Label>Text:</Label>
          <Form.Input type='text' name='text' value={this.state.text} onChange={this.handleChange}/>
          <Button type='Submit'>Create Place</Button>
        </Form>
      </Segment>
      )
  }
}

export default CreatePlace;