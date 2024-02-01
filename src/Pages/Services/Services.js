import React, { useEffect, useState } from 'react'
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil'
import Footer from '../../Components/Footer/Footer'
import Pagination from '../../Components/Pagination/Pagination'
import Underline from '../../Components/Underline/Underline'
import { Button, Form, Image } from 'react-bootstrap'
import banservice from '../../fichiers/ban service.png'
import './Services.css';
import imgservice1 from '../../fichiers/S1 (1).png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ButtonWatshapp from '../../Components/Buttons/BouttonWatshapp/ButtonWatshapp'

export default function Services() {

  const [serviceLists, setServiceLists] = useState([]);

  // useEffect(() =>
  
  // )[];
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/service/liste"
        );
        // setCategories(response.categories);
        setServiceLists(response.data.services);
        console.log(response, 'reponse')
  
        console.log(response , 'servicesList');
      } catch (error) {
        console.error("Erreur lors de la récupération des maison:", error);

      }
    };
    fetchUsers();
  }, []);


  return (
    <>
      <NavbarAccueil />
      <div className='border6verifaction'>
        <Image  src={banservice} id='banimg-service' />
      </div>
      <div className='container'>
        <div className='mt-5'><Underline text='Nos offres de service' /></div>
        <ButtonWatshapp />
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

        {serviceLists &&
              serviceLists.map((serviceList) => (
          <div className='content-main-service-card'>
            <div className='content-main-service-content'>
              <Image src={serviceList.image} id='content-main-service-contentimg' />
            </div>
            <div className='content-bottom-card'>
            <div><h6 className='text-center mt-3 '>Contruction de maison</h6></div>
            <div className='btn-content-service'>
            <Button className='btn-service' ><Link to={'/detailservices'} id='detail-content-service'>Voir détail</Link></Button>
            </div>
            </div>

          </div>
           ))}
            
        </div>
         <Pagination />
      </div>
      
      <Footer />
    </>
  )
}
