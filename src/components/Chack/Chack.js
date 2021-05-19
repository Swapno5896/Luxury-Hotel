import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const Chack = () => {
   return (
      <div className="container">
         <div className="row CHECK-HOME">
            <div className="col-md-3">
               <input type="date" name="" id="" />
            </div>
            <div className="col-md-3">
               <NavDropdown title="Guests" id="basic-nav-dropdown">
                  <NavDropdown.Item >1</NavDropdown.Item>
                  <NavDropdown.Item >2</NavDropdown.Item>
                  <NavDropdown.Item >3</NavDropdown.Item>
                  <NavDropdown.Item >4</NavDropdown.Item>
               </NavDropdown>
            </div>
            <div className="col-md-3">
               <NavDropdown title="Children" id="basic-nav-dropdown">
                  <NavDropdown.Item >1</NavDropdown.Item>
                  <NavDropdown.Item >2</NavDropdown.Item>
                  <NavDropdown.Item >3</NavDropdown.Item>
                  <NavDropdown.Item >4</NavDropdown.Item>
               </NavDropdown>
            </div>
            <div className="col-md-3">
               <button>CHECK RATES</button>
            </div>
         </div>
      </div>
   );
};

export default Chack;