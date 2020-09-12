import React from 'react';
import {Dropdown, DropdownButton, Container, Row, Col} from 'react-bootstrap';
import './Filters.css'
import './index.css'
import {Component} from 'react';
import {LineChart, BarChart, PieChart} from 'react-chartkick';


function Filters(){

    var dataChar1=[
      {"name":"Migrants", data: {"2015": 2.43 , "2016": 2.77, "2017": 3.01, "2018":4.1, "2019": 5.3}}
     
      ];


/*
 <Col lg="4" id="Button 1" >
<DropdownButton id="dropdown-item-button-1" title="TIME">
<Dropdown.Item as="button" >3 Months</Dropdown.Item>
    <Dropdown.Item as="button">6 Months</Dropdown.Item>
    <Dropdown.Item as="button">1 Year</Dropdown.Item>
    </DropdownButton>
    
      </Col>
    */


  return(
   <div id="contenedor">


    <div id="fila-A" >

    <LineChart id="chart-1" height="220px" className="testF"
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
    title="UP TO 3 MILLION  DEPARTURES DUE TO CRISIS"
    xtitle="Year" ytitle="Total Migrants(Millions)"
    min="2"
    max="6"
    curve={false}
    data={dataChar1}
    download={true}
    /*download="% of Population"*/
    download={{background: "#FFFFFF"}}

    />

    </div>
    <div id="fila-B" >

    <PieChart id="chart-2" height="210px"
    colors={["#5E88AB","#15DB95","#AEFFF1"]}
    title="REASONS TO GET DISPLACED"
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
    
    data={[["Lack of health care system", 15.3], ["Poberty", 50.2], ["Oppositors",3.5]]}
    donut={false}
    download={true}
    download="TOP 3 Migration Countries"
    download={{background: "#FFFFFF"}}
    />




    

    </div>
    <div id="fila-C" >
    <BarChart id="chart-2" height="210px"
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
    data={[["Colombia", 1.1], ["Peru", 0.5], ["Chile", 0.28], ["Ecuador", 0.22], ["Brazil", 0.09]]}
    download={true}
    xtitle="Millions of people"
    /*download="Migration in numbers"*/
    download={{background: "#FFFFFF"
  }}
    />

    </div>



   </div>
    );}

export default Filters;
