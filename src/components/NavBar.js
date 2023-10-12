import {Navbar,Container,Nav} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,setScrolled] = useState(false);//to check if the navbar is scrolled or not
    useEffect(()=>{//triggered when the component is mounted//scrolled or not
        const onScroll = () => {    
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);//fired on scroll
        return () => window.removeEventListener("scroll", onScroll);//fired on unmount
    },[])
    const onUpdateActiveLink=(link)=>{
        setActiveLink(link);
    }
    return(
    <Navbar expand="lg" className={scrolled?"scrolled":""}>{/*expand->expand the navbar on large devices*/}
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link> {/*active link-->highlights which link is active*/}
                <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'} onClick={()=>onUpdateActiveLink('project')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/kanishakkhanna/" target="_blank"><img src={navIcon1} alt="linkedin"/></a>
                    <a href="https://github.com/KAKA-14" target="_blank"><img src={navIcon2} alt="github"/></a>
                    <a href="#"><img src={navIcon3} alt="instagram"/></a>
                </div>
                <button className='vvd' onClick={()=>console.log('connect')}><span>Lets Connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}