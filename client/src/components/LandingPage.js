import React from "react";
import "../assets/scss/blk-design-system-react.scss";
import "../assets/css/nucleo-icons.css";
import Carousel from "react-bootstrap/Carousel"; // react plugin used to create charts
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "./ExamplesNavbar.js";
import Footer from "./Footer.js";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
      <ExamplesNavbar/>
        <div className="wrapper">
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "70px",
            }}
            className="section section-lg"
          >
            <section>
              <img alt="..." className="path" src={"path4.png"} />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col
                    className="mt-lg-5"
                    md="6"
                    style={{ paddingTop: "50px" }}
                  >
                    <img src={"lattice.png"} alt=""></img>
                  </Col>
                  <Col lg="6">
                    <h1 className="text-center">Your best benefit</h1>
                    <Row className="row-grid justify-content-center">
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-primary">
                            <i className="tim-icons icon-money-coins" />
                          </div>
                          <h4 className="info-title">Optimized Budget</h4>
                          <hr className="line-primary" />
                          <p>
                            We help you find the best way to spend your budget
                            by optimizing the decision making process and making
                            it as seamless as possible.
                          </p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-warning">
                            <i className="tim-icons icon-chart-pie-36" />
                          </div>
                          <h4 className="info-title">Customized Assets </h4>
                          <hr className="line-warning" />
                          <p>
                            Each asset has its own profile in our app which
                            makes it modularized and easy to use. Just choose
                            the asset you're mose concerned with.
                          </p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-success">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <h4 className="info-title">Effortless Use</h4>
                          <hr className="line-success" />
                          <p>
                            Our app is designed to be used by all professionals
                            in the team; from the collectors all the way to
                            decision makers. Making it an all-inclusive solution
                            to your asset management needs.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  {/* <Col className="mt-lg-5" md="5">
                    <div className="pl-md-5">
                      <h1>
                        Large <br />
                        Achivements
                      </h1>
                      <p>
                        I should be capable of drawing a single stroke at the
                        present moment; and yet I feel that I never was a
                        greater artist than now.
                      </p>
                      <br />
                      <p>
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray.
                      </p>
                      <br />
                      <a
                        className="font-weight-bold text-info mt-5"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show all{" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
                    </div>
                  </Col> */}
                </Row>

                <Row
                  className="row-grid justify-content-between"
                  style={{ marginTop: "100px" }}
                >
                  <Col md="6" style={{ marginTop: "30px" }}>
                    <div className="px-md-5">
                      <hr className="line-success" />
                      <h3>Our Projects</h3>
                      <p>
                        We worked on multiple projects across the globe for all
                        different assets you could possible imagine. Always
                        leaving our client satisfied and loyal to our service.
                      </p>
                      <ul className="list-unstyled mt-5">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div className="icon icon-success mb-2">
                              <i className="tim-icons icon-vector" />
                            </div>
                            <div className="ml-3">
                              <h6>Madinaty Footpaths</h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div className="icon icon-success mb-2">
                              <i className="tim-icons icon-tap-02" />
                            </div>
                            <div className="ml-3">
                              <h6>Madinaty Cycleways</h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div className="icon icon-success mb-2">
                              <i className="tim-icons icon-single-02" />
                            </div>
                            <div className="ml-3">
                              <h6>Madinaty Stormwater</h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div className="icon icon-success mb-2">
                              <i className="tim-icons icon-single-02" />
                            </div>
                            <div className="ml-3">
                              <h6>Madinaty Public transport</h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>

                  <Col className="mt-lg-5" md="6">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={"project1.jpg"}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={"project3.jpg"}
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={"project2.jpg"}
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "0px",
            }}
            className="section"
            className="section section-lg section-coins"
          >
            <img alt="..." className="path" src={"path3.png"} />
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Choose the Asset{" "}
                    <span className="text-info">that fits your needs</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={"bitcoin.png"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Footpaths</h4>
                          <span>Description</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>Footpath data entry</ListGroupItem>
                          <ListGroupItem>
                            Footpath decision making
                          </ListGroupItem>
                          <ListGroupItem>Footpath asset analysis</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get Asset solution
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={"etherum.png"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Cycleways</h4>
                          <span>Description</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>Cycleway data entry</ListGroupItem>
                          <ListGroupItem>
                            Cycleway decision making
                          </ListGroupItem>
                          <ListGroupItem>
                            Cycleway Asset management
                          </ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        Get Asset Solution
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={"ripp.png"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Public Transport</h4>
                          <span>Plan</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>
                            Public Transport data entry
                          </ListGroupItem>
                          <ListGroupItem>
                            Public Transport Decision Making
                          </ListGroupItem>
                          <ListGroupItem>Public Transport Asset</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        Get Asset Solution
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={"ripp.png"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Stormwater</h4>
                          <span>Plan</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>Stormwater data entry</ListGroupItem>
                          <ListGroupItem>
                            Stormwater Decision Making
                          </ListGroupItem>
                          <ListGroupItem>
                            Stormwater Asset Management
                          </ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        Get Asset Solution
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage;
