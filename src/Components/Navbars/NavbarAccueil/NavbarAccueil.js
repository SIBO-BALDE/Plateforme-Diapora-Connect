import React, { useEffect, useState } from 'react'
import './NavbarAccueil.css'; 
import { Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../fichiers/logo.png'





export default function NavbarAccueil() {

  // État pour suivre le lien actif
  const [linkActive, setLinkActive] = useState('');
  // Dans cet exemple, useLocation de React Router est utilisé pour obtenir 
  //l'objet de localisation qui contient des informations sur l'URL actuelle
  const location = useLocation();
  useEffect(() => {
    // Mise à jour de l'état lorsque l'emplacement (route) change
    setLinkActive(location.pathname);
  }, [location]);


 

  return (
    <div className="container1">
        <div className="Container_Header">
    {/* Topbar */}
            <div className="first_menu">
            <ul>
        <li>(+221) 77 501 68 92 <span id="mail">diasporaconnect@gmail.com</span></li>
        <li className="Social_Media d-flex ">
            
            <span className='content-icon-topbar'><FontAwesomeIcon icon={faFacebookF} className='icons-content1' /></span>
            <span className='content-icon-topbar'><FontAwesomeIcon icon={faTwitter} className='icons-content1' /></span>
            <span className='content-icon-topbar'><FontAwesomeIcon icon={faInstagram} className='icons-content1' /></span>
            <span className='content-icon-topbar'><FontAwesomeIcon icon={faLinkedinIn} className='icons-content1' /></span>
           </li>
            </ul>
            </div>
    {/* Mon menu de navigation */}
    
    
    <Navbar collapseOnSelect expand="lg" className=" " id='navbarcontentmain'>
      <Container fluid>
        <Navbar.Brand href="#"><Link to={'/'}><Image src={logo} alt="" className='exemplelogo' /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
           
            className="me-auto  my-lg-0 navbarcontent"
            // style={{ maxHeight: '100px' }}
            navbarScroll
            
          >
            <Link to="/" style={{ borderBottom: linkActive === '/' ? '5px solid #D46F4D' : 'none'}} className='navlinkcontenthome'> Accueil</Link>
            <Link to="/maisons" style={{ borderBottom: linkActive === '/maisons' ? '5px solid #D46F4D' : 'none' }} className='navlinkcontenthome'>Maisons</Link>
            <Link to="/terrains" style={{ borderBottom: linkActive === '/terrains' ? '5px solid #D46F4D' : 'none' }} className='navlinkcontenthome'>Terrains</Link>
            <Link to="/services" style={{ borderBottom: linkActive === '/services' ? '5px solid #D46F4D' : 'none' }} className='navlinkcontenthome'>Services</Link>
            <Link to="/a-propos" style={{ borderBottom: linkActive === '/a-propos' ? '5px solid #D46F4D' : 'none' }} className='navlinkcontenthome'>A-propos</Link>
            <Link to="/contact" style={{ borderBottom: linkActive === '/contact' ? '5px solid #D46F4D' : 'none' }} className='navlinkcontenthome' id=''>Contact</Link>
            {/* onClick={() => handleLinkClick('home')} style={{ textDecoration: linkActive === 'home' ? 'underline' : 'none' }} */}
            
            
          </Nav>
          <div className="d-flex me-3 " id='btnpabiernav'>
            <span className='cartcontent'>
              <Nav.Link href='/panier' id='paniericon'><FontAwesomeIcon icon={faCartShopping} className='paniericon' /><span className='cartnumber'><small>10</small></span></Nav.Link>
            </span>
            <Button className=' btn btn-connection' ><Nav.Link href='/connexion' >Se connecter</Nav.Link></Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
    </div>
    </div>
  )
}
  
