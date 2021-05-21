import React from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faCocktail,
  faConciergeBell,
  faSwimmer,
  faDumbbell,
  faTshirt,
  faUtensils,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";
import "./ChoosUs.css";
const ChooseUs = () => {
  return (
    <Container >
      <Card.Text className="text-center">Why Choose Us</Card.Text>
      <Card.Text className="text-center">
        Of is appear in face creeping and whose don’t blessed. Female our herb
        you’ll female earth second moveth.
      </Card.Text>

      <Row class='choos-us'>
        <Col xs={4} md={3}>
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faWifi} />
            </span>
            <br />
            INTERNET
          </p>
        </Col>
        <Col xs={4} md={3}>
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faCocktail} />
            </span>
            <br />
            DRINKS
          </p>
        </Col>
        <Col xs={4} md={3}>
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faConciergeBell} />
            </span>
            <br />
            CONCIERGE
          </p>
        </Col>
        <Col xs={4} md={3}>
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faSwimmer} />
            </span>
            <br />
            POOL
          </p>
        </Col>
        <Col xs={4} md={3}>
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faDumbbell} />
            </span>
            <br />
            FITNESS
          </p>
        </Col>

        <Col xs={4} md={3}>
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faSpa} />
            </span>
            <br />
            LOUNDRY
          </p>
        </Col>
        <Col xs={4} md={3}>
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faUtensils} />
            </span>
            <br />
            RESTAURANT
          </p>
        </Col>
        <Col xs={4} md={3}>
          <p>
            <span className="icon">
              <FontAwesomeIcon icon={faTshirt} />
            </span>
            <br />
            RESTAURANT
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ChooseUs;
