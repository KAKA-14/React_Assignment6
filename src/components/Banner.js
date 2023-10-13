import { useState, useEffect } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);//to keep track of which word to display
    const [isDeleting, setIsDeleting] = useState(false);//to check if deleting is going on or not
    const [text, setText] = useState('');//which will be displayed
    const [delta, setDelta] = useState(200 - Math.random() * 100);//time for which a letter will be displayed
    const toRotate = [" Kanishak Khanna", "a Full Stack Developer", "a MERN Stack Developer", "a Machine Learning Engineer"];
    const period = 1000;//time for which a word will be displayed
    useEffect(() => {
        let ticker = setInterval(() => { tick(); }, delta);
        return () => clearInterval(ticker);
    }, [text])//to run the effect whenever text changes

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInDown" : "animate__animated animate__fadeOutUp "}>
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ " Kanishak Khanna","a Full Stack Developer", "a MERN Stack Developer", "a Machine Learning Engineer" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <button onClick={() => console.log('connect')}><a href="#connect">Let's Connect <ArrowRightCircle size={25} /></a></button>
                                </div>
                            }
                        </TrackVisibility>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;