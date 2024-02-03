import React, { useEffect, useState } from 'react'
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil'
import Footer from '../../Components/Footer/Footer'
import Underline from '../../Components/Underline/Underline'
import { Button, Image } from 'react-bootstrap'
import './DetailServices.css';
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function DetailTerrain() {

  
  const [serviceLists, setServiceLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/api/service/liste"
  //       );
  //       // setCategories(response.categories);
  //       setServiceLists(response.data.services);
  //       // console.log(response, 'reponse')
  
  //       // console.log(response , 'servicesListdetail');
  //       console.log(serviceLists , 'serviceLists');
  //     } catch (error) {
  //       console.error("Erreur lors de la récupération des maison:", error);

  //     }
  //   };
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/service/detail/${id}`
        );

        if (response.data.service ) {
          setServiceLists(response.data.service);
          console.log(response, "ici reponse detailservice");
        } else {
          // console.error("La réponse de détail est undefined ou null.");
        }
      } catch (error) {
        // console.error(
        //   "Erreur lors de la récupération des détails de la maison:",
        //   error
        // );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [id]);
  return (
    <div>
     <NavbarAccueil />
     <div id='content-main-detail-maison-content'>
      <Underline  text='Detail services'/>
      
      <div className='d-flex content-main-detailmaison-services container'>
        <div className='one-img-left-services' style={{height:'360px'}} >
          <div className='img-main-detail-services'>
            <Image  src={serviceLists && serviceLists.image} className='content-img-detail-services1' />
          </div>
          
        </div>
        <div className='second-img-right-services' style={{height:'360px'}}>
        
        <div className='second-img-right1-services' >
          <h1>{serviceLists && serviceLists.titre}</h1>
          <p>{serviceLists && serviceLists.description} </p>
             <div className='d-flex justify-content-center mt-5'>
              <Button id='btn-btn-ajouter-panier-services' className='me-2 w-100 '>Demander service</Button>
              <Button id='btn-btn-ajouter-panier-services1'  className='me-2 w-100  btn-btn-ajouter-panier-services'><a href="https://wa.me/774935677" style={{textDecoration:'none', color:'#D46F4D'}}>Contactez Nous</a></Button>
             </div>
          </div>
           
         
        
        </div>
      </div>
     </div>
     <Footer />
    </div>
  )
}

