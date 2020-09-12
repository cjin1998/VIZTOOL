import React from "react";
import { Dropdown, DropdownButton, Container, Row, Col } from "react-bootstrap";
import "./Filters.css";
import "./index.css";
import { Component } from "react";
import { LineChart, BarChart, PieChart } from "react-chartkick";

class Filters extends React.Component {
  render() {
    /*
     <Col lg="4" id="Button 1" >
    <DropdownButton id="dropdown-item-button-1" title="TIME">
    <Dropdown.Item as="button" >3 Months</Dropdown.Item>
        <Dropdown.Item as="button">6 Months</Dropdown.Item>
        <Dropdown.Item as="button">1 Year</Dropdown.Item>
        </DropdownButton>
        
          </Col>
        */

    var minA = [];
    console.log("DONE:");
    var datos = this.props.data1[0].data;
    Object.entries(datos).forEach(([key, value]) => {
      minA.push(value);
    });
    console.log(minA);
    var min = Math.min(...minA);
    var max = Math.max(...minA).toString();
    console.log(Math.min(minA));
    console.log(min);
    console.log(max);

    var titleT = this.props.test;
    return (
      <div id="contenedor">
        <div id="fila-A">
          <LineChart
            id="chart-1"
            height="220px"
            className="testF"
            legend={false}
            label="Value"
            colors={["#15DB95", "#CDE0E7"]}
            library={{
              title: {
                fontColor: "#FFFFFF",
                fontFamily: "Oswald",
                fontSize: 20
              },
              legend: {
                labels: {
                  fontColor: "#FFFFFF",
                  fontFamily: "sans-serif"
                }
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: "#FFFFFF",
                      fontFamily: "sans-serif"
                    },
                    scaleLabel: {
                      fontColor: "#FFFFFF",
                      fontFamily: "sans-serif"
                    },
                    gridLines: { drawBorder: true, color: "gray" }
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: "#FFFFFF",
                      fontFamily: "sans-serif"
                    },
                    scaleLabel: {
                      fontColor: "#FFFFFF",
                      fontFamily: "sans-serif"
                    },
                    gridLines: { drawBorder: true, color: "gray" }
                  }
                ]
              }
            }}
            title={this.props.test}
            xtitle="Year"
            ytitle={this.props.label}
            min={min}
            max={max}
            curve={false}
            data={this.props.data1}
            download={true}
            /*download="% of Population"*/
            download={{ background: "#FFFFFF" }}
          />
        </div>
        <div id="fila-B">
          <PieChart
            id="chart-2"
            height="210px"
            colors={["#5E88AB", "#15DB95", "#AEFFF1"]}
            title={this.props.title2}
            library={{
              title: {
                fontColor: "#FFFFFF",
                fontFamily: "Oswald"
              },
              legend: {
                labels: {
                  fontColor: "#FFFFFF",
                  fontFamily: "sans-serif"
                }
              }
            }}
            data={this.props.data2}
            donut={false}
            download={true}
            download="TOP 3 Migration Countries"
            download={{ background: "#FFFFFF" }}
          />
        </div>
        <div id="fila-C">
          <BarChart
            id="chart-2"
            height="210px"
            colors={["#15DB95"]}
            title={this.props.title3}
            library={{
              title: {
                fontColor: "#FFFFFF",
                fontFamily: "Oswald",
                fontSize: 20
              },
              legend: {
                labels: {
                  fontColor: "#FFFFFF",
                  fontFamily: "sans-serif"
                }
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      fontColor: "#FFFFFF",
                      fontFamily: "sans-serif"
                    },
                    scaleLabel: {
                      fontColor: "#FFFFFF",
                      fontFamily: "sans-serif"
                    },
                    gridLines: { drawBorder: true, color: "#FFFFFF" }
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: "#FFFFFF",
                      fontFamily: "sans-serif"
                    },
                    scaleLabel: {
                      fontColor: "#FFFFFF",
                      fontFamily: "sans-serif"
                    },
                    gridLines: { drawBorder: true, color: "#FFFFFF" }
                  }
                ]
              }
            }}
            data={this.props.data3}
            download={true}
            xtitle={this.props.leg3}
            /*download="Migration in numbers"*/
            download={{
              background: "#FFFFFF"
            }}
          />
        </div>
      </div>
    );
  }
}
export default Filters;
