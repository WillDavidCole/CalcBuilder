import './App.css';
import CellList from './components/CellList.js';
import TextArea from './components/TextArea';
import BtsNavbar from './components/BtsNavbar';
import {Row, Col, Container} from 'react-bootstrap';
import { useState } from 'react';

function App() {

  const [currentFocus, setCurrentFocus] = useState();
  const [list, setList] = useState({calc: [{id:1, value: 'value'}, {id:2, value: ''}, ] });

  const handleStateChange = ( (calcs) => { setList(calcs)});
  const handleFocusChange = ( (calc) => {
                                          setCurrentFocus(calc)}
                            );

  return (
    <Container>
      <Row>
        <BtsNavbar /> 
      </Row>
      <Col md={12}>
        <Row className="fluid full" >
          <Col md={9}>
            <CellList handleStateChange={handleStateChange} handleFocusChange={handleFocusChange} list={list} />
          </Col>
          <Col md={3}>
            <TextArea className="fluid full" currentFocus={currentFocus}/>
          </Col>
        </Row>
      </Col>
      </Container>
  );
}

export default App;