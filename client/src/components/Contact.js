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
import { Link } from "react-router-dom";

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

class Contact extends React.Component {
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <section className="section">
            <Container>
              <Row>
                <Col md="6">
                  <h1 className="profile-title text-left">Contact</h1>
                  <h5 className="text-on-back">Us</h5>
                  <Card className="card-plain">
                    <CardHeader></CardHeader>
                    <CardBody>
                      <div
                        style={{ paddingTop: "0px" }}
                        className="info info-horizontal"
                      >
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-square-pin" />
                        </div>
                        <div className="description">
                          <h4 className="info-title">Namaa consult office</h4>
                          <p>
                            Dokki,
                            <br />
                            Giza <br />
                            <a
                              target="_blank"
                              href="https://www.namaaconsult.com/"
                            >
                              https://www.namaaconsult.com/
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="info info-horizontal">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-mobile" />
                        </div>

                        <div className="description">
                          <h4 className="info-title">linkedIn</h4>
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/asmaa-essam-968708139/"
                          >
                            Assmaa Essam
                          </a>{" "}
                          <br />
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/menna-ayman-9973a4102/"
                          >
                            Menna Ayman
                          </a>
                          <br />
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/esraa-nabil-18b5a614b/"
                          >
                            Esraa Nabil
                          </a>{" "}
                          <br />
                          <a
                            target="_blank"
                            href="https://www.linkedin.com/in/fadwa-mahmoud/"
                          >
                            Fadwa Mahmoud
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader></CardHeader>
                    <CardBody>
                      <div
                        style={{ paddingTop: "29vh  " }}
                        className="info info-horizontal"
                      >
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-square-pin" />
                        </div>
                        <div className="description">
                          <h4 className="info-title">ITI</h4>
                          <p>
                            B148, Smart Village
                            <br /> 6 October, Giza Governorate 12563 <br />
                            <a target="_blank" href="http://www.iti.gov.eg/">
                              http://www.iti.gov.eg/
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* <div className="info info-horizontal">
                        <div className="icon icon-primary">
                          <i className="tim-icons icon-mobile" />
                        </div>
                        <div className="description">
                          <h4 className="info-title">Give us a ring</h4>
                          <p>
                            Michael Jordan <br />
                            +202 35355656 <br />
                            Mon - Fri, 8:00-22:00
                          </p>
                        </div>
                      </div>*/}
                    </CardBody>
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

export default Contact;
