import React, { Component } from 'react'
import{
  Navbar,
  Container,
}from "react-bootstrap";
import style from "./style.css"


export class NavCust extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
            width="85"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          
        <span class="black">HORNED BEASTS</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  
    )
  }
}

export default NavCust
