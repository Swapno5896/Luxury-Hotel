import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  Image,
  Badge,
} from "react-bootstrap";
import "./ReviewCard.css";
import usesrImg from '../../img-hotel/userImg.jpg'
const ReviewCard = (props) => {
  const { title, text } = props.fd;
  return (
    
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <div className='review-user'>
      <img id='reviewImg' src={usesrImg} alt="" />
      <p className='useName'>fdsfsd</p>
      {/* <Card.Title>{title}</Card.Title> */}
    </div>
 

  
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>

  </Card.Body>
</Card>
  );
};

export default ReviewCard;
