import React from 'react'
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil'
import Footer from '../../Components/Footer/Footer'
import Pagination from '../../Components/Pagination/Pagination'
import Underline from '../../Components/Underline/Underline'
import { Button, Form, Image } from 'react-bootstrap'
import banservice from '../../fichiers/ban service.png'
import './Services.css';
import imgservice1 from '../../fichiers/S1 (1).png'
import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      <NavbarAccueil />
      <div className='border6verifaction'>
        <Image  src={banservice} id='banimg-service' />
      </div>
      <div className='container'>
        <div className='mt-5'><Underline text='Nos offres de service' /></div>
        <div className="section_header">
          <div className="btn-section">
            <p className="btn btn"><span className='contentnombremaison'>04</span><span className='contentnombremaison2'>Services</span></p>
      
          </div>
          <div className="section_search">
            <Form action="" className='d-flex section-search-form'>
              <Form.Control  type="text" placeholder="Cherchez une offre"  id='input-searchcontent-maison'/>
              <Button type='submit' id='btn-searchmaison'>Rechercher</Button>
            </Form>
          </div>
          </div>
        
        <div className='content-main-service'>
          <div className='content-main-service-card'>
            <div className='content-main-service-content'>
              <Image src={imgservice1} id='content-main-service-contentimg' />
            </div>
            <div className='content-bottom-card'>
            <div><h6 className='text-center mt-3 '>Contruction de maison</h6></div>
            <div className='btn-content-service'>
            <Button ><Link to={'/detailservices'} id='detail-content-service'>Voir détail</Link></Button>
            </div>
            </div>

          </div>
          <div className='content-main-service-card'>
            <div className='content-main-service-content'>
              <Image src={imgservice1} id='content-main-service-contentimg' />
            </div>
            <div className='content-bottom-card'>
            <div><h6 className='text-center mt-3 '>Contruction de maison</h6></div>
            <div className='btn-content-service'>
            <Button ><Link to={'/detailservices'} id='detail-content-service'>Voir détail</Link></Button>
            </div>
            </div>

          </div>
          <div className='content-main-service-card'>
            <div className='content-main-service-content'>
              <Image src={imgservice1} id='content-main-service-contentimg' />
            </div>
            <div className='content-bottom-card'>
            <div><h6 className='text-center mt-3 '>Contruction de maison</h6></div>
            <div className='btn-content-service'>
            <Button ><Link to={'/detailservices'} id='detail-content-service'>Voir détail</Link></Button>
            </div>
            </div>

          </div>
          <div className='content-main-service-card'>
            <div className='content-main-service-content'>
              <Image src={imgservice1} id='content-main-service-contentimg' />
            </div>
            <div className='content-bottom-card'>
            <div><h6 className='text-center mt-3 '>Contruction de maison</h6></div>
            <div className='btn-content-service'>
            <Button ><Link to={'/detailservices'} id='detail-content-service'>Voir détail</Link></Button>
            </div>
            </div>

          </div>
          <div className='content-main-service-card'>
            <div className='content-main-service-content'>
              <Image src={imgservice1} id='content-main-service-contentimg' />
            </div>
            <div className='content-bottom-card'>
            <div><h6 className='text-center mt-3 '>Contruction de maison</h6></div>
            <div className='btn-content-service'>
            <Button ><Link to={'/detailservices'} id='detail-content-service'>Voir détail</Link></Button>
            </div>
            </div>

          </div>
          <div className='content-main-service-card'>
            <div className='content-main-service-content'>
              <Image src={imgservice1} id='content-main-service-contentimg' />
            </div>
            <div className='content-bottom-card'>
            <div><h6 className='text-center mt-3 '>Contruction de maison</h6></div>
            <div className='btn-content-service'>
            <Button ><Link to={'/detailservices'} id='detail-content-service'>Voir détail</Link></Button>
            </div>
            </div>

          </div>
            
        </div>
         <Pagination />
      </div>
      
      <Footer />
    </>
  )
}
