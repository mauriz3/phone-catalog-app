import React, { Component } from "react";
import { Card, Row, Col, ListGroup, Button, Image } from "react-bootstrap";
import PropTypes from "prop-types";

function Price(props) {
  const hasOffer = props.hasOffer;
  const offerPrice = props.offerPrice;
  const price = props.price;
  if (hasOffer) {
    return (
      <><Card.Title className="my-2 mx-2">OFFER: {offerPrice} €</Card.Title>
      <Card.Subtitle className="mb-2 mx-2 text-muted">Before Price: {price} €</Card.Subtitle></>
    );
  }
  return <Card.Title className="my-2 mx-2">PRICE: {price} €</Card.Title>;
}

class PhoneCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header className="text-center">{this.props.phoneName}</Card.Header>
          <Card.Body>
            <Row fluid>
              <Col>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>tech 1</ListGroup.Item>
                    <ListGroup.Item>tech 2</ListGroup.Item>
                    <ListGroup.Item>tech 3</ListGroup.Item>
                  </ListGroup>
                  {Price(this.props)}
                </Card>
              </Col>
              <Col>
                <Image src={this.props.image} fluid />
              </Col>
            </Row>
            <Row fluid className="justify-content-center mt-3">
              <Col xs="3">
                <Button variant="primary">More</Button>
              </Col>
              <Col xs="3">
                <Button variant="primary">Edit</Button>
              </Col>
              <Col xs="3">
                <Button variant="primary">Delete</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

PhoneCard.propTypes = {
  phoneName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  hasOffer: PropTypes.bool.isRequired,
  offerPrice: PropTypes.number,
  image: PropTypes.string.isRequired
};

export default PhoneCard;