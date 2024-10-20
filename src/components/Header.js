/* import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
 */

// import { Col, Container, Navbar, Row, Nav } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoIosArrowForward } from "react-icons/io";
import SuvList from "./SuvList";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    /*  <section className="p-3 flex justify-between shadow-md shadow-black">
      <div className="flex gap-2 text-[0.7rem] font-semibold">
        <a href="#" className="no-underline text-red-500">
          Mahindra
        </a>
        <div className="">Vehicles</div>
        <div>Blocks</div>
        <div>Services</div>
        <div>Experience</div>
      </div>
      <div className="flex gap-2 text-[0.7rem] font-semibold">
        <div>Contact</div>
        <div>Tabs</div>
      </div>
    </section> */
    /*   <section>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section> */

    <section className="sticky top-0 left-0 z-50 bg-white">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand
            href="#home"
            className="text-red-500"
            style={{ color: "red", fontWeight: "bold" }}
          >
            mahindra
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{ color: "red", fontWeight: "bold" }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fw-bold">
              <NavDropdown
                title="Vehicles"
                id="collapsible-nav-dropdown"
                className="navDropDown"
              >
                <NavDropdown.Item href="#action/3.2" className="suvDropdown">
                  SUV
                  <SuvList />
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">PICK UPS</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Light Commercial
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Electric</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Trucks & Buses
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="#buy"
                className="hover:border-solid border-b-2 navLink"
              >
                Buy
              </Nav.Link>
              <Nav.Link
                href="#"
                className="hover:border-solid border-b-2 navLink"
              >
                Services
              </Nav.Link>
              <Nav.Link
                href="#"
                className="hover:border-solid border-b-2 navLink"
              >
                Experience
              </Nav.Link>
            </Nav>
            <Nav className="me-auto fw-bold">
              <Nav.Link
                href="#"
                className="hover:border-solid border-b-2 navLink"
              >
                Test Drive
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className="hover:border-solid border-b-2 navLink"
              >
                Locate Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
/* 
<section className="sticky top-0 left-0 z-50 bg-white ">
      <Container
        fluid
        style={{
          boxShadow: "2px solid black",
          zIndex: "200px",
          // marginBottom: "2rem",
        }}
      >
        <Row>
          <Col>
            <Navbar bg="" expand="md">
              <Container>
                <Navbar.Brand href="#home">
                  <span className="ms-4 text-[#EA3A51] font-bold">
                    mahindra
                  </span>
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="my-nav"
                  style={{ marginLeft: "3rem" }}
                />
                <Navbar.Collapse id="my-nav">
                  <Nav className="me-auto fw-bold">
                    <Nav.Link
                      href="#vehicles"
                      className="hover:border-solid border-b-2 navLink"
                    >
                      Vehicles
                    </Nav.Link>
                    <Nav.Link
                      href="#buy"
                      className="hover:border-solid border-b-2 navLink"
                    >
                      Buy
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      className="hover:border-solid border-b-2 navLink"
                    >
                      Services
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      className="hover:border-solid border-b-2 navLink"
                    >
                      Experience
                    </Nav.Link>
                  </Nav>
                  <Nav className="me-auto fw-bold">
                    <Nav.Link
                      href="#"
                      className="hover:border-solid border-b-2 navLink"
                    >
                      Test Drive
                    </Nav.Link>
                    <Nav.Link
                      href="#contact"
                      className="hover:border-solid border-b-2 navLink"
                    >
                      Locate Us
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Navbar bg="" expand="md">
              <Container>
                <Navbar.Brand href="#">
                  <span className="text-red-500">Maruti</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="my-nav" />
                <Navbar.Collapse id="my-nav">
                  <Nav className="me-auto fw-bold">
                    <Nav.Link href="#">Vehicles</Nav.Link>
                    <Nav.Link href="#">Blocks</Nav.Link>
                    <Nav.Link href="#">Services</Nav.Link>
                    <Nav.Link href="#">Experience</Nav.Link>
                  </Nav>
                  <Nav className="me-auto fw-bold">
                    <Nav.Link href="#">contact</Nav.Link>
                    <Nav.Link href="#">Tabs</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row> 
      </Container>
    </section> */
