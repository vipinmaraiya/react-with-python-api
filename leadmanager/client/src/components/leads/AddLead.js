import React, {Component} from 'react';
import {
    Form,
    Button
} from 'react-bootstrap';
import {
    connect
} from 'react-redux';
import {
addLead
} from '../../redux/actions/leads';

class AddLead extends Component{
    state = {
        name: '',
        email: '',
        message: ''
    }

    onSubmit = (e) =>{
        e.preventDefault();
        const {
            name, 
            email, 
            message
        } = this.state;

        this.props.addLead({
            name,
            email,
            message
        });
    }

    onInputChange = (id, event) =>{
        const {value} = event.target;
        this.setState(prevState =>({
            ...prevState,
            [id]:value
        }))
    }

    render(){
        return(
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"
                value={this.state.name}
                
                onChange={(event)=>{
                   this.onInputChange("name", event)
                }}
                placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>E-Mail</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
             value={this.state.email}
                
             onChange={(event)=>{
                this.onInputChange("email", event)
             }}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Enter message" 
                value={this.state.message}
                
                onChange={(event)=>{
                   this.onInputChange("message", event)
                }}
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.onSubmit}>
                Submit
            </Button>
            </Form>
        )
    }
}

export default connect(null, {addLead})(AddLead);