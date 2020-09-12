import React from 'react';
import './Collaborate.css';
import { geoMercator, geoPath } from "d3-geo";
import { ZoomContainer } from "./zoom-container";
import { Stage } from "./stage";
import {Dropdown, DropdownButton, Container, Row, Col, Button, Form, Carousel, ListGroup,InputGroup, Spinner} from 'react-bootstrap';
import {Component} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import {LineChart, BarChart, PieChart, AreaChart, ColumnChart} from 'react-chartkick';
import './SuperResponsiveTableStyle.css'
import imagencita from "./opcional.png"
/*TEST*/
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

/*TEST*/

const collab="collab"
const donate="donate"
const choose="choose"
const form = "form"
const form2 = "form2"
const chart= "chart"
const dnd="dnd"
const customize="customize"
const thx="thanks"
class Collaborate extends Component {
  constructor(props) {
    super(props);
    this.state = {mode: choose,
      isChecked: true
    };
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    this.handleClick7 = this.handleClick7.bind(this);
    this.handleClick8 = this.handleClick8.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  handleClick1() {
    this.setState(state => ({
      mode: donate,
      
    }));
    console.log(this.state)
  
  }
  handleClick2() {
    this.setState(state => ({
      mode: collab
    }));
    console.log(this.state)
  }
  handleClick3() {
    this.setState(state => ({
      mode: form
    }));
    console.log(this.state)
  }

  handleClick4() {
    console.log("cambio de estado")
    this.setState(state => ({
      
      mode: chart
    }));




    console.log(this.state)
  }


  handleClick5() {
    this.setState(state => ({
      mode: dnd
    }));
    console.log(this.state)
  }

  handleClick7() {
    this.setState(state => ({
      mode: form2
    }));
    console.log(this.state)
  }

  handleClick8() {
    this.setState(state => ({
      mode: thx
    }));
    console.log("Gracias")
    console.log(this.state)
  }

  handleClick6() {
    this.setState(state => ({
      mode: customize
    }));
    console.log(this.state)
  }


/*AQUI EMPIEZA EL TEST*/























/*AQUI TERMINA EL TEST */




render(){


/*AQUI EMPIEZA EL TEST*/























/*AQUI TERMINA EL TEST */

  var dataChar1=[
    {"name":"Migrants", data: {"1980": 3.2, "1985": 2.7, "1990": 3.1, "1995": 3.2, "2000": 2.8, "2005": 2.9, "2010": 3, "2015": 3.1, "2019": 3.3}}
    ];
var tabla= <Table className="testT" >
  <Thead>
      <Tr>
          <Th>Annual Conference</Th>
          <Th>Year</Th>
          <Th>Location</Th>
          <Th>President</Th>
          <Th>Program Chair</Th>
          
      </Tr>
  </Thead>
  <Tbody>
      <Tr>
          <Td>31</Td>
          <Td>2017</Td>
          <Td>Alabama Community College System (ACCS)</Td>
          <Td>Mr. Toner Evans, Samford University</Td>
          <Td>Mr. Toner Evans, Samford University</Td>
         
      </Tr>
      <Tr>
          <Td>30</Td>
          <Td>2016</Td>
          <Td>Samford University</Td>
          <Td>Ms. Angel Jowers, University of West Alabama</Td>
          <Td>Mr. Toner Evans, Samford University</Td>
         
      </Tr>
 
  </Tbody>
</Table>

var tabla2= <Table className="testT2" >
<Thead>
    <Tr>
        <Th>Annual Conference</Th>
        <Th>Year</Th>
        <Th>Location</Th>
        <Th>President</Th>
        <Th>Program Chair</Th>
        
    </Tr>
</Thead>
<Tbody>
    <Tr>
        <Td>31</Td>
        <Td>2017</Td>
        <Td>Alabama Community College System (ACCS)</Td>
        <Td>Mr. Toner Evans, Samford University</Td>
        <Td>Mr. Toner Evans, Samford University</Td>
       
    </Tr>
    <Tr>
        <Td>30</Td>
        <Td>2016</Td>
        <Td>Samford University</Td>
        <Td>Ms. Angel Jowers, University of West Alabama</Td>
        <Td>Mr. Toner Evans, Samford University</Td>
       
    </Tr>

</Tbody>
</Table>





var customizeShow=<div className="Test10">
  <Row >
    <Col lg="4">
  <div className="tuner">
  <h1>
    FILTERS TO CUSTOMIZE
  </h1>
  <Button variant="primary" id="build" disabled>
    <Spinner
      as="span"
      animation="grow"
      size="sm"
      role="status"
      aria-hidden="true"
    />
    Loading... More cuztomizers are coming up
  </Button>

    <Row className="filters1">
      <Col lg="6" id="ajuste">
  <ListGroup>
  <ListGroup.Item><label>
        <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        Check Me!
       </label></ListGroup.Item>
  <ListGroup.Item> <label>  <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />Dapibus ac facilisis in </label></ListGroup.Item>
  <ListGroup.Item>  <label><input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />Morbi leo risus </label></ListGroup.Item>
  <ListGroup.Item> <label> <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />Porta ac consectetur ac </label></ListGroup.Item>
  <ListGroup.Item> <label> <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />Vestibulum at eros </label></ListGroup.Item>
</ListGroup>
</Col>
<Col lg="6" id="ajuste2">
<ListGroup>
  <ListGroup.Item><label>
        <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        Check Me!
       </label></ListGroup.Item>
  <ListGroup.Item> <label>  <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />Dapibus ac facilisis in </label></ListGroup.Item>
  <ListGroup.Item>  <label><input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />Morbi leo risus </label></ListGroup.Item>
  <ListGroup.Item> <label> <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />Porta ac consectetur ac </label></ListGroup.Item>
  <ListGroup.Item> <label> <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />Vestibulum at eros </label></ListGroup.Item>
</ListGroup>
</Col>
</Row>
  </div>
  </Col>
    <Col lg="8">
  <h1 id="lt">CUSTOMIZE YOUR REPORT AND DOWNLOAD IT</h1>
  <PieChart id="last" height="650px" width="1000px"
    colors={["#5E88AB","#15DB95","#AEFFF1"]}
    title="70.8 MILLION FORCIBLY DISPLACED PEOPLE WORLDWIDE"
    library={{
      title:{fontColor: "#FFFFFF",
      fontFamily: "Oswald"},
      legend: {
        labels: {
          fontColor: "#FFFFFF",
          fontFamily: "sans-serif"
        }
      },
    }}
    
    data={[["Internally Displaced People", 41.3], ["Refugees", 25.9], ["Asylum Seekers",3.5]]}
    donut={false}
    download={true}
    download="TOP 3 Migration Countries"
    download={{background: "#203044"}}
    />
    </Col>


  </Row>
  </div>

var dndshow=   <div className="Test2">  
<h1>CHOOSE THE VARIABLES OF YOUR DATA THAT YOU WANT TO VISUALIZE IN THE SELECTED CHART</h1>
<DndProvider backend={HTML5Backend}>
    <Homepage />
</DndProvider>
<Button id="subBut3" onClick={this.handleClick6}>GENERATE CUSTOMIZABLE CHART</Button>   
</div>




  var botones =  <div className="botones"><Button onClick={this.handleClick1} style={ {color: '#15DB95'}} className="b1">DONATE</Button><Button className="b1" onClick={this.handleClick2} style={ {color: '#15DB95'}}> VISUALIZE YOUR DATA</Button></div>
  var collabshow= <div> 
     <Row>
  <Col lg="8">  
    
    
    <div className="Test" id="vizTit"><h1>INSTRUCTIONS TO VISUALIZE YOUR DATA</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nibh id sapien iaculis posuere
       ut id magna. Aliquam dapibus volutpat tortor. Aliquam condimentum odio id lorem elementum, ullamcorper lobortis felis eleifend. Donec hendrerit erat rhoncus, hendrerit orci id, condimentum lacus.
        Pellentesque ut ligula et tortor tempus pulvinar. Curabitur euismod ante velit, sit amet mattis lacus lacinia at. In hac habitasse platea dictumst. Duis sit amet accumsan ante. Pellentesque id blandit
         metus. In porta risus vestibulum, feugiat dolor gravida, aliquam massa. Quisque bibendum turpis ut metus finibus, a vulputate diam viverra.
</p><p>
  Nam sollicitudin arcu vitae sagittis tempus. Aliquam sed quam eu tellus placerat luctus nec quis nisl. Aenean faucibus sapien quis aliquet consectetur. Nullam porttitor posuere consectetur. 
  Pellentesque eleifend tortor eros, non scelerisque sapien congue a. Nullam sit amet risus convallis, scelerisque nibh vitae, maximus eros. Morbi rhoncus suscipit erat, eu tincidunt ex cursus
   in. In dui purus, commodo sit amet aliquam non, lacinia non arcu. Aenean porta ligula mi, eu pulvinar orci aliquam vel. Curabitur luctus mi in commodo faucibus. Nunc pulvinar quam sagittis,
    vehicula lacus vel, sagittis orci. In eleifend ac urna eu porttitor. Vivamus id commodo risus.
  </p>

  <div className="fix2">

    {tabla2}
    <Button id="getStarted2" onClick={this.handleClick3}>GET STARTED</Button>    
  </div>  
    </div> 

    </Col>
<Col lg="4">
<img
        src={imagencita}
        width="700"
        height="800"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
</Col>
</Row>
  </div>
  
  
  var donateshow= <div>
    
    <Row>
  <Col lg="8">  
    <div className="Test" id="donTit"><h1 >INSTRUCTIONS TO DONATE</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nibh id sapien iaculis posuere
  ut id magna. Aliquam dapibus volutpat tortor. Aliquam condimentum odio id lorem elementum, ullamcorper lobortis felis eleifend. Donec hendrerit erat rhoncus, hendrerit orci id, condimentum lacus.
   Pellentesque ut ligula et tortor tempus pulvinar. Curabitur euismod ante velit, sit amet mattis lacus lacinia at. In hac habitasse platea dictumst. Duis sit amet accumsan ante. Pellentesque id blandit
    metus. In porta risus vestibulum, feugiat dolor gravida, aliquam massa. Quisque bibendum turpis ut metus finibus, a vulputate diam viverra.
</p><p>
Nam sollicitudin arcu vitae sagittis tempus. Aliquam sed quam eu tellus placerat luctus nec quis nisl. Aenean faucibus sapien quis aliquet consectetur. Nullam porttitor posuere consectetur. 
Pellentesque eleifend tortor eros, non scelerisque sapien congue a. Nullam sit amet risus convallis, scelerisque nibh vitae, maximus eros. Morbi rhoncus suscipit erat, eu tincidunt ex cursus
in. In dui purus, commodo sit amet aliquam non, lacinia non arcu. Aenean porta ligula mi, eu pulvinar orci aliquam vel. Curabitur luctus mi in commodo faucibus. Nunc pulvinar quam sagittis,
vehicula lacus vel, sagittis orci. In eleifend ac urna eu porttitor. Vivamus id commodo risus.
</p>
</div>
<div className="fix">
{tabla}   
<Button id="getStarted1" onClick={this.handleClick7}>GET STARTED</Button> </div>
</Col>
<Col lg="4">
<img
        src={imagencita}
        width="700"
        height="800"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />


</Col>


</Row>
</div>


var chartShow=<div className="Test2" id="charTit"><h1>CHOOSE ANY KIND OF VISUALIZATION TO APPLY TO YOUR DATA</h1>


<Carousel className="caro">
  
<Carousel.Item className="items">
   <div className="Test8">
    
   <PieChart id="chart-2" height="420px" width="800px"
    colors={["#5E88AB","#15DB95","#AEFFF1"]}
    title="70.8 MILLION FORCIBLY DISPLACED PEOPLE WORLDWIDE"
    library={{
      title:{fontColor: "#FFFFFF",
      fontFamily: "Oswald"},
      legend: {
        labels: {
          fontColor: "#FFFFFF",
          fontFamily: "sans-serif"
        }
      },
    }}
    
    data={[["Internally Displaced People", 41.3], ["Refugees", 25.9], ["Asylum Seekers",3.5]]}
    donut={false}
    download={true}
    download="TOP 3 Migration Countries"
    download={{background: "#203044"}}
    />

   </div>
   <Carousel.Caption>
      <h3>Pie Chart</h3>
      
  </Carousel.Caption>
   </Carousel.Item>




  <Carousel.Item className="items">

  <div className="Test8">
  <LineChart id="chart-1" height="420px" width="800px" className="testF"
    legend={false}
    label="Value"
    colors={["#15DB95","#CDE0E7"]}
    library={{
      title:{fontColor: "#FFFFFF",
      fontFamily: 'Oswald',
      fontSize:20},
      legend: {
        labels: {
          fontColor: "#FFFFFF",
          fontFamily: 'sans-serif'
        }
      },
      scales: {
        yAxes: [
          {
            ticks: { fontColor: "#FFFFFF" ,
            fontFamily: 'sans-serif'},
            scaleLabel: { fontColor: "#FFFFFF" ,
            fontFamily: 'sans-serif'},
            gridLines: { drawBorder: true, color: "gray" }

          }
        ],
        xAxes: [
          {
            ticks: { fontColor: "#FFFFFF" ,
            fontFamily: 'sans-serif'},
            scaleLabel: { fontColor: "#FFFFFF" ,
            fontFamily: 'sans-serif'},
            gridLines: { drawBorder: true, color: "gray" }

          }
        ]
      }
    }}
    title="258 MILLION  INTERNATIONAL MIGRANTS"
    xtitle="Year" ytitle="% of Population"
    min="2"
    max="4"
    curve={false}
    data={dataChar1}
    download={true}
    /*download="% of Population"*/
    download={{background: "#203044"}}

    />
    </div>

    <Carousel.Caption>
      <h3>Line Chart</h3>
      
    </Carousel.Caption>
  </Carousel.Item>



  <Carousel.Item>
  <div className="Test8">
  <BarChart id="chart-2" height="420px" width="800px"
    colors={["#15DB95"]} 
    title="TOP REFUGEE HOSTING COUNTRIES"
    library={{
      title:{fontColor: "#FFFFFF",
      fontFamily: 'Oswald',
      fontSize:20},
      legend: {
        labels: {
          fontColor: "#FFFFFF",
          fontFamily: 'sans-serif'
        }
      },
      scales: {
        yAxes: [
          {
            ticks: { fontColor: "#FFFFFF",
            fontFamily: "sans-serif"},
            scaleLabel: { fontColor: "#FFFFFF",
            fontFamily:  "sans-serif" },
            gridLines: { drawBorder: true, color: "#FFFFFF" }
          }
        ],
        xAxes: [
          {
            ticks: { fontColor: "#FFFFFF" ,
            fontFamily: "sans-serif"
          },
            scaleLabel: { fontColor: "#FFFFFF" ,
            fontFamily: 'sans-serif'},
            gridLines: { drawBorder: true, color: "#FFFFFF" }
          }
        ]
      }
    }
    }
    data={[["Turkey", 3.7], ["Pakistan", 1.4], ["Uganda", 1.2], ["Sudan", 1.1], ["Germany", 1.1]]}
    download={true}
    xtitle="Millions of people"
    /*download="Migration in numbers"*/
    download={{background: "#203044"
  }}
    />
  </div>
    <Carousel.Caption>
      <h3>Bar Chart</h3>
   
    </Carousel.Caption>
  </Carousel.Item>



  <Carousel.Item>
  <div className="Test8">
  <AreaChart id="chart-2" height="420px" width="800px"
    colors={["#15DB95"]} 
    title="TOP REFUGEE HOSTING COUNTRIES"
    library={{
      title:{fontColor: "#FFFFFF",
      fontFamily: 'Oswald',
      fontSize:20},
      legend: {
        labels: {
          fontColor: "#FFFFFF",
          fontFamily: 'sans-serif'
        }
      },
      scales: {
        yAxes: [
          {
            ticks: { fontColor: "#FFFFFF",
            fontFamily: "sans-serif"},
            scaleLabel: { fontColor: "#FFFFFF",
            fontFamily:  "sans-serif" },
            gridLines: { drawBorder: true, color: "#FFFFFF" }
          }
        ],
        xAxes: [
          {
            ticks: { fontColor: "#FFFFFF" ,
            fontFamily: "sans-serif"
          },
            scaleLabel: { fontColor: "#FFFFFF" ,
            fontFamily: 'sans-serif'},
            gridLines: { drawBorder: true, color: "#FFFFFF" }
          }
        ]
      }
    }
    }
    data={[["Turkey", 3.7], ["Pakistan", 1.4], ["Uganda", 1.2], ["Sudan", 1.1], ["Germany", 1.1]]}
    download={true}
    xtitle="Millions of people"
    /*download="Migration in numbers"*/
    download={{background: "#203044"
  }}
    />
  </div>
    <Carousel.Caption>
      <h3>Area Chart</h3>
     
    </Carousel.Caption>
  </Carousel.Item>




  <Carousel.Item>
  <div className="Test8">
  <ColumnChart id="chart-2" height="420px" width="800px"
    colors={["#15DB95"]} 
    title="TOP REFUGEE HOSTING COUNTRIES"
    library={{
      title:{fontColor: "#FFFFFF",
      fontFamily: 'Oswald',
      fontSize:20},
      legend: {
        labels: {
          fontColor: "#FFFFFF",
          fontFamily: 'sans-serif'
        }
      },
      scales: {
        yAxes: [
          {
            ticks: { fontColor: "#FFFFFF",
            fontFamily: "sans-serif"},
            scaleLabel: { fontColor: "#FFFFFF",
            fontFamily:  "sans-serif" },
            gridLines: { drawBorder: true, color: "#FFFFFF" }
          }
        ],
        xAxes: [
          {
            ticks: { fontColor: "#FFFFFF" ,
            fontFamily: "sans-serif"
          },
            scaleLabel: { fontColor: "#FFFFFF" ,
            fontFamily: 'sans-serif'},
            gridLines: { drawBorder: true, color: "#FFFFFF" }
          }
        ]
      }
    }
    }
    data={[["Turkey", 3.7], ["Pakistan", 1.4], ["Uganda", 1.2], ["Sudan", 1.1], ["Germany", 1.1]]}
    download={true}
    xtitle="Millions of people"
    /*download="Migration in numbers"*/
    download={{background: "#203044"
  }}
    />
  </div>
    <Carousel.Caption>
      <h3>Column Chart</h3>
     
    </Carousel.Caption>
  </Carousel.Item>







  
</Carousel>

<Button variant="primary" type="submit" id="subBut2" onClick={this.handleClick5}>
CHOOSE VARIABLES
    </Button>

</div>




var formShow=<div className="formTest">
<Form className="formShow">
  <Form.Group controlId="formBasicEmail"  className="formShow">
      <h1>General user info</h1>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
    <Form.Label>Surname</Form.Label>
    <Form.Control type="text" placeholder="Enter surname" />
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" placeholder="Enter e-mail" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword" className="formShow">
  <h1>Data information</h1>
    <Form.Label>Data set Name</Form.Label>
    <Form.Control type="text" placeholder="Data set Name" />
    <Form.Label>Data set description</Form.Label>
    <Form.Control type="text" placeholder="Data set Description"/>
    <Form.Label>Data set Format</Form.Label>
    <Form.Control type="text" placeholder="Data set Description"/>
    <p>Please let us know if you want to simply visualize your data or you want to donate your data set:</p>
    <Button id="subBut5"> UPLOAD</Button>
    </Form.Group>
    <Button variant="primary"  id="subBut" onClick={this.handleClick4}>
      SUBMIT

    </Button>
</Form>
</div>


var formShow2=<div className="formTest">
<Form className="formShow">
  <Form.Group controlId="formBasicEmail"  className="formShow">
      <h1>General user info</h1>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
    <Form.Label>Surname</Form.Label>
    <Form.Control type="text" placeholder="Enter surname" />
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" placeholder="Enter e-mail" />
  </Form.Group>
  <Form.Group controlId="formBasicPassword" className="formShow">
  <h1>Data information</h1>
    <Form.Label>Data set Name</Form.Label>
    <Form.Control type="text" placeholder="Data set Name" />
    <Form.Label>Data set description</Form.Label>
    <Form.Control type="text" placeholder="Data set Description"/>
    <Form.Label>Data set Format</Form.Label>
    <Form.Control type="text" placeholder="Data set Description"/>
    <p>Please let us know if you want to simply visualize your data or you want to donate your data set:</p>
    <Button id="subBut5"> UPLOAD</Button>
    </Form.Group>
    <Button variant="primary"  id="subBut" onClick={this.handleClick8}>
      SUBMIT
    </Button>
</Form>
</div>




var thanks=<div className="thanks"><div className="thanks2"><h1>Thank you for donating your data!</h1><p>We will soon validate and upload your data to our visualization</p></div></div>



  var show={}
  switch (this.state.mode) {
    case choose:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      show= botones;
      break;
    case donate:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      show= donateshow;
      break;
    case collab:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      show=collabshow
      break;
    case form:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      show=formShow
    break;
    case chart:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
      show=chartShow
    break;
    case thx:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        show=thanks
      break;
    case dnd:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
        show=dndshow
      break;
      case form2:
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
          show=formShow2
        break;
    case customize:
      show=customizeShow;
      break;
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión   {show}
      show=botones
      break;
  }
  return (
        <div className="Size" id="testR">
 
 {show}
       </div>
  );}
}
export default Collaborate ;

