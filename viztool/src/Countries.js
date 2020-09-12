import React,{useState} from 'react';
import './Countries.css';
import './WorldMap.css';
import { symbolTriangle } from "d3";
import { geoMercator, geoPath } from "d3-geo";
import {interpolateGreens,interpolateBlues,interpolateGnBu,interpolateCool,interpolateTurbo,schemeBuGn} from "d3-scale-chromatic";
import { ZoomContainer } from "./zoom-container";
import {range,scaleThreshold,scaleSequential,scaleLinear,select} from "d3";
import {legendColor,legendHelpers} from "d3-svg-legend";
import { Stage } from "./stage";
import {Dropdown, DropdownButton, Container, Row, Col} from 'react-bootstrap';
import {Component} from 'react';
import Filters from "./Filters";
import Filters6 from "./Filters6";
import Filters3 from "./Filters3";
import Filters4 from "./Filters4";
import Filters5 from "./Filters5";
import './App.css';
import './WorldMap.css';
import { Tooltip } from "react-svg-tooltip";
const mercator = geoMercator();
const project = geoPath().projection(mercator);
const parks = require("./world/parks.json");  
const world1= require("./world/tr-cities.json");
const world2= require("./world/colombia.json");
const zoom1=[-12000.30780933588653,-2600.91951909185201];
const chart1="colombia"
const chart2="antioquia"
const chart3="turkey"
const toolTipText= 17;
const tooltipRectH = 40;
const testState = "testState";

class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {world: world2,
      chart:chart1,
      active: "countries",
      test: "normal"
    };
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }
  handleClick1() {
    this.setState(state => ({
      world: world1,
      chart:chart3  
    }));
    console.log(this.state)
    console.log("Here is the test")
    console.log(world2)
  
  }
  handleClick2(e) {

    this.setState(state => ({
      world: world2,
    }));
    console.log(this.state)
    console.log("Conoce estado");
    console.log("Estado actual");
    console.log(this.state);
   
    const region = e.target.id;
    console.log("Cambiocolor de:", typeof pais);
    console.log(e.target.id);
    console.log(e);


if(region == "NORTE_DE_SANTANDER"){
    /*CAMBIO DE LOS VECINOS */
    const doc = document.getElementById("NORTE_DE_SANTANDER");
    doc.id = doc.id + "2";
    const doc2 = document.getElementById("CORDOBA");
    doc2.id = doc2.id + "2";
    const doc3 = document.getElementById("ANTIOQUIA");
    doc3.id = doc3.id + "2";
    const doc4 = document.getElementById("CUNDINAMARCA");
    doc4.id = doc4.id + "2";
    const doc5 = document.getElementById("META");
    doc5.id = doc5.id + "2";
    const doc6 = document.getElementById("BOLIVAR");
    doc6.id = doc6.id + "2";
    const doc7 = document.getElementById("BOYACA");
    doc7.id = doc7.id + "2";


    if (this.state.test == "normal") {
    }

	this.setState(state =>({
		test:testState,
		chart:chart2
	}));
}
    


  }
  handleClick3() {
    this.setState(state => ({
      chart: chart2,
      
    }));
    	  /*const doc =document.getElementById('ANTIOQUIA')
	  doc.id= doc.id +"2"*/
    }
    
render(){

  var show2= <Filters3></Filters3>;
  var show3= <Filters4></Filters4>;
  var show4= <Filters5></Filters5>;
  var show6= <Filters6></Filters6>;
  switch (this.state.chart) {
    case chart2:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      show2= show6;
      console.log("Cambio del show 2")
      break;
      case chart1:
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
        show2= show2;
        console.log("Cambio del show dddddd")
        break;
        case chart3:
          //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
          show2= show4;
          console.log("Cambio del show llllll")
          break;
    default:
      show2 = show4;
      break;
  }
  
  console.log("listado COLOMBIA")
  console.log(world1)
  const testo=( <text  id="yo" x="551.2848452568062" y="123.28757822830341"  style={{fontSize: "2"} }>TURKEY
    </text>)
 const testo2=( <text  id="yo" x="256.4379756062368 " y="222.68340365674598"  style={{fontSize: "2.5"} }>COLOMBIA
 </text>)

console.log("aquivoy")
  if (this.state.world == world1){
  var show =  <div id="cMap">  
         
  <Stage width="100%" height="90%" class="map">
  <g transform={`translate(${-12000.30780933588653}, ${-2600.91951909185201}) scale(${15})`}>
<ZoomContainer>    
  {this.state.world.features.map((feature, index) => {
  const d = project(feature);   
  console.log("entro")
  return (
  <path   
  id={this.state.world.features[index].properties.NOMBRE_DPT}
    className="countries"
    key={index}
    d={d}
    fill= "#000"
    stroke="#666"
    strokeWidth={0.1}
    onClick={this.handleClick3}
  />
       )})}
       {testo}
</ZoomContainer>
</g>
</Stage>   
 </div>

    }

const centroid = world2.features.map((index) =>{
		return geoPath().centroid(index.geometry)
	})

console.log(centroid)
const densityPopCol= world2.features.map((index)=>{
	     return index.properties.POPULATION/(index.properties.AREA/1000000)
	})
const minDensityCol=Math.min(...densityPopCol)
const maxDensityCol= Math.max(...densityPopCol)

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

const valueMap= densityPopCol.map(i => {
return interpolateBlues(map_range(i,minDensityCol,500,0,1))
})

const textWidth= world2.features.map((index)=>{

let canvas = document.createElement('canvas');
let ctx = canvas.getContext("2d");
ctx.font = "14px Montserrat";        
let boxWidthName = ctx.measureText(index.properties.NOMBRE_DPT).width;
let boxWidthStr = ctx.measureText("PopDen: ").width;
let boxWidthPop = ctx.measureText(densityPopCol[index]).width;
let boxWidthPopDen = boxWidthStr + boxWidthPop
	if (boxWidthName < boxWidthPopDen){
return boxWidthPopDen;

	}else{

return boxWidthName;

	}
})

console.log([interpolateBlues(0),interpolateBlues(.16),interpolateBlues(.33),interpolateBlues(.5),interpolateBlues(.65),interpolateBlues(1)])


if (this.state.world == world2){

let thresholdScale= scaleThreshold()
  .domain([minDensityCol,500/4,(500/4)*2,(500/4)*3,500])
  .range([interpolateBlues(0),interpolateBlues(.16),interpolateBlues(.33),interpolateBlues(.5),interpolateBlues(.65),interpolateBlues(1)]);


let svg = select("svg");

svg.append("g")
  .attr("class", "legendQuant")
  .attr("fill","#fff")
  .attr("font-family","Montserrat Bold")
  .attr("font-size","15px")
  .attr("transform", "translate(50,25)");


let legend= legendColor()
  .labels(legendHelpers.thresholdLabels)
  .cells(6)
  .title("Populational Density")
  .scale(thresholdScale)

svg.select(".legendQuant")
  .call(legend);

let testStateShow = [];

let i = 0;

 const centroidTest= world2.features.map((index) =>{
  return [geoPath().centroid(index.geometry),index.properties.NOMBRE_DPT]
})

console.log(centroidTest)

centroidTest[10][0]=[centroidTest[10][0][0]-0.2,centroidTest[10][0][1]+0.2]
centroidTest[3][0]=[centroidTest[3][0][0]+0.3,centroidTest[3][0][1]+0.0]

var pathsDeadlineS=[centroidTest[17][0],centroidTest[17][0],centroidTest[3][0],centroidTest[3][0],centroidTest[4][0],centroidTest[4][0]]
var pathsDeadlineE=[centroidTest[3][0],centroidTest[4][0],centroidTest[0][0],centroidTest[9][0],centroidTest[15][0],centroidTest[10][0]]
var pathsWidth=["0.8","0.8","0.4","0.4","0.4","0.4","0.4","0.4"]
const pathFlux=["784","685","146","137","125","129","121","119"]
for (i = 0; i < pathsDeadlineE.length; i++) {
var astartPoint =
      pathsDeadlineS[i]
//centroid[Math.floor(Math.random() * centroid.length)];
var aendPoint =
      pathsDeadlineE[i]
// centroid[Math.floor(Math.random() * centroid.length)];
var acontrolPoint = [
  (astartPoint[0] + aendPoint[0]) / 2+0.3,
  (astartPoint[1] + aendPoint[1]) / 2+0.3
];


var theStartPoint = [mercator(astartPoint)];
var theEndPoint = [mercator(aendPoint)];
var theControlPoint = [mercator(acontrolPoint)];
var pathRef = React.createRef();
console.log(theControlPoint)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
      var apath2 = (
        <g>
          <defs>
            <marker
              id="EndMarker"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerUnits="strokeWidth"
              markerWidth="3"
              markerHeight="3"
              stroke="red"
              stroke-width="2"
              fill="none"
            >
              <rect x="0" y="0" width="10" height="10" />
            </marker>
            <marker
              id="markerArrow1"
              viewBox="0 0 10 10"
              markerWidth="2"
              markerHeight="2"
              refX="2"
              refY="6"
              orient="auto"
              fill="#FF6"
            >
              <path
                d="M0,5
            L0,10 L5,5 L0,0"
              />
            </marker>
            <linearGradient id="MyGradient">
              <stop offset="5%" stop-color="#15DB95" />
              <stop offset="95%" stop-color="#15DB95" />
            </linearGradient>
          </defs>
          <path
	    ref={pathRef}
            id="MyPath"
            className="curve2"
            d={`
      M ${theStartPoint}
      Q ${theControlPoint} ${theEndPoint}
    `}
            fill="none"
            /*stroke="url(#MyGradient)"*/
            //stroke="#57ffd5"
            stroke="#15DB95"
            stroke-width={pathsWidth[i]}
            stroke-linecap="round"
            /*marker-end="url(#markerArrow1)"*/
            onMouseOver={e => {
              e.preventDefault();
              console.log(this.state);
	    }}
         />
<Tooltip triggerRef={pathRef}>
                    <rect x={2} y={2} width={140} height={tooltipRectH/2} rx={5} ry={5} fill="#203044"/>
                    <text x={toolTipText} y={toolTipText} fontSize={14} fill='#fff'>
			    {"Migration Flux: "+ pathFlux[i]}
		    </text>
                </Tooltip> 
  
		           </g>
      );

      testStateShow.push(apath2);

    }   
console.log(testStateShow);



    switch (this.state.test) {
      case testState:
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
        show = testStateShow;
        console.log("Cambio del show testStateShow");
        break;
      default: 
        show = show;
        break;
    }


  var show = <div id="cMap">         
  <Stage width="100%" height="90%" class="map">
 <g transform={`translate(${-4500.30780933588653}, ${-3900.91951909185201}) scale(${18})`}> 


 <ZoomContainer>



  {this.state.world.features.map((feature, index) => {
  const d = project(feature); 
  const circleRef = React.createRef();
  return (
	  <g>
	   <path
	    ref={circleRef}
	    id={this.state.world.features[index].properties.NOMBRE_DPT}
	    className="countries"
	    key={index}
	    d={d}
	    fill={valueMap[index]}
	    stroke="#666"
	    strokeWidth={0.1}
	    onClick={this.handleClick2}
            onMouseOver={e => {
                  e.preventDefault();
	    }  }
	    	  />
		  <Tooltip triggerRef={circleRef}>
                    <rect x={2} y={2} width={textWidth[index]+5} height={tooltipRectH} rx={5} ry={5} fill="#166a6d"/>
                    <text x={toolTipText} y={toolTipText} fontSize={14} fill='#fff'>
			    {this.state.world.features[index].properties.NOMBRE_DPT}
		    </text>
	            <text x={toolTipText} y={toolTipText*2} fontSize={14} fill='#fff'>
			    PopDen: {densityPopCol[index].toFixed(3)}
		    </text>
                </Tooltip>
		  
		  {show}

	  </g>

       )})}

 </ZoomContainer>



 </g>
 </Stage>   
 </div>

}
  return (

    <div className="hundred">
    <Row className="hundred">
         <Col lg="8" id="c1">


       <div>
        <div id="Aux">
        <DropdownButton id="dropdown-item-button-1" title="SELECT COUNTRY" className="largo">
        <Dropdown.Item as="button" className="blanco" onSelect={this.handleClick2}>COLOMBIA</Dropdown.Item>
        <Dropdown.Item as="button" className="blanco" onSelect={this.handleClick1}>TURKEY</Dropdown.Item>
        </DropdownButton>
           </div>
       {show}
       </div>
       </Col>
   

     <Col lg="4" id="c2">
     {show2}
      </Col>
      </Row>
      </div>





  );}
}
export default Mapa ;

