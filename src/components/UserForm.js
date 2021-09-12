import React, { Component } from 'react'
import { Form } from "react-bootstrap";

class UserForm extends Component {
    render() {
        return (
            <div>
                <h2> Filter Beasts By Horns Number:</h2>

                <Form.Select aria-label="Select Number of the Horns" onChange={this.props.handleSelect}>
                    <option>Select Number of Horns from(1,2,3)</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Form.Select>
                </div>
                )
           
    }
}

export default UserForm
