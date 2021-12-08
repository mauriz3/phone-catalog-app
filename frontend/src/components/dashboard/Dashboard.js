import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";
import { logout } from "../login/LoginActions";
import PhonesView from "../phones/PhonesView";

class Dashboard extends Component {
  onLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        <Navbar>
          <Navbar.Brand>
            <Nav.Link href="/" id="navlink-home">HOME</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              User: <b id="navbar-username">{user.username}</b>
            </Navbar.Text>
            <Nav.Link id="navlink-logout" onClick={this.onLogout}>Logout</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        <Container id="dashboard-container">
          <PhonesView isLogged={user?.username}/>
        </Container>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logout
})(withRouter(Dashboard));
