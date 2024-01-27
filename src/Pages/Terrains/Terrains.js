import React from 'react'
import './Terrains.css';
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil';
import Footer from '../../Components/Footer/Footer';
import { Button, Form, Image } from 'react-bootstrap';
import banland from '../../fichiers/ban terrain.png'
import land1 from '../../fichiers/land1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faComment, faGlobe, faHouse, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Pagination from '../../Components/Pagination/Pagination';
import Underline from '../../Components/Underline/Underline';

export default function Terrains() {
  return (
    <div>
      <NavbarAccueil />

      <div className='contentmainland'>
        {/* banner */}
        <div>
          <Image src={banland}  id='imgbanland'/>
        </div>
        <Underline text='Nos offre de terrains' />
        
        <div className='container'>
        <div class="section_header  ">
          <div class="btn-section">
            <p class="btn btn"><span className='contentnombremaison'>60</span><span className='contentnombremaison2'>Terrains</span></p>
      
          </div>
          <div class="section_search">
            <Form action="" className='d-flex section-search-form'>
              <Form.Control  type="text" placeholder="Cherchez un terrain"  id='input-searchcontent-maison'/>
              <Button type='submit' id='btn-searchmaison'>Rechercher</Button>
            </Form>
          </div>
          </div>
        <div className='contentlandbody container '>
          <div className='card-land-band'>
            <div className='card-land-imgcontent'><Image src={land1} className='card-land-img' /> </div>
          
          <div className='pricelandcontent d-flex '>
            <h6>50.000.000FCFA</h6>
          </div>
          <div className='d-flex card1land' id='card1land'>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faHouse} /> </span><span>Terrain à vendre</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faGlobe} /></span><span>152m2</span></div>
            </div>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faLocationDot} /></span><span>Diass rue Sonko</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faCartShopping} /></span><span>Panier</span></div>
            </div>
          </div>
          <hr  id='referenceland'/>
          <div className='contentlan-btn'>
            <Button id='btn1'><Link to={'/detailterrain'} id='link-contentland1'>Voir détail</Link></Button>
            <Button id='btn2'><Link to={'/panier'} id='link-contentland2'>Ajouter panier</Link></Button>
          </div>
          </div>
          <div className='card-land-band'>
            <div className='card-land-imgcontent'><Image src={land1} className='card-land-img' /> </div>
          
          <div className='pricelandcontent  '>
            <h6>50.000.000FCFA</h6>
          </div>
          <div className='d-flex card1land' id='card1land'>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faHouse} /> </span><span>Terrain à vendre</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faGlobe} /></span><span>152m2</span></div>
            </div>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faLocationDot} /></span><span>Diass rue Sonko</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faCartShopping} /></span><span>Panier</span></div>
            </div>
          </div>
          <hr  id='referenceland'/>
          <div className='contentlan-btn'>
            <Button id='btn1'><Link to={'/detailterrain'} id='link-contentland1'>Voir détail</Link></Button>
            <Button id='btn2'><Link to={'/panier'} id='link-contentland2'>Ajouter panier</Link></Button>
          </div>
          </div>
          <div className='card-land-band'>
            <div className='card-land-imgcontent'><Image src={land1} className='card-land-img' /> </div>
          
          <div className='pricelandcontent d-flex '>
            <h6>50.000.000FCFA</h6>
          </div>
          <div className='d-flex card1land' id='card1land'>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faHouse} /> </span><span>Terrain à vendre</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faGlobe} /></span><span>152m2</span></div>
            </div>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faLocationDot} /></span><span>Diass rue Sonko</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faCartShopping} /></span><span>Panier</span></div>
            </div>
          </div>
          <hr  id='referenceland'/>
          <div className='contentlan-btn'>
            <Button id='btn1'><Link to={'/detailterrain'} id='link-contentland1'>Voir détail</Link></Button>
            <Button id='btn2'><Link to={'/panier'} id='link-contentland2'>Ajouter panier</Link></Button>
          </div>
          </div>
          <div className='card-land-band'>
            <div className='card-land-imgcontent'><Image src={land1} className='card-land-img' /> </div>
          
          <div className='pricelandcontent d-flex '>
            <h6>50.000.000FCFA</h6>
          </div>
          <div className='d-flex card1land' id='card1land'>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faHouse} /> </span><span>Terrain à vendre</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faGlobe} /></span><span>152m2</span></div>
            </div>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faLocationDot} /></span><span>Diass rue Sonko</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faCartShopping} /></span><span>Panier</span></div>
            </div>
          </div>
          <hr  id='referenceland'/>
          <div className='contentlan-btn'>
            <Button id='btn1'><Link to={'/detailterrain'} id='link-contentland1'>Voir détail</Link></Button>
            <Button id='btn2'><Link to={'/panier'} id='link-contentland2'>Ajouter panier</Link></Button>
          </div>
          </div>
          <div className='card-land-band'>
            <div className='card-land-imgcontent'><Image src={land1} className='card-land-img' /> </div>
          
          <div className='pricelandcontent d-flex '>
            <h6>50.000.000FCFA</h6>
          </div>
          <div className='d-flex card1land' id='card1land'>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faHouse} /> </span><span>Terrain à vendre</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faGlobe} /></span><span>152m2</span></div>
            </div>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faLocationDot} /></span><span>Diass rue Sonko</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faCartShopping} /></span><span>Panier</span></div>
            </div>
          </div>
          <hr  id='referenceland'/>
          <div className='contentlan-btn'>
            <Button id='btn1'><Link to={'/detailterrain'} id='link-contentland1'>Voir détail</Link></Button>
            <Button id='btn2'><Link to={'/panier'} id='link-contentland2'>Ajouter panier</Link></Button>
          </div>
          </div>
          <div className='card-land-band'>
            <div className='card-land-imgcontent'><Image src={land1} className='card-land-img' /> </div>
          
          <div className='pricelandcontent d-flex '>
            <h6>50.000.000FCFA</h6>
          </div>
          <div className='d-flex card1land' id='card1land'>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faHouse} /> </span><span>Terrain à vendre</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faGlobe} /></span><span>152m2</span></div>
            </div>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faLocationDot} /></span><span>Diass rue Sonko</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faCartShopping} /></span><span>Panier</span></div>
            </div>
          </div>
          <hr  id='referenceland'/>
          <div className='contentlan-btn'>
            <Button id='btn1'><Link to={'/detailterrain'} id='link-contentland1'>Voir détail</Link></Button>
            <Button id='btn2'><Link to={'/panier'} id='link-contentland2'>Ajouter panier</Link></Button>
          </div>
          </div>

          
          {/* <div className='card-land-band'>
            <div className='card-land-imgcontent'><Image src={land1} className='card-land-img' /> </div>
          
          <div className='pricelandcontent'>
            <h6>50.000.000FCFA</h6>
          </div>
          <div className='d-flex card1land' id='card1land '>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faHouse} /> </span><span>Terrain à vendre</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faGlobe} /></span><span>152m2</span></div>
            </div>
            <div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faLocationDot} /></span><span>Diass rue Sonko</span></div>
            <div><span className='landiconcard'><FontAwesomeIcon icon={faComment} /></span ><span className='landiconcard'><FontAwesomeIcon icon={faCartShopping} /></span></div>
            </div>
          </div>
          <hr  id='referenceland'/>
          <div className='contentlan-btn'>
            <Button id='btn1'><Link to={'/detailterrain'} id='link-contentland1'>Voir détail</Link></Button>
            <Button id='btn2'><Link to={'/panier'} id='link-contentland2'>Ajouter panier</Link></Button>
          </div>
          </div> */}
         
        </div>
          <Pagination  id='paginationterrain'/>
         </div>

      </div>
      <Footer />
    </div>
  )
}
