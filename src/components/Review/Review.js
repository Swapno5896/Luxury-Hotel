import React from "react";
import { CardDeck, Container, Row, Col, Card, Form } from "react-bootstrap";
import ReviewCard from "../ReviewCard/ReviewCard";
import './Review.css'
const Review = () => {
    const fakedata = [
        {title:'Hotello',text:` Land make every fill of she'd above fish blessed place. Fish i you together grass blessed. Night grass replenish have. Cattle tree seasons fifth winged there had. Fruit. Be meat creepeth forth firmament over very air i was brought moveth.Land make every fill of she'd above fish blessed place. Fish i you together grass blessed. Night grass replenish have. Cattle tree seasons fifth winged there had. Fruit. Be meat creepeth forth firmament over very air i was brought moveth.`},   
         {title:'Hotello',text:`  Life fly Let two, he had it. Multiply fowl blessed female don't saying replenish living after also said from abundantly. Open. Abundantly you she'd lesser blessed which. Don't day she'd form meat lights called seas Dry you appear likeness moving.`},
         {title:'Hotello',text:` Fruitful tree night saying firmament seed morning rule man creepeth be made had creeping let can't gathering his lesser. Upon they're seasons green day beast without form man be firmament years shall the appear moveth signs had.`}
    ]
  return (
    <div className='review-container'>
      <Container>
      <Card.Text className="text-center">Customer Reviews</Card.Text>

        <Row>
        <CardDeck>
            {
              fakedata.map(fd =><ReviewCard fd={fd}></ReviewCard>)
            }
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
