import React from 'react';
import './App.css';
import NaviBar from './NaviBar.js';
import { Row, Col, Modal, Button} from 'react-bootstrap';
import WorldMap from './WorldMap.js';
import Countries from './Countries.js';
import Main from './Main.js';
import Filters from './Filters.js';
import { LineChart, PieChart } from 'react-chartkick';
import 'chart.js';
import {Dropdown, DropdownButton} from 'react-bootstrap';




function MyVerticallyCenteredModal(props) {
  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modali">
      <Modal.Header  closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Welcome to V2: Voyage Viewer!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>      
        <p>
        We want to help visualize human mobility around the world. We especially want to highlight
        the journeys made my forcibly displaced people and asylum seekers. 
        We believe that working together we can build a more complete picture of how humans travel, relocate and migrate across the world.
        That's why we want to encourage you to donate any mobility data to our repository.
        </p>
      </Modal.Body>
      <Modal.Footer >
      <Button className="extra" onClick={props.onHide}>DONATE</Button>
        <Button className="extra" id="suggest" onClick={props.onHide}>ENTER</Button>
      </Modal.Footer>
      </div>
    </Modal>
  );
}



function App() { 

  const [modalShow, setModalShow] = React.useState(true);

/* <div id="Aux">
        <DropdownButton id="dropdown-item-button-1" title="SELECT COUNTRY">
        <Dropdown.Item as="button">Top Destinations</Dropdown.Item>
        <Dropdown.Item as="button" >Top Origins</Dropdown.Item>
        <Dropdown.Item as="button" >C2C</Dropdown.Item>
        </DropdownButton>
           </div>
           */



  return (
    <div className="App" >
<MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          <div id="navigationBar">
              <NaviBar></NaviBar>
          </div>
           <div id="content"> 
              <Row id="mainRow" >
              <Col lg="12" id="c1" >
               <Main></Main></Col>            
              </Row>           
           </div>
		   <Countries></Countries>
    </div>
  );
}
export default App ;


