import React, { useEffect, useState } from 'react'
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil'
import Footer from '../../Components/Footer/Footer'
import Underline from '../../Components/Underline/Underline'
import detailservices from '../../fichiers/contruction.png'
import { Button, Image } from 'react-bootstrap'
import './DetailServicesAdmin.css';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function DetailServicesAdmin() {

   // use params nous permet de recuperer les paramettre de mon url qui sont dans l'url comme l'id
   const { id } = useParams();
   const [serviceDetails, setServiceDetails] = useState({});
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    const fetchTerrDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/service/detail/${id}`
        );

        if (response.data.service) {
          setServiceDetails(response.data.service);
          console.log(response.data, "ici la reponse de detail");
        } else {
          console.error("La réponse de détail est undefined ou null.");
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du terrain:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTerrDetails();
  }, [id]);

  console.log("serserviceDetails:",serviceDetails);

  console.log("serserviceDetails:",serviceDetails);
  return (
    <div>
    
     <div id='content-main-detail-maison-content'>
      
      <div className='d-flex content-main-detailmaison-services container'>
        <div className='one-img-left-services' >
          <div className='img-main-detail-services'>
            <Image  src={serviceDetails.image} className='content-img-detail-services1' />
          </div>
          
        </div>
        <div className='second-img-right-services'>
        <div className='second-img-right1-services'>
          <h1>{serviceDetails.titre} </h1>
          <p>{serviceDetails.description}</p>
             <div className='d-flex justify-content-center mt-5'>
              <Button id='btn-btn-ajouter-panier-services' className='me-2'>Demander service</Button>
              <Button id='btn-btn-ajouter-panier-services'><a href="https://wa.me/774935677" style={{textDecoration:'none', color:'white'}}>Contactez Nous</a></Button>
             </div>
          </div>
          
        
        </div>
      </div>
     </div>
    
    </div>
  )
}


