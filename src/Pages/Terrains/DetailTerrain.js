import React from 'react'
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil'
import Footer from '../../Components/Footer/Footer'
import Underline from '../../Components/Underline/Underline'
import detailterrain from '../../fichiers/land1.png'
import { Button, Image } from 'react-bootstrap'
import './DetailTerrain.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGlobe, faLocationDot, faTag } from '@fortawesome/free-solid-svg-icons'

export default function DetailTerrain() {
  return (
    <div>
     <NavbarAccueil />
     <div id='content-main-detail-maison-content'>
      <Underline  text='Detail terrain'/>
      <div className='d-flex content-main-detailmaison-terrain container'>
        <div className='one-img-left-terrain' >
          <div className='img-main-detail-terrain'>
            <Image  src={detailterrain} className='content-img-detail-terrain1' />
          </div>
          <div className='d-flex justify-content-between mt-4'>
            <div><Image  src={detailterrain} className='image-intermédiaire-terrain' /></div>
            <div><Image  src={detailterrain} className='image-intermédiaire-terrain' /></div>
            <div><Image  src={detailterrain} className='image-intermédiaire-terrain' /></div>
           
          </div>
        </div>
        <div className='second-img-right-terrain'>
        <div className='second-img-right1-terrain'>
          <h1>Terrain</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s,</p>
             <div className=''>
              <div>
                <div><span><FontAwesomeIcon icon={faGlobe} id='icon-details-right-terrain' /></span><span>150m2</span></div>
                <div><span><FontAwesomeIcon icon={faTag} id='icon-details-right-terrain' /></span><span>50.000.000FCFA</span></div>
                <div><span><FontAwesomeIcon icon={faLocationDot} id='icon-details-right-terrain' /></span><span>Diass 123 rue Birago Diop</span></div>
              </div>
             
             </div>
             <div className='d-flex justify-content-center mt-5'>
              <Button id='btn-btn-ajouter-panier-terrain'><Link to={'/panier'} style={{textDecoration:'none', color:'white'}}  id='panier-btn-hover'>Ajouter au panier</Link></Button>
             </div>
          </div>
          <h4 className='mt-4'>Consulter nos autres maison:</h4>
        <div className='d-flex justify-content-between  mt-4 '>
          <div><Image  src={detailterrain} className='image-intermédiaire-terrain' />
          <div className='mt-2'><span>20.000.000FCFA</span><span className='voir-content-detailterrain'><Link to={'/maisons'} id='link-voir-more-terrain' >voir</Link></span></div>
          </div>
          <div><Image  src={detailterrain} className='image-intermédiaire-terrain' />
          <div className='mt-2'><span>20.000.000FCFA</span><span className='voir-content-detailterrain'><Link to={'/maisons'} id='link-voir-more-terrain' >voir</Link></span></div></div>
          
          <div><Image  src={detailterrain} className='image-intermédiaire-terrain' />
          <div className='mt-2'><span>20.000.000FCFA</span><span className='voir-content-detailterrain'><Link to={'/maisons'} id='link-voir-more-terrain' >voir</Link></span></div></div>
        </div>
        
        </div>
      </div>
     </div>
     <Footer />
    </div>
  )
}

