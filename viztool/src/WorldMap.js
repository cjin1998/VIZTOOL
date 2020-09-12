import React from "react";
import "./WorldMap.css";
import { geoMercator, geoPath } from "d3-geo";
import { ZoomContainer } from "./zoom-container";
import { Stage } from "./stage";
import ReactDOM from "react-dom";
import noUiSlider from "nouislider";
import "nouislider/distribute/nouislider.css";
import { symbolTriangle } from "d3";
import {
  Dropdown,
  DropdownButton,
  Container,
  Row,
  Col,
  Modal,
  Button
} from "react-bootstrap";
import Filters from "./Filters";
import Filters2 from "./Filters2";
import "./App.css";
import axios from "axios";
import "./Filters.css";
import { Tooltip } from "react-svg-tooltip";
import IM0 from "./IM0.jpeg";
import IM1 from "./IM1.jpeg";
import IM2 from "./IM2.jpeg";
import IM3 from "./IM3.jpeg";
import Carousel from "react-bootstrap/Carousel";
const world = require("./world/50m.json");
const nuevomundo = require("./world/50m1.json");
const parks = require("./world/parks.json");
const testState = "testState";
const toolTipText = 17;
const tooltipRectH = 40;

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      id="Elmodal1"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modali" id="divDelModal" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Welcome to V2: Voyage Viewer!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container id="contcar">
            <Row>
              <Col xs={24} md={15}>
                <Carousel id="car">
                  <Carousel.Item id="car1">
                    <img
                      src={IM0}
                      id="imagen"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                    <Carousel.Caption>
                      <h3>Main frame</h3>
                      <p>
                        Voyage Viewer lets you visualize different population
                        flows between countries from entire world
                        <p>There are 4 sections: </p>
                        <ul>
                          <li>Worldwide visualization.</li>
                          <li>Drill down by country.</li>
                          <li>
                            Visualize your geographic data set using our tool.
                          </li>
                          <li>Donate yout data set.</li>
                        </ul>
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item id="car2">
                    <img
                      src={IM1}
                      id="imagen1"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />

                    <Carousel.Caption>
                      <h3>Fist step</h3>
                      <p>
                        Click on "Migration direction" dropdown button to select
                        betweenn incomming, outgoing or country to country (C2C)
                        direction view.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item id="car3">
                    <img
                      src={IM2}
                      id="imagen2"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />

                    <Carousel.Caption>
                      <h3>Second step</h3>
                      <p>
                        On "TOP" button you are able to select the number of
                        related countries to show.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item id="car4">
                    <img
                      src={IM3}
                      id="imagen3"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />

                    <Carousel.Caption>
                      <h3>Third step</h3>
                      <p>
                        Select the country you are interested on by clicking on
                        it.{" "}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button className="extra" onClick={props.onHide}>
            DONATE
          </Button>
          <Button className="extra" id="suggest" onClick={props.onHide}>
            ENTER
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

class WorldMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "country",
      test: "normal",
      data: [],
      dataPath: [],
      country: [],
      direction: "Migration",
      top: "1",
      chosenC: "",
      originC: "",
      destC: "",
      mode: "genInfo",
      but1: "MIGRATION DIRECTION",
      but2: "TOP",
      topData: [],
      modalShow: true,
      titleC1: "258 MILLION INTERNATIONAL MIGRANTS",
      titleC2: "70.8 MILLION FORCIBLY DISPLACED PEOPLE WORLDWIDE",
      titleC3: "TOP REFUGEE HOSTING COUNTRIES",
      dataChart1: [
        {
          name: "Migrants",
          data: {
            "2014": 3.2,
            "2015": 2.7,
            "2016": 3.1,
            "2017": 3.2,
            "2018": 2.8,
            "2019": 2.9
          }
        }
      ],
      dataChart2: [
        ["Refugees", 25.9],
        ["Asylum Seekers", 3.5]
      ],
      dataChart3: [
        ["Turkey", 3.7],
        ["Pakistan", 1.4],
        ["Uganda", 1.2],
        ["Sudan", 1.1],
        ["Germany", 1.1]
      ],
      leg3: "MILLIONS OF PEOPLE",
      statsName: "WORLD GENERAL STATISTICS",
      c1Label: "% of Population",
      origins: [],
      destinations: [],
      originsN: [],
      destinationsN: [],
      itemList: []
    };

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    this.handleClick7 = this.handleClick7.bind(this);
    this.handleClick8 = this.handleClick8.bind(this);
    this.handleClick9 = this.handleClick9.bind(this);
    this.handleClick14 = this.handleClick14.bind(this);
    this.modal = this.modal.bind(this);
    this.handleColors = this.handleColors.bind(this);
    this.eraseC = this.eraseC.bind(this);
    this.eraseAll = this.eraseAll.bind(this);
    this.handleData = this.handleData.bind(this);
    this.handleC2C = this.handleC2C.bind(this);
  }

  componentDidMount() {
    var slider = document.getElementById("slider");
    noUiSlider.create(slider, {
      start: [50, 100],
      range: {
        min: 0,
        max: 100
      },
      pips: {
        mode: "values",
        values: [20, 80],
        density: 4
      }
    });
  }

  handleClick4() {
    this.setState({ direction: "Incoming", but1: "INCOMING" });
  }

  handleClick5() {
    this.setState({ direction: "Outgoing", but1: "OUTGOING" });
  }
  handleClick9() {
    this.setState({ direction: "C2C", mode: "specInfo", but1: "C2C" });
  }
  handleClick6() {
    this.setState({ top: 3, but2: "TOP 3" });
  }
  handleClick7() {
    this.setState({ top: 5, but2: "TOP 5" });
  }
  handleClick8() {
    this.setState({ top: 10, but2: "TOP 10" });
  }

  modal() {
    this.setState({ modalShow: false });
  }

  eraseC(origin, dest) {
    var doc = document.getElementById(origin);
    if (doc !== null) {
      doc.classList.remove("origin");
    }

    var desti = document.getElementById(dest);
    if (desti !== null) {
      desti.classList.remove("destination");
    }
  }

  handleClick14(a) {
    while (a.length > 0) {
      this.eraseC(a[0]["originCountry"], a[0]["destCountry"]);
      console.log("item erased: ", a[0]);
      a.shift();
      console.log("a after shifted", a);
    }
  }

  eraseAll(count, dir) {
    axios
      .get("http://localhost:3001/api/getDirectionalData", {
        headers: {
          Country: count,
          direction: dir,
          top: 20
        }
      })
      .then(data => data.data)
      .then(res =>
        this.setState({ itemList: res.data }, () =>
          this.handleClick14(this.state.itemList)
        )
      );
  }

  handleColors(origin, dest) {
    var doc = document.getElementById(origin);
    if (doc !== null) {
      doc.classList.add("origin");
    }
    var desti = document.getElementById(dest);
    if (desti !== null) {
      desti.classList.add("destination");
    }
  }

  handleData(pathInfo) {
    let refCount = 0;
    let refCount2 = 0;
    let data3 = [];

    pathInfo.forEach(element => {
      refCount += element.numRefugees;
      refCount2 += element.numAsylumSeekers;
      if (this.state.direction == "Outgoing") {
        data3.push([element.destCountry, element.numAsylumSeekers]);
      }

      if (this.state.direction == "Incoming") {
        data3.push([element.originCountry, element.numAsylumSeekers]);
      }
    });

    let total = refCount + refCount2;

    this.setState(state => ({
      titleC1: total + " " + this.state.direction.toUpperCase() + " MIGRANTS",
      c1Label: "# Migrants",
      dataChart1: [
        {
          name: "Migrants",
          data: {
            "2014": Math.trunc(total * 0.2),
            "2015": Math.trunc(total * 0.45),
            "2016": Math.trunc(total * 0.6),
            "2017": Math.trunc(total * 0.81),
            "2018": Math.trunc(total * 0.89),
            "2019": total
          }
        }
      ],
      titleC2: total + " " + "FORCIBLY DISPLACED PEOPLE WORLDWIDE",
      dataChart2: [
        ["Refugees", refCount],
        ["Asylum Seekers", refCount2]
      ],
      titleC3:
        "TOP " +
        this.state.top +
        " " +
        this.state.direction.toUpperCase() +
        " COUNTRIES",
      dataChart3: data3,
      leg3: "MUMBER OF MIGRANTS"
    }));
  }

  handleC2C(pathInfo) {
    if (pathInfo[0]) {
      var refCount = pathInfo[0]["numRefugees"];
      var refCount2 = pathInfo[0]["numAsylumSeekers"];

      var total = refCount + refCount2;

      this.setState(state => ({
        titleC1: total + " " + "OUTGOING MIGRANTS",
        c1Label: "# Migrants",
        dataChart1: [
          {
            name: "Migrants",
            data: {
              "2014": Math.trunc(total * 0.2),
              "2015": Math.trunc(total * 0.45),
              "2016": Math.trunc(total * 0.6),
              "2017": Math.trunc(total * 0.81),
              "2018": Math.trunc(total * 0.89),
              "2019": total
            }
          }
        ],
        titleC2: total + " " + "FORCIBLY DISPLACED PEOPLE",
        dataChart2: [
          ["Refugees", refCount],
          ["Asylum Seekers", refCount2]
        ],
        titleC3: "TOP REFUGEE HOSTING COUNTRIES",
        dataChart3: [
          ["Turkey", 3.7],
          ["Pakistan", 1.4],
          ["Uganda", 1.2],
          ["Sudan", 1.1],
          ["Germany", 1.1]
        ]
      }));
    } else {
      alert("no path!");
    }
  }

  handleClick2(count, dir, num) {
    axios
      .get("http://localhost:3001/api/getDirectionalData", {
        headers: {
          Country: count,
          direction: dir,
          top: num
        }
      })
      .then(data => data.data)
      .then(res =>
        this.setState({ data: res.data }, () =>
          this.handleData(this.state.data)
        )
      );
  }

  handleClick3(origin, destination) {
    axios
      .get("http://localhost:3001/api/getPath", {
        headers: {
          CountryO: origin,
          CountryD: destination
        }
      })
      .then(data => data.data)
      .then(res =>
        this.setState({ dataPath: res.data }, () =>
          this.handleC2C(this.state.dataPath)
        )
      );
  }

  handleClick1(e) {
    const pais = e.target.id;
    console.log("Country clicked:", pais);
    var pairs = this.state.country;
    var direction = this.state.direction;
    var top = this.state.top;
    var topData = this.state.topData;
    var title;

    console.log("this is the direction of the country", direction);
    console.log("this is the top of the country", top);

    if (direction == "C2C") {
      if (topData.length > 0) {
        this.eraseAll(topData[0], topData[1]);
      }
      topData = [];
      if (pairs.length == 0) {
        pairs.push(pais);
        title = "WORLD GENERAL STATISTICS";
      } else if (pairs.length == 1) {
        pairs.push(pais);
        title =
          "C2C INFO FROM: " +
          pairs[0].toUpperCase() +
          " TO " +
          pairs[1].toUpperCase();
        this.handleClick3(pairs[0], pairs[1]);
        this.handleColors(pairs[0], pairs[1]);
      } else if (pairs.length == 2) {
        this.eraseC(pairs[0], pairs[1]);
        pairs = [pais];
        title = "WORLD GENERAL STATISTICS";
      }

      this.setState(state => ({
        test: testState,
        country: pairs,
        topData: topData,
        statsName: title
      }));
    }
    if (direction == "Incoming" || direction == "Outgoing") {
      console.log("datalalalalalalalla", this.state.data);

      if (pairs.length == 2) {
        this.eraseC(pairs[0], pairs[1]);
      }

      if (topData.length == 3) {
        console.log("about to be erased", topData);
        this.eraseAll(topData[0], topData[1]);
      } else {
        console.log("cant erase all");
      }

      pairs = [];
      this.handleClick2(pais, direction, top);
      topData = [pais, direction, top];

      title = "COUNTRY INFORMATION: " + pais;

      this.setState(
        state => ({
          test: testState,
          country: pairs,
          topData: topData,
          statsName: title
        }),
        () => console.log("most current top Data", this.state.topData)
      );
    }
  }

  render() {
    const circleRef = React.createRef();
    var show = <div></div>;
    var show2 = (
      <div>
        <div id="slider"></div>

        <Filters
          label={this.state.c1Label}
          test={this.state.titleC1}
          data1={this.state.dataChart1}
          title2={this.state.titleC2}
          data2={this.state.dataChart2}
          title3={this.state.titleC3}
          data3={this.state.dataChart3}
          leg3={this.state.leg3}
        ></Filters>
      </div>
    );
    const testStateShow = [];

    const mercator = geoMercator();
    const project = geoPath().projection(mercator);

    console.log("pairs of country in render", this.state.country);
    console.log("data of top paths in render", this.state.data);
    if (this.state.country.length == 2 && this.state.dataPath.length == 1) {
      if (
        this.state.dataPath[0]["originCountry"] == this.state.country[0] &&
        this.state.dataPath[0]["destCountry"] == this.state.country[1]
      ) {
        console.log("Path Completed", this.state.dataPath);
        console.log("OriginLat", typeof this.state.dataPath[0]["originLat"]);
        var astartPoint = [
          parseFloat(this.state.dataPath[0]["originLong"]),
          parseFloat(this.state.dataPath[0]["originLat"])
        ];
        var aendPoint = [
          parseFloat(this.state.dataPath[0]["destLong"]),
          parseFloat(this.state.dataPath[0]["destLat"])
        ];

        var acontrolPoint = [
          (astartPoint[0] + aendPoint[0]) / 2 + 10,
          (astartPoint[1] + aendPoint[1]) / 2 + 10
        ];

        var theStartPoint = [mercator(astartPoint)];
        var theEndPoint = [mercator(aendPoint)];
        var theControlPoint = [mercator(acontrolPoint)];

        const apath = (
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
              ref={circleRef}
              id="MyPath"
              className="curve"
              d={`
          M ${theStartPoint}
          Q ${theControlPoint} ${theEndPoint}
        `}
              fill="none"
              stroke="#57ffd5"
              stroke-width="3"
              stroke-linecap="round"
            />

            <Tooltip triggerRef={circleRef}>
              <rect
                x={2}
                y={2}
                width={200}
                height={tooltipRectH}
                rx={5}
                ry={5}
                fill="#166a6d"
              />
              <text x={toolTipText} y={toolTipText} fontSize={14} fill="#fff">
                {this.state.dataPath[0].numAsylumSeekers} of Asylum S.
              </text>
            </Tooltip>
          </g>
        );

        testStateShow.push(apath);
      }
    } else if (this.state.data.length > 0) {
      if (
        this.state.data.length < this.state.topData[2] + 1 &&
        this.state.data.length > 0 &&
        this.state.direction == this.state.topData[1]
      ) {
        console.log("this is a success");
        this.state.data.map(adata => {
          this.handleColors(adata["originCountry"], adata["destCountry"]);
          var astartPoint = [
            parseFloat(adata["originLong"]),
            parseFloat(adata["originLat"])
          ];
          var aendPoint = [
            parseFloat(adata["destLong"]),
            parseFloat(adata["destLat"])
          ];

          var acontrolPoint = [
            (astartPoint[0] + aendPoint[0]) / 2 + 10,
            (astartPoint[1] + aendPoint[1]) / 2 + 10
          ];

          var theStartPoint = [mercator(astartPoint)];
          var theEndPoint = [mercator(aendPoint)];
          var theControlPoint = [mercator(acontrolPoint)];

          const apath = (
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
                ref={circleRef}
                id="MyPath"
                className="curve"
                d={`
          M ${theStartPoint}
          Q ${theControlPoint} ${theEndPoint}
        `}
                fill="none"
                stroke="#57ffd5"
                stroke-width="3"
                stroke-linecap="round"
              />

              <Tooltip triggerRef={circleRef}>
                <rect
                  x={2}
                  y={2}
                  width={200}
                  height={tooltipRectH}
                  rx={5}
                  ry={5}
                  fill="#166a6d"
                />
                <text x={toolTipText} y={toolTipText} fontSize={14} fill="#fff">
                  {this.state.data[0].numAsylumSeekers} of Asylum S.
                </text>
              </Tooltip>
            </g>
          );

          testStateShow.push(apath);
        });
      }
    }

    show = testStateShow;
    const textWidth = world.features.map(index => {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      ctx.font = "14px Montserrat";
      let boxWidthName = ctx.measureText(index.properties.sovereignt).width;
      let boxWidthStr = ctx.measureText("Country: ").width;
      let boxWidthPop = ctx.measureText("ThebiggestName").width;
      let boxWidthPopDen = boxWidthStr + boxWidthPop;
      if (boxWidthName < boxWidthPopDen) {
        return boxWidthPopDen;
      } else {
        return boxWidthName;
      }
    });

    console.log(nuevomundo.objects);
    return (
      <div className="hundred">
        <Row className="hundred">
          <Col lg="8" id="c1">
            <MyVerticallyCenteredModal
              show={this.state.modalShow}
              onHide={() => this.modal()}
            />
            <Stage width="100%" height="100%" class="map">
              <g
                transform={`translate(${-100.30780933588653}, ${200.91951909185201}) scale(${1.4})`}
              >
                <ZoomContainer>
                  {world.features.map((feature, index) => {
                    const d = project(feature);
                    var chill = world.features[
                      index
                    ].properties.sovereignt.concat(" country");

                    /*console.log(world.features[index].properties.sovereignt)*/
                    return (
                      <g>
                        <path
                          ref={circleRef}
                          className={chill}
                          /* className= {this.state}*/
                          id={world.features[index].properties.sovereignt}
                          key={index}
                          d={d}
                          fill="#000"
                          stroke="#666"
                          strokeWidth={0.3}
                          onClick={this.handleClick1}
                        />
                        <Tooltip triggerRef={circleRef}>
                          <rect
                            x={2}
                            y={2}
                            width={textWidth[index] + 5}
                            height={tooltipRectH}
                            rx={5}
                            ry={5}
                            fill="#166a6d"
                          />
                          <text
                            x={toolTipText}
                            y={toolTipText}
                            fontSize={14}
                            fill="#fff"
                          >
                            {world.features[index].properties.sovereignt}
                          </text>
                        </Tooltip>
                      </g>
                    );
                  })}

                  {/* overlay parks on top of our map */}
                  {parks.map((park, index) => {
                    // project the lat,lng to an x,y
                    // using the mercator projection
                    const [x, y] = mercator(park.Location.coordinates);
                    return (
                      <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r={0.2}
                        fill="red"
                        stroke="#000"
                        strokeWidth={0.1}
                      />
                    );
                  })}

                  {show}
                </ZoomContainer>
              </g>
            </Stage>
          </Col>

          <Col lg="4" id="c2">
            <div class="thegrid">
              <div>
                <Row className="chartTitle1" id="fila-title">
                  <div className="titleC1 testytest">
                    {this.state.statsName}
                  </div>
                </Row>
              </div>
              <div class="anothergrid">
                <Row class="Optinons">
                  <Col lg="6" id="Button 2">
                    <DropdownButton
                      class="but1"
                      alignRight
                      id="dropdown-item-button-2"
                      title={this.state.but1}
                    >
                      <Dropdown.Item
                        id="Dir1"
                        as="button"
                        onSelect={this.handleClick4}
                      >
                        INCOMING
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="Dir2"
                        as="button"
                        onSelect={this.handleClick5}
                      >
                        OUTGOING
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="Dir2"
                        as="button"
                        onSelect={this.handleClick9}
                      >
                        C2C
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>

                  <Col lg="6" id="Button 3">
                    <DropdownButton
                      background-color="#203044"
                      id="dropdown-item-button-3"
                      title={this.state.but2}
                    >
                      <Dropdown.Item
                        id="Top5"
                        as="button"
                        onSelect={this.handleClick6}
                      >
                        TOP 3
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="Top10"
                        as="button"
                        onSelect={this.handleClick7}
                      >
                        TOP 5
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="Top20"
                        as="button"
                        onSelect={this.handleClick8}
                      >
                        TOP 10
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
              </div>
            </div>

            {show2}
          </Col>
        </Row>
      </div>
    );
  }
}

export default WorldMap;
