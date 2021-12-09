import React, { Component } from "react";
import { Row, Col, ListGroup, Button, Image, Modal, Card } from "react-bootstrap";
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

class PhoneViewMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  render() {
    const handleClose = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    const phone = this.props.phone;
    return (
      <>
        <Button variant="primary" onClick={handleShow} id={"more-button-" + phone.name.replace(" ", "-").toLowerCase()}>
          More
        </Button>

        <Modal show={this.state.show} onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title id="modal-title">{phone.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Brand: <strong>{phone.brand}</strong></ListGroup.Item>
                    <ListGroup.Item>OS: {phone.os}</ListGroup.Item>
                    <ListGroup.Item>RAM: {phone.ram} {phone.ram ? 'GB' : ''}</ListGroup.Item>
                    <ListGroup.Item>Camera: {phone.camera} {phone.camera ? 'MP' : ''}</ListGroup.Item>
                    <ListGroup.Item>Screen: {phone.screen}</ListGroup.Item>
                    <ListGroup.Item>Color: {phone.color}</ListGroup.Item>
                    <ListGroup.Item>Processor: {phone.processor}</ListGroup.Item>
                  </ListGroup>
                  {Price(this.props)}
                </Card>
              </Col>
              <Col>
                <Image src={phone.image ? phone.image : 'mobile.png'} fluid style={{ height: '430px' }} />
              </Col>
            </Row>
            <Row>
              <Col className="mt-2">
                <strong>DESCRIPTION:</strong> {phone.description}
              </Col>
            </Row>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
}

PhoneViewMore.propTypes = {
  phone: PropTypes.object.isRequired
};

export default PhoneViewMore;