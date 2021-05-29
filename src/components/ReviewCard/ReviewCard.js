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
      <p className='useName'>{title}</p>
      {/* <Card.Title>{title}</Card.Title> */}
    </div>
 

  
    <Card.Text>
  {text}
    </Card.Text>

  </Card.Body>
</Card>
  );
};

export default ReviewCard;
