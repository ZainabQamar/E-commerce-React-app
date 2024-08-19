import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroupItem,
  ListGroup,
} from "reactstrap";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import {
  FaInfoCircle,
  FaUsers,
  FaDollarSign,
  FaNewspaper,
  FaHeadset,
} from "react-icons/fa"; // React Icons library
import "../App.css";
const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-black">
        <div>
          {" "}
          <Col lg="12" className="text-center">
            <h2 className="text-black">Subscribe to our Newsletter</h2>
            <div className="newsletter ">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
              />
              <Button color="light" className="mt-2">
                Subscribe
              </Button>
            </div>
          </Col>
        </div>
        <Row className="justify-content-center mt-5">
          <Col sm="3">
            <h5>Kidify</h5>
            <p>Monday to Friday 8 a.m - 5 p.m</p>
            <p>+01 456 789</p>
            <p>+01 567 890</p>
            <p>contact@kidify.com</p>
          </Col>
          <Col sm="3">
            <h5>Company</h5>
            <p>About us</p>
            <p>Our Experts</p>
            <p>Services & Price</p>
            <p>Latest News</p>
            <p>Support Center</p>
          </Col>
          <Col sm="3">
            <h5>Customers</h5>
            <ListGroup>
              <p tag="a" href="#">
                Contact us
              </p>
              <p tag="a" href="#">
                Payment & Tax
              </p>
              <p tag="a" href="#">
                Bonus Point
              </p>
              <p tag="a" href="#">
                Supply Chain
              </p>
              <p tag="a" href="#">
                Student Discount
              </p>
            </ListGroup>
          </Col>
          <Col sm="3">
            <h5>Support</h5>
            <ListGroup flush>
              Shipping Info
              <p tag="a" href="#"></p>
              <p tag="a" href="#">
                Returns
              </p>
              <p tag="a" href="#">
                Refund
              </p>
              <p tag="a" href="#">
                How To Order
              </p>
              <p tag="a" href="#">
                How To Track
              </p>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="3" className="text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="icon" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} E-Shop. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
