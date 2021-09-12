import React, { Component } from 'react';
import {
    Card,
    Button,
    Col,
} from 'react-bootstrap';

class HornedBeast extends Component {
    getHandleOpen=()=>{
        let image_url=this.props.image_url;
        let title=this.props.title;
        let description=this.props.description;
        this.props.handleOpen(image_url,title,description)
    }

    constructor(props) {
        super(props)
        this.state = {
            vote: 0
        }

    }
    voteCount = () => {
        this.setState({
            vote: this.state.vote + 1,

        })
    }

    render() {



        return (
            <Col>
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} width="600" height="400" />
                    <Card.Body>
                        <Card.Title>Horned Beast</Card.Title>
                        <Card.Text>
                            <h2>{this.props.title}</h2>
                            <p>Description: {this.props.description}</p>
                            <p>Keyword: {this.props.keyword} </p>
                            <p>Horns: {this.props.horns} </p>
                            <p>💗:{this.state.vote}</p>

                            <Button variant="outline-info" onClick={this.voteCount}>Like Image</Button>{' '}
                        </Card.Text>
                        <Button onClick={this.getHandleOpen} variant="info">Show Image</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default HornedBeast
