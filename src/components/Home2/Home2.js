import React from 'react';
import './Home2.css';
import gym from '../../Images-roni/dumbbell.png'
import event from '../../Images-roni/party.png'
import drinks from '../../Images-roni/drinks.png'
import { Col, Row } from 'react-bootstrap';

const Home2 = () => {
   return (
      <div className="bac-color pb-5">
         <div className="pt-5 pb-4">
            <h1 className="welcome mt-5 pt-5 text-center">Welcome to Hotello</h1>
         </div>
         <div className="pt-5 pb-5">
         <Row className="justify-content-md-center">
            <Col sm={1} className="me-5">
            <img className="gym mb-4" src={drinks} alt="" />
               <h6 className="text-center">DRINKS</h6>
            </Col>
            <Col sm={1} className="me-2">
            <img className="gym mb-4" src={event} alt="" />
            <h6 className="text-center">EVENTS</h6>
            </Col>
            <Col sm={1} className="ms-5">
               <img className="gym mb-4" src={gym} alt="" />
               <h6 className="mb-4 text-center">GYM</h6>
            </Col>
         </Row>
         </div>
      </div>
   );
};

export default Home2;