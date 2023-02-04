import Form from 'react-bootstrap/Form'
import {Card} from 'react-bootstrap';
import '../styles/sidebar.css'
import { useState } from 'react';
// import partial from 'lodash/partial';

// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// {handleInputClick, handleInputChange, calc}
function BtsCell(props) {

  const handleClick = () => {props.handleInputClick(props.calc)};
  const handleChange = () => {props.handleInputChange(props.calc)};

  return (
    <div>
    <Card>
      <Card.Body>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Control placeholder="Calc" 
                      onClick = {handleClick}  
                      onChange = {handleChange}
                      value={props.calc.value} />

          <Form.Text className="text-muted" >
          </Form.Text>
      </Form.Group>
      </Card.Body>
  </Card>
    </div>
  );
}

export default BtsCell;