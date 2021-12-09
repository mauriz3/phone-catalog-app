import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPhones } from "./PhonesActions";
// import { Button, Form, Row, Col } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import PhoneCard from "./PhoneCard";
import moment from 'moment';

const today = new Date()
const yesterday = new Date(today).setDate(today.getDate() - 1)
const todayDateString = moment(today).format('YYYY-MM-DD');
const yesterdayDateString = moment(yesterday).format('YYYY-MM-DD');

class PhonesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: yesterdayDateString,
      endDate: todayDateString,
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFilterClick = () => {
    this.props.getPhones();
  };
  componentDidMount() {
    this.onFilterClick();
  };

  render() {
    const { phones } = this.props.phones;
    const isLogged = this.props.isLogged;
    // const { newVisits } = this.props.visits;
    // const { recurrentVisits } = this.props.visits;

    if (phones.length === 0) {
      return <h2 className="mt-3">Data not found</h2>;
    }

    let items = phones.map(phone => {
      return (
        <Col sm="6" lg="4" className="my-3" key={phone.id}>
          <PhoneCard phone={phone} isLogged={isLogged} />
        </Col>
      );
    });

    return (
      <div>
        {/* <Form className="mt-4">
          <Row className="justify-content-end">
            <Col xs="6" md="4" lg="3">
              <Form.Group as={Row}>
                <Form.Label as={Col} sm="3" className="pt-2">From:</Form.Label>
                <Col sm="9" className="mb-3">
                  <Form.Control
                    type="date"
                    name="startDate"
                    value={this.state.startDate}
                    onChange={this.onChange}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col xs="6" md="4" lg="3">
              <Form.Group as={Row}>
                <Form.Label as={Col} sm="2" className="pt-2">To:</Form.Label>
                <Col sm="9">
                  <Form.Control
                    type="date"
                    name="endDate"
                    value={this.state.endDate}
                    onChange={this.onChange}
                  />
                </Col>
              </Form.Group>
            </Col>
            <Col xs="3" sm="2" md="1">
              <Button variant="primary" onClick={this.onFilterClick}>
                Go
              </Button>
            </Col>
          </Row>
        </Form> */}
        <Row className="my-3">
          {items}
        </Row>
      </div>
    );
  }
}

PhonesView.propTypes = {
  getPhones: PropTypes.func.isRequired,
  phones: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  phones: state.phones
});

export default connect(mapStateToProps, {
  getPhones
})(withRouter(PhonesView));