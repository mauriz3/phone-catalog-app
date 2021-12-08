import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import PhonesView from "./phones/PhonesView";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            <Nav.Link href="/" id="navlink-home">HOME</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/login" id="navlink-login">Login</Nav.Link>
            <Nav.Link href="/signup" id="navlink-signup">Sign up</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <PhonesView isLogged={false} />
        </Container>
      </div>
    );
  }
}

export default Home;
