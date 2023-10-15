import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import kk from "../assets/img/android-chrome-192x192.png";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <img src={kk} alt="kk" id="logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kanishakkhanna/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/KAKA-14"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <div>
                <p>A Line of code at a Time</p>
                
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;