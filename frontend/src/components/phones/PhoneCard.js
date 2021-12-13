import React, { Component } from "react";
import { Card, Row, Col, ListGroup, Button, Image } from "react-bootstrap";
import PhoneViewMore from "./PhoneViewMore";
import PropTypes from "prop-types";

function Price(props) {
  const hasOffer = props.phone.hasOffer;
  const offerPrice = props.phone.offerPrice;
  const price = props.phone.price;
  if (hasOffer) {
    return (
      <><Card.Title className="my-2 mx-2">OFFER: {offerPrice} €</Card.Title>
      <Card.Subtitle className="mb-2 mx-2 text-muted">Before Price: {price} €</Card.Subtitle></>
    );
  }
  return <Card.Title className="my-2 mx-2">PRICE: {price} €</Card.Title>;
}


function ActionButtons(props) {
  const isLogged = props.isLogged;
  const phone = props.phone;
  return (
    <><Col xs="3">
      <PhoneViewMore phone={phone} />
    </Col>
    {isLogged &&
      <><Col xs="3">
        <Button variant="primary">Edit</Button>
      </Col><Col xs="3">
          <Button variant="primary">Delete</Button>
        </Col></>
    }</>
  );
}

class PhoneCard extends Component {
  render() {
    const phone = this.props.phone;
    return (
      <div>
        <Card style={{ 'minHeight': '550px' }}>
          <Card.Header className="text-center">{phone.name}</Card.Header>
          <Card.Body>
            <Row className="my-2">
              <Col>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Brand: <strong>{phone.brand}</strong></ListGroup.Item>
                    <ListGroup.Item>OS: {phone.os}</ListGroup.Item>
                    <ListGroup.Item>RAM: {phone.ram} {phone.ram ? 'GB' : ''}</ListGroup.Item>
                    <ListGroup.Item>Camera: {phone.camera} {phone.camera ? 'MP' : ''}</ListGroup.Item>
                    <ListGroup.Item>Screen: {phone.screen}</ListGroup.Item>
                  </ListGroup>
                  {Price(this.props)}
                </Card>
              </Col>
              <Col>
                <Image src={phone.image ? phone.image.replace("/media/phones", ":8000/media/phones") : 'mobile.png'} fluid />
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              {ActionButtons(this.props)}
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

PhoneCard.propTypes = {
  phone: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default PhoneCard;