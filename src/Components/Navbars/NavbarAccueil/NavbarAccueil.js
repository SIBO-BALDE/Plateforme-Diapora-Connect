import React, { useEffect, useState } from 'react'
import './NavbarAccueil.css'; 
import { Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../fichiers/logo.png'
import ButtonLogin from '../../Buttons/ButtonLogin/ButtonLogin';
import ButtonLogOut from '../../Buttons/ButtonLogOut/ButtonLogOut';
import { useAuth } from '../../../Pages/Authentification/AuthContext';







export default function NavbarAccueil() {
  // const [isAuthenticated, setIsAuthenticated]=useState(false)
  const { isAuthenticated, login, logout } = useAuth();
  const [showLoginButton, setShowLoginButton] = useState(false);
      
  // État pour suivre le lien actif
  const [linkActive, setLinkActive] = useState('');
  const [linkButtonActive, setLinkButtonActive] = useState('');
  // Dans cet exemple, useLocation de React Router est utilisé pour obtenir 
  //l'objet de localisation qui contient des informations sur l'URL actuelle
  const location = useLocation();
  const locationBtn = useLocation();

  useEffect(() => {
    // Mise à jour de l'état lorsque l'emplacement (route) change
    setLinkActive(location.pathname);
  }, [location]);


  useEffect(() => {
    // Mise à jour de l'état lorsque l'emplacement (route) change
    setLinkButtonActive(locationBtn .pathname);
  }, [locationBtn]);


  const handleLogin = async () => {
    try {
      login();
    } catch (error) {
      console.log(error.message, 'voici lerreur');
    }
  };

  const handleLogout = async () => {
    try {
      // Votre code de déconnexion ici
      // ...

      // Supprimer le token du localStorage lors de la déconnexion
      localStorage.removeItem("token");

      // Mettre à jour l'état d'authentification
      logout();
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };



  return (
    <div className="container1">
        <div className="Container_Header">
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
            <Navbar collapseOnSelect expand="lg" className=" " id='navbarcontentmain'>
              <Container fluid>
                <Navbar.Brand href="#"><Link to={'/'}><Image src={logo} alt="" className='exemplelogo' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                  <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
           
              className="me-auto  my-lg-0 navbarcontent"
              navbarScroll >
            <Link to="/" style={{ borderBottom: linkActive === '/' ? '5px solid #D46F4D' : 'none'}} className='navlinkcontenthome'> Accueil</Link>
            <Link to="/maisons" style={{ borderBottom: linkActive === '/maisons' ? '5px solid #D46F4D' : 'none' }} className='navlinkcontenthome'>Maisons</Link>
            <Link to="/terrains" style={{ borderBottom: linkActive === '/terrains' ? '5px solid #D46F4D' : 'none' }} className='navlinkcontenthome'>Terrains</Link>
            <Link to="/services" style={{ borderBottom: linkActive === '/services' ? '5px solid #D46F4D' : 'none' }} className='navlinkcontenthome'>Services</Link>
            <Link to="/a-propos" style={{ borderBottom: linkActive === '/a-propos' ? '5px solid #D46F4D' : 'none' }} className='navlinkcontenthome'>A-propos</Link>
            <Link to="/contact" style={{ borderBottom: linkActive === '/contact' ? '5px solid #D46F4D' : 'none' }} className='navlinkcontenthome' id=''>Contact</Link>
           
            
            
                </Nav>
                  {!isAuthenticated && (
                  <ButtonLogOut  onClick={handleLogin} />
           
                  )}
                {/* Afficher le bouton de déconnexion si l'utilisateur est authentifié */}
                  {isAuthenticated && (
                  <ButtonLogin  onClick={handleLogout} />
         
                  )}
                  </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    </div>
  )
}
  
