import React from 'react'
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil'
import Footer from '../../Components/Footer/Footer'
import Underline from '../../Components/Underline/Underline'
import Pagination from '../../Components/Pagination/Pagination'
import banpropos from '../../fichiers/banpropos.png'
import { Button, Form, Image } from 'react-bootstrap'
import contact from '../../fichiers/contact.png'
import contactNous from '../../fichiers/contact-nous.png'
import './Contact.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faQuestion, faVoicemail } from '@fortawesome/free-solid-svg-icons'

export default function Contacts() {
  return (
    <div>
      <div>
        <NavbarAccueil />
        <div>
          <div className='banner-contact'>
            <Image src={banpropos} className='banner-contact1' />

          </div>
          <div className='main-content-contact'>
           <div className='mt-5 mb-5 '> <Underline text="Nous contactez" /></div>
            <section className=''>
              
              <div className=' conain-main-contact container'>
                <div className=''> 
                  <Image src={contactNous} id='img-contact-content' />
                  <div className='d-flex justify-content-evenly 'id='icon-relative-contact'>
                    <Link className='icon-contact-content'>
                      <span id='icon-taille-contact'> <FontAwesomeIcon icon={faPhone} /> </span>
                    <p>+221 78 963 55 54</p>
                    </Link>
                    <Link className='icon-contact-content'>
                    <span id='icon-taille-contact'> <FontAwesomeIcon icon={faEnvelope} /> </span>
                     <p>diapcon@gmail.com</p>
                    </Link>
                  </div>
                </div>
                <div className='second-contact-content'>
                <div className="innerCard">
            <div className="frontSide">
                <h1 clasNames="title">Besoin D'aide </h1>
                <span><FontAwesomeIcon icon={faQuestion}  id='conten-icon-question'/></span>
                {/* <p>Contactez Nous</p> */}
                
            </div>
            <div className="backSide">
              <h1>DIASPORA CONNECT</h1>
                <p>Vous souhaitez construire une maison au sénegal en etant à 
                    l’étrangerz visitez nos differents offres de services de construction à des prix battants tout concurenst</p>
                    <div className='w-100 d-flex  justify-content-center '><Button id='btn-btncontact'> Contactez nous</Button></div>
            </div>
                </div>
                </div>
              </div>
              <div className='section-contact1'>
              <Underline text="Pour tous autre informations vueillez et renseignez ce formulaire" />
              <div className='container  content-flex-contact'>
                < div className='content-left-form-contact'>
                    <Form >
                      <h3 className='text-center mt-5 '> Contactez nous</h3>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Email</Form.Label><span className='text-danger'>*</span>
                        <Form.Control type="text"   />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                          <Form.Label>Sujet</Form.Label><span className='text-danger'>*</span>
                          <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                        <div className='btn-content-position-contact'>
                            <Button type='submit'  className='btn-colour-contact'>Envoyer</Button>
                        </div>
                    </Form>
                  </div>
                  <div className='img-content-form-contact'>
                      <Image src={contact} alt='' id='image-form-contact'/>
                  </div>
              </div>
              </div>
             {/* <div className='container'> <Pagination /></div> */}
            </section>
          </div>
         
        </div>
        <Footer />
      </div>
    </div>
  )
}
