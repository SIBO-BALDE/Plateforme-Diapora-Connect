import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './ButtonWatshapp.css';
import axios from 'axios';
import { Tooltip } from 'react-tooltip';
import { Button } from 'react-bootstrap';

export default function ButtonWatshapp() {

  const handleClickWatshappButton = async () => {
    try {
      const response = await axios.post('https://localhost:8000/api/users/whatsapp');
      console.log(response.data);
      
      // Assurez-vous que la réponse contient l'URL WhatsApp
      if (response.data && response.data.urlWhatsApp) {
        // Redirigez l'utilisateur vers le lien WhatsApp
        window.location.href = response.data.urlWhatsApp;
      } else {
        console.error('La réponse du serveur ne contient pas l\'URL WhatsApp.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message WhatsApp', error);
    }
  }
  
  return (
    <div>
       <Button className="whatsapp-button" onClick={handleClickWatshappButton }>
        <a 
           data-tooltip-id="my-tooltip-multiline" 
           data-tooltip-html="Besoin de plus d'information ?<br />Cliquez sur le button pour nous contacter">
        <FontAwesomeIcon icon={faWhatsapp}  className='icon-whattsapp'/>
        </a>
        <Tooltip id="my-tooltip-multiline" 
        style={{ backgroundColor: "#25D366", color: "#fff", fontSize:'15px', fontWeight:'bold'}}
        />
        </Button>
    </div>
  )
}
