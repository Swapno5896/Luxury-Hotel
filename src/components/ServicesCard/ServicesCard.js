import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ServicesCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ServicesCard = (props) => {
   const {img, name, description} = props.service;
   return (
      <div className="">
         <Row>
            <Col className="mb-4">
            <img src={img} alt="" />
            </Col>
            <Col>
            <h3 className="text-center font-family-change mt-5 pt-4 text-secondary">{name}</h3>
            <p className="text-center p-size pt-4 text-secondary">{description}</p>
            <h6 className="text-center pt-4">Read More <FontAwesomeIcon icon={faArrowRight} /></h6>
            </Col>
         </Row>
      </div>
   );
};

export default ServicesCard;