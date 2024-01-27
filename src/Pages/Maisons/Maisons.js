import React from 'react'
import './Maisons.css';
import Underline from '../../Components/Underline/Underline'
import { Button, Form, Image } from 'react-bootstrap';
import banner from '../../fichiers/ban maison.png'
import image1 from '../../fichiers/m1.png'
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCartShopping, faComment, faGlobe, faHouse, faSink, faTag } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../../Components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import ButtonWatshapp from '../../Components/Buttons/BouttonWatshapp/ButtonWatshapp';


export default function Maisons() {
  return (
    <div>
      {/* navbbar */}
      <NavbarAccueil />
      {/* fin navbar */}

      {/* banner */}
      <div className='banmaison'>
        <Image src={banner}  id='banmaisonimg'/>
        <Button className=' btn-contentmaison' ><a href='#contentmainmaison'>Acheter maintenant</a></Button>
      </div>
       {/*  fin banner */}
      <Underline text="Nos offres de maison" id='underlinecomponent mt-0 ' />
      <ButtonWatshapp />
      <div id='contentmainmaison'>
        <div className="container">
            <div className="container_left">
              <div className="section_header">
          <div className="btn-section">
            <p className="btn btn"><span className='contentnombremaison'>63</span><span className='contentnombremaison2'>Maisons</span></p>
      
          </div>
          <div className="section_search">
            <Form action="" className='d-flex'>
              <Form.Control  type="text" placeholder="Cherchez une offre"  id='input-searchcontent-maison'/>
              <Button type='submit' id='btn-searchmaison'>Rechercher</Button>
            </Form>
          </div>
              </div>
              <div className="Card_Mentor">
                    <div className="card1">
                    <div className="section_left">
                     <Image src={image1} alt="" id='section-left'/>
                    </div>
                    <div className="section_right">
                      <p> <span><FontAwesomeIcon icon={faHouse}  id='iccon-sectionright-content'/> </span>Adress: <span id="prop">Diamniadio rue 123 Diomaye </span></p>
                      <p> <span><FontAwesomeIcon icon={faGlobe} id='iccon-sectionright-content' /></span>Superficie: <span id="prop">150m2</span></p>
                      <p> <span><FontAwesomeIcon icon={faTag} id='iccon-sectionright-content' /></span>Prix: <span id="prop">50.000.000 FCFA</span></p>
                      <p className=''>
                      
                     
                      {/* <span id="prop"><FontAwesomeIcon icon={faSink} id='iccon-sectionright-content' /></span>
                      <span id="prop"><FontAwesomeIcon icon={faBed} id='iccon-sectionright-content' /></span> */}
                  </p>
                    <div className='d-flex btn-content-section-right mt-5 '>
                      <button className='btn1'><Link to={'/detailmaison'}  id='link-detail-maison-content'>Voir détail</Link></button>
                      <button className='btn2' >Contactez</button>
                      </div>
                    </div>
                    </div>
                    <div className="card1">
                    <div className="section_left">
                     <Image src={image1} alt="" id='section-left'/>
                    </div>
                    <div className="section_right">
                      <p> <span><FontAwesomeIcon icon={faHouse}  id='iccon-sectionright-content'/> </span>Adress: <span id="prop">Diamniadio rue 123 Diomaye </span></p>
                      <p> <span><FontAwesomeIcon icon={faGlobe} id='iccon-sectionright-content' /></span>Superficie: <span id="prop">150m2</span></p>
                      <p> <span><FontAwesomeIcon icon={faTag} id='iccon-sectionright-content' /></span>Prix: <span id="prop">50.000.000 FCFA</span></p>
                      <p className=''>
                      
                     
                      {/* <span id="prop"><FontAwesomeIcon icon={faSink} id='iccon-sectionright-content' /></span>
                      <span id="prop"><FontAwesomeIcon icon={faBed} id='iccon-sectionright-content' /></span> */}
                  </p>
                    <div className='d-flex btn-content-section-right mt-5 '>
                      <button className='btn1'><Link to={'/detailmaison'}  id='link-detail-maison-content'>Voir détail</Link></button>
                      <button className='btn2' >Contactez</button>
                      </div>
                    </div>
                    </div>
                    <div className="card1">
                    <div className="section_left">
                     <Image src={image1} alt="" id='section-left'/>
                    </div>
                    <div className="section_right">
                      <p> <span><FontAwesomeIcon icon={faHouse}  id='iccon-sectionright-content'/> </span>Adress: <span id="prop">Diamniadio rue 123 Diomaye </span></p>
                      <p> <span><FontAwesomeIcon icon={faGlobe} id='iccon-sectionright-content' /></span>Superficie: <span id="prop">150m2</span></p>
                      <p> <span><FontAwesomeIcon icon={faTag} id='iccon-sectionright-content' /></span>Prix: <span id="prop">50.000.000 FCFA</span></p>
                      <p className=''>
                      
                     
                      {/* <span id="prop"><FontAwesomeIcon icon={faSink} id='iccon-sectionright-content' /></span>
                      <span id="prop"><FontAwesomeIcon icon={faBed} id='iccon-sectionright-content' /></span> */}
                  </p>
                    <div className='d-flex btn-content-section-right mt-5 '>
                      <button className='btn1'><Link to={'/detailmaison'}  id='link-detail-maison-content'>Voir détail</Link></button>
                      <button className='btn2' >Contactez</button>
                      </div>
                    </div>
                    </div>
                    <div className="card1">
                    <div className="section_left">
                     <Image src={image1} alt="" id='section-left'/>
                    </div>
                    <div className="section_right">
                      <p> <span><FontAwesomeIcon icon={faHouse}  id='iccon-sectionright-content'/> </span>Adress: <span id="prop">Diamniadio rue 123 Diomaye </span></p>
                      <p> <span><FontAwesomeIcon icon={faGlobe} id='iccon-sectionright-content' /></span>Superficie: <span id="prop">150m2</span></p>
                      <p> <span><FontAwesomeIcon icon={faTag} id='iccon-sectionright-content' /></span>Prix: <span id="prop">50.000.000 FCFA</span></p>
                      <p className=''>
                      
                     
                      {/* <span id="prop"><FontAwesomeIcon icon={faSink} id='iccon-sectionright-content' /></span>
                      <span id="prop"><FontAwesomeIcon icon={faBed} id='iccon-sectionright-content' /></span> */}
                  </p>
                    <div className='d-flex btn-content-section-right mt-5 '>
                      <button className='btn1'><Link to={'/detailmaison'}  id='link-detail-maison-content'>Voir détail</Link></button>
                      <button className='btn2' >Contactez</button>
                      </div>
                    </div>
                    </div>
             
              </div>
            </div>
          <div className="">
          <Pagination />
        </div>
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  )
}
