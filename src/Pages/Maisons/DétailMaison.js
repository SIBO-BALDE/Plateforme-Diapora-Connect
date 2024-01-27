import React from 'react'
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil'
import Footer from '../../Components/Footer/Footer'
import Underline from '../../Components/Underline/Underline'
import detaimaison from '../../fichiers/bann accueil.jpeg'
import { Button, Image } from 'react-bootstrap'
import './DétailMaison.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faGlobe, faHouse, faLocationDot, faSink, faTag } from '@fortawesome/free-solid-svg-icons'

export default function DétailMaison() {
  return (
    <div>
     <NavbarAccueil />
     <div id='content-main-detail-maison-content'>
      <Underline  text='Detail maison'/>
      <div className='d-flex content-main-detailmaison container '>
        <div className='one-img-left' >
          <div className='img-main-detail-maison'>
            <Image  src={detaimaison} className='content-img-detail-maison1' />
          </div>
          <di className='d-flex justify-content-between mt-4'>
            <div><Image  src={detaimaison} className='image-intermédiaire' /></div>
            <div><Image  src={detaimaison} className='image-intermédiaire' /></div>
            <div><Image  src={detaimaison} className='image-intermédiaire' /></div>
           
          </di>
        </div>
        <div className='second-img-right'>
        <div className='second-img-right1'>
          <h1>Maison</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s,</p>
             <div className='d-flex justify-content-evenly'>
              <div>
                <div><span><FontAwesomeIcon icon={faGlobe} id='icon-details-right' /></span><span>150m2</span></div>
                <div><span><FontAwesomeIcon icon={faTag} id='icon-details-right' /></span><span>50.000.000FCFA</span></div>
                <div><span><FontAwesomeIcon icon={faLocationDot} id='icon-details-right' /></span><span>Diass 123 rue Birago Diop</span></div>
              </div>
              <div>
              <div><span><FontAwesomeIcon icon={faHouse} id='icon-details-right' /></span><span>R+4</span></div>
              <div><span><FontAwesomeIcon icon={faBed} id='icon-details-right' /></span><span>10 CHAMBRES</span></div>
              <div><span><FontAwesomeIcon icon={faSink} id='icon-details-right' /></span><span>10 Salles de bains</span></div>
              </div>
             </div>
             <div className='d-flex justify-content-center mt-5'>
              <Button id='btn-btn-ajouter-panier'><Link to={'/panier'} style={{textDecoration:'none', color:'white'}}  id='panier-btn-hover'>Plus d'infos</Link></Button>
             </div>
          </div>
          <h4 className='mt-4'>Consulter nos autres maison:</h4>
        <div className='d-flex justify-content-between  mt-4 '>
          <div><Image  src={detaimaison} className='image-intermédiaire' />
          <div className='mt-2'><span>20.000.000FCFA</span><span className='voir-content-detailmaison'><Link to={'/maisons'} id='link-voir-more' >voir</Link></span></div>
          </div>
          <div><Image  src={detaimaison} className='image-intermédiaire' />
          <div className='mt-2'><span>20.000.000FCFA</span><span className='voir-content-detailmaison'><Link to={'/maisons'} id='link-voir-more' >voir</Link></span></div></div>
          
          <div><Image  src={detaimaison} className='image-intermédiaire' />
          <div className='mt-2'><span>20.000.000FCFA</span><span className='voir-content-detailmaison'><Link to={'/maisons'} id='link-voir-more' >voir</Link></span></div></div>
        </div>
        
        </div>
      </div>
     </div>
     <Footer />
    </div>
  )
}
