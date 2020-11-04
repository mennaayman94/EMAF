/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";

// core components
import ExamplesNavbar from "./ExamplesNavbar.js";
import Footer from "./Footer.js";

// const carouselItems = [
//   {
//     src: {"./assets/img/denys.jpg"},
//     altText: "Slide 1",
//     caption: "Big City Life, United States",
//   },
//   {
//     src: "./assets/img/fabien-bazanegue.jpg"),
//     altText: "Slide 2",
//     caption: "Somewhere Beyond, United States",
//   },
//   {
//     src: "./assets/img/mark-finn.jpg"),
//     altText: "Slide 3",
//     caption: "Stocks, United States",
//   },
// ];

let ps = null;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1,
    };
  }
  componentDidMount() {
    // if (navigator.platform.indexOf("Win") > -1) {
    //   document.documentElement.className += " perfect-scrollbar-on";
    //   document.documentElement.classList.remove("perfect-scrollbar-off");
    //   let tables = document.querySelectorAll(".table-responsive");
    //   for (let i = 0; i < tables.length; i++) {
    //     ps = new PerfectScrollbar(tables[i]);
    //   }
    // }
    // document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    // if (navigator.platform.indexOf("Win") > -1) {
    //   ps.destroy();
    //   document.documentElement.className += " perfect-scrollbar-off";
    //   document.documentElement.classList.remove("perfect-scrollbar-on");
    // }
    // document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index,
    });
  };
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <div
            style={{
              display: "flex",

              justifyContent: "center",
            }}
            className="section"
          >
            <Container>
              <Row style={{ paddingTop: "10vh" }}>
                <Col className="ml-auto mr-auto" lg="8" md="8">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <h4 className="title">About EMAF</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Road Asset Management System
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2,
                            })}
                            onClick={(e) => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Our Model
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <tbody>
                              <p>
                                {" "}
                                RAMS are systems that enables the Road
                                department to manage road related information is
                                desired to make crucial decisions about
                                prioritization of roads with regard to repair
                                and maintenance, especially given that the
                                resources allocated to the department to do so
                                are limited. The needs of Road maintenance
                                management are addressed through a software tool
                                termed Road Asset Management System (RAMS). A
                                RAMS is a technical or operational method for
                                managing or directing and controlling
                                maintenance resources, in a scientific manner,
                                for optimum benefits.{" "}
                              </p>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab2">
                          <Row>
                            We built our RAMS according to global standards such
                            as those adopted in New Zealand, the UK and Germany.
                            For that reason our solution could be used in
                            projects all over the globe and can be integrated
                            with almost any governmental system.
                          </Row>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">Latest Crypto News</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>The Daily: Nexo to Pay on Stable...</td>
                              </tr>
                              <tr>
                                <td>Venezuela Begins Public of Nation...</td>
                              </tr>
                              <tr>
                                <td>PR: BitCanna – Dutch Blockchain...</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "10vh",
            }}
          >
            {/* <img alt="..." className="path" src={"./assets/img/path4.png"} /> */}
            <Container
              style={{ paddingTop: "0vh" }}
              className="align-items-center"
            >
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Footpaths</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
                    We plan to provide these footpaths services: <br /> • Ensure
                    the path and pedestrian network is maintained at a safe and
                    functional standard. <br /> • Develop a Plan to satisfy
                    statutory requirements.
                  </p>
                </Col>
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <img
                    // style={{ height: "500px", width: "300px" }}
                    alt={"..."}
                    src={"./assets/img/footpaths.jpg"}
                  />
                </Col>
              </Row>
            </Container>
          </div>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
            }}
            className="section"
          >
            <Container>
              <Row className="justify-content-between">
                <Col style={{ display: "flex", alignItems: "center" }} lg="6">
                  <img alt={"..."} src={"./assets/img/project6.jpg"} />
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Cycleways</h1>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                    Provides practical guidance on risk based management of
                    maintenance on cycle routes. It can be used by practitioners
                    to identify where and when maintenance is best placed.
                    <br />
                    Key steps include:
                    <br />• Reviewing hierarchies, including with regard to
                    temporary or seasonal changes <br /> • Identifying safety
                    risk factors, serviceability risk factors and sustainability
                    risk factors. <br /> • Analysing risks by assessing their
                    relative importance and weighting.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
            }}
            className="section"
          >
            <Container>
              <Row className="justify-content-between">
                <Col md="5">
                  <h1 className="profile-title text-left">Public Transport</h1>
                  <h5 className="text-on-back">03</h5>
                  <p className="profile-description text-left">
                    Transportation Asset Management is focused on the
                    transportation infrastructure, and its use. The emphasis on
                    "more information on which to base decisions" leads to
                    higher accountability for officials charged with making
                    those decisions and, to some extent, a new way of looking at
                    managing transportation infrastructure. Transportation
                    systems continue to grow rapidly and become increasingly
                    complex. Asset management provides new insights and tools to
                    help transportation professionals make wise investments that
                    result in improved service and greater cost-effectiveness
                  </p>
                </Col>
                <Col md="6">
                  <img alt={"..."} src={"./assets/img/transport.jpg"} />
                </Col>
              </Row>
            </Container>
          </div>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
            }}
            className="section"
          >
            <Container>
              <Row className="justify-content-between">
                <Col style={{ display: "flex", alignItems: "center" }}>
                  <img alt={"..."} src={"./assets/img/stormwater.jpg"} />
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Stormwater</h1>
                  <h5 className="text-on-back">04</h5>
                  <p className="profile-description text-left">
                    This asset management plan for stormwater drainage comprises
                    a collation of drainage infrastructure asset data base and
                    service delivery programmes. The stormwater network
                    comprises Pipes Pits Culverts and headwalls Gross pollutant
                    traps Detention basins Water quality devices Conveyance
                    channels The projected outlays necessary to provide the
                    services covered by this Asset Management Plan includes
                    operations, maintenance, renewal and upgrade of existing
                    assets
                  </p>
                </Col>
              </Row>
            </Container>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="section"
          >
            <div style={{ marginBottom: "10vh" }}>
              <h4 className="title">Our Team</h4>
            </div>
            <Container>
              <Row>
                {" "}
                <Col className="ml-auto mr-auto" lg="12" md="12">
                  {" "}
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        style={{ marginLeft: "3.5vw", marginRight: "7vw" }}
                        alt="..."
                        className="img-fluid rounded-circle"
                        src={"./assets/img/essraa.jpg"}
                      />
                      <img
                        style={{ marginRight: "7vw" }}
                        alt="..."
                        className="img-fluid rounded-circle"
                        src={"./assets/img/asmaa.jpg"}
                      />
                      <img
                        style={{ marginRight: "7vw" }}
                        alt="..."
                        className="img-fluid rounded-circle"
                        src={"./assets/img/menna.jpg"}
                      />
                      <img
                        style={{ marginRight: "3.5vw" }}
                        alt="..."
                        className="img-fluid rounded-circle"
                        src={"./assets/img/picture.jpg"}
                      />
                    </CardHeader>

                    <CardBody style={{ padding: "3vw" }}>
                      <h4>
                        {" "}
                        We are four developers from various backgrounds and with
                        different passions and interests. Each one of us
                        contributed a different skill set to help get this
                        project where it is today. This precisely is what made
                        it such a huge learning journey for all of us as we
                        learned more and more from each other as we progressed.
                        We developed this Road Asset Management System web
                        application as our graduation project from ITI GIS
                        track. We used open source technologies to make sure
                        this is available for all developers who want to learn
                        from it or even contribute to it.{" "}
                      </h4>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default About;
