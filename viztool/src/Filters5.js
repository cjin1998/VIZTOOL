import React from 'react';
import {Dropdown, DropdownButton, Container, Row, Col} from 'react-bootstrap';
import './Filters.css'
import './index.css'
import {Component} from 'react';
import {LineChart, BarChart, PieChart} from 'react-chartkick';


function Filters(){

    var dataChar1=[
      {"name":"Migrants", data: {"1980": 3.2, "1985": 2.7, "1990": 3.1, "1995": 3.2, "2000": 2.8, "2005": 2.9, "2010": 3, "2015": 3.1, "2019": 3.3}}
     
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
    title="258 MILLION  INTERNATIONAL MIGRANTS"
    xtitle="Year" ytitle="% of Population"
    min="2"
    max="4"
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
    data={[["Turkey", 3.7], ["Pakistan", 1.4], ["Uganda", 1.2], ["Sudan", 1.1], ["Germany", 1.1]]}
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
