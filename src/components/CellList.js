import HorizontalRule from './HorizontalRule'
import ListGroup from 'react-bootstrap/ListGroup';
import BtsCell from './BtsCell';
import '../styles/CellList.css'
import { useState } from 'react';

//{handleStateChange, handleFocusChange, list}
const CellList = (props) => {

  const handleInputClick = (calc) => { 
      let index = props.list.calc.findIndex( (x => x.id === calc.id));
      props.handleFocusChange( props.list.calc[index].value);
  };

   const handleInputChange = (calc) => {
      let index = props.list.calc.findIndex((obj => obj.id === calc.id));
      props.list.calc[index].value = props.calc.value;
      props.handleFocusChange(calc.value);
      props.handleStateChange(props.list);
   };

  return(
          <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item style={{border:'transparent'}}> 
            <HorizontalRule />
          </ListGroup.Item>
            <ul>
                  {props.list.calc.map(
                    (calc, index) =>
                      (
                        <li key={index} className='no-bullet'>
                          <ListGroup.Item style={{border:'transparent'}}>
                            <BtsCell handleInputClick={handleInputClick } handleInputChange={handleInputChange} calc={calc}/>
                          </ListGroup.Item>
                        </li>
                      ))
                  }
              </ul>
            </ListGroup>
            );
}

export default CellList;