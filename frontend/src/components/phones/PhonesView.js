import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getPhones } from "./PhonesActions";
import { Button, Form, Row, Col, FloatingLabel, Spinner } from "react-bootstrap";
import PhoneCard from "./PhoneCard";

class PhonesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      os: '',
      hasOffer: ''
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onFilterClick = () => {
    this.props.getPhones(this.state.brand, this.state.os, this.state.hasOffer);
  };
  componentDidMount() {
    this.onFilterClick();
  };

  render() {
    const { phones } = this.props.phones;
    const isLogged = this.props.isLogged;

    let items = phones.map(phone => {
      return (
        <Col sm="6" lg="4" className="my-3" key={phone.id}>
          <PhoneCard phone={phone} isLogged={isLogged} />
        </Col>
      );
    });

    function Content() {
      if (phones.length === 0) {
        return (<Row className="justify-content-center mt-5 pt-5">
          <Col xs="2" className="mt-5 pt-5">
            <Spinner animation="border" role="status" variant="white">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>)
      }
      return (<Row className="my-2">
        {items}
      </Row>);
    }

    return (
      <div>
        <Row className="justify-content-end">
          <Col xs="6" md="3" lg="2" className="mt-3">
            <FloatingLabel controlId="floatingSelectBrand" label="Filter by Brand">
              <Form.Select name="brand" onChange={this.onChange}>
                <option value="">All</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Huawei">Huawei</option>
                <option value="Oppo">Oppo</option>
                <option value="Vivo">Vivo</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col xs="6" md="3" lg="2" className="mt-3">
            <FloatingLabel controlId="floatingSelectOS" label="Filter by OS">
              <Form.Select name="os" onChange={this.onChange}>
                <option value="">All</option>
                <option value="Android">Android</option>
                <option value="iOS">iOS</option>
                <option value="MUI">MUI</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col xs="6" md="3" lg="2" className="mt-3">
            <FloatingLabel controlId="floatingSelectOffer" label="Filter by Offer">
              <Form.Select name="hasOffer" onChange={this.onChange}>
                <option value="">All</option>
                <option value={true}>Offers</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col xs="3" md="2" lg="1" className="mt-4">
            <Button variant="primary" onClick={this.onFilterClick}>
              Go
            </Button>
          </Col>
        </Row>
        {Content()}
        
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