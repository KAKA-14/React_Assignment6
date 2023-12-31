import { Container, Row, Col, Tab, Nav, TabPane } from "react-bootstrap";
import  ProjectCard  from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nemo consectetur vel eligendi iste reiciendis delectus obcaecati excepturi saepe quasi molestias, et corrupti doloremque porro totam, similique a in velit, aliquid laborum. Minus, nulla. </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills"className="mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                        Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index)=>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                       {...project}//passing all the properties of project object
                                                    />
                                                )
                                            })

                                        }
                                        
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                                </Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right" alt="color-sharp2" />
        </section>
    )
}
export default Projects;