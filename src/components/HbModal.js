import React, { Component } from 'react'
import {
    Modal,
    Button,
} from 'react-bootstrap';

class HbModal extends Component {
    render() {
        return (

            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <img src={this.props.image_url} alt={this.props.title} />
                <Modal.Body>{this.props.description}</Modal.Body>
                <Modal.Footer>

                    <Button variant="info" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default HbModal
