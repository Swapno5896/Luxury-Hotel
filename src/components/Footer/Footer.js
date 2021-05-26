import React from "react";
import "./Footer.css";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className='footer-Hotello'>
        <h3 className='footer-title' >Hotello</h3>
        <p>
          We always strive for growth and development as StylemixThemes. We
          don’t want to have a large team, we want to have a team that works in
          unity. Our slogan is “Every day is the last day”.
        </p>
      </div>
      <div className='footer-Hotello'>
        <h3 className='footer-title'>GALLERY</h3>
        <p>
          We always strive for growth and development as StylemixThemes. We
          don’t want to have a large team, we want to have a team that works in
          unity. Our slogan is “Every day is the last day”.
        </p>
      </div>
      <div className='footer-Hotello'>
        <h3 className='footer-title'>CONTACT US</h3>
        <p> 1010 Berkler avenue, Brooklyn, New York City, NY 10018 US</p>
        <p>
          Tel.: +1 998 150 3020 <br /> Fax.: +1 998 150 3020
        </p>
        <p>info@stylemixthemes.com</p>
      </div>
      <div className='footer-Hotello'>
        <h3 className='footer-title'>STAY IN TOUCH</h3>
        <p>Enter your email address for promotions and news.</p>
        <input type="text" name="" id="" />
        <button>Submit</button>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
