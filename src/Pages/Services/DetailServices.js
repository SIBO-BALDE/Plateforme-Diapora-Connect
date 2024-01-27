import React from 'react'
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil'
import Footer from '../../Components/Footer/Footer'
import Underline from '../../Components/Underline/Underline'
import detailservices from '../../fichiers/contruction.png'
import { Button, Image } from 'react-bootstrap'
import './DetailServices.css';
import { Link } from 'react-router-dom'


export default function DetailTerrain() {
  return (
    <div>
     <NavbarAccueil />
     <div id='content-main-detail-maison-content'>
      <Underline  text='Detail services'/>
      <div className='d-flex content-main-detailmaison-services container'>
        <div className='one-img-left-services' >
          <div className='img-main-detail-services'>
            <Image  src={detailservices} className='content-img-detail-services1' />
          </div>
          <di className='d-flex justify-content-between mt-4'>
            <div><Image  src={detailservices} className='image-intermédiaire-services' /></div>
            <div><Image  src={detailservices} className='image-intermédiaire-services' /></div>
            <div><Image  src={detailservices} className='image-intermédiaire-services' /></div>
           
          </di>
        </div>
        <div className='second-img-right-services'>
        <div className='second-img-right1-services'>
          <h1>Services de Construction de maison</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s,</p>
             <div className='d-flex justify-content-center mt-5'>
              <Button id='btn-btn-ajouter-panier-services' className='me-2'>Demander service</Button>
              <Button id='btn-btn-ajouter-panier-services'><a href="https://wa.me/774935677" style={{textDecoration:'none', color:'white'}}>Contactez Nous</a></Button>
             </div>
          </div>
          <h4 className='mt-4'>Consulter nos autres services:</h4>
        <div className='d-flex justify-content-between  mt-4 '>
          <div><Image  src={detailservices} className='image-intermédiaire-services' />
          <div className='mt-2'><span className='voir-content-detailservices'><Link to={'/services'} id='link-voir-more-services' >voir</Link></span></div>
          </div>
          <div><Image  src={detailservices} className='image-intermédiaire-services' />
          <div className='mt-2'><span className='voir-content-detailservices'><Link to={'/services'} id='link-voir-more-services' >voir</Link></span></div></div>
          
          <div><Image  src={detailservices} className='image-intermédiaire-services' />
          <div className='mt-2'><span className='voir-content-detailservices'><Link to={'/services'} id='link-voir-more-services' >voir</Link></span></div></div>
        </div>
        
        </div>
      </div>
     </div>
     <Footer />
    </div>
  )
}

