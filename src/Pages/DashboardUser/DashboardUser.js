import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Image } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function DashboardUser() {
  const [utilisateur, setUtilisateur] = useState(null);

  useEffect(() => {
    // Récupérez le token et le role  du localStorage
       const token = localStorage.getItem('tokencle')
       const role = localStorage.getItem("rolecle");;

    // Si le token ou le role  existe, faites une requête à l'API pour récupérer les informations de l'utilisateur 
    if (token || role) {
        axios.post('http://localhost:8000/api/auth/me', {}, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        })

      
      .then(response => {
        const userData = response.data; // Adapté selon la structure de votre réponse API
        setUtilisateur(userData);
        console.log(userData, 'userdATA Dashboard')
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
      });
    }
  }, []);

  return (
    <div>
    <div className='cardtemoinhom'>
      <div className='d-flex justify-content-end '><h5><Link to={'/'} style={{textDecoration:'none', color:'#D46F4D'}}>Accueil <FontAwesomeIcon icon={faHome} /></Link> </h5></div>
      <div className='cardtemoinhome1'>
        {utilisateur && utilisateur.image && <Image src={utilisateur.image} />}
      </div>
      <div className='cardtemoinhome2'>
        {utilisateur && (
          <>
            <h6 className='text-center title-temoinhome text-light'>{utilisateur.prenom} {utilisateur.nom}</h6>
            <p className='text-center  text-light'>{utilisateur.email} </p>
            <p className='text-center  text-light'>{utilisateur.telephone} </p>

            <p className='text-center text-light paratextcontenthome'>
              <span></span> <br />
              
            </p>
          </>
        )}
        
        {utilisateur && <div className='d-flex justify-content-center '> <Button>Modifier mon profil</Button> </div>}
      </div>
    </div>
  </div>
  
  );
}


