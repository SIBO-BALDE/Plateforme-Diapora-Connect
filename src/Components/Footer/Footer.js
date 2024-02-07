import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import axios from 'axios';

import './Footer.css';
import { Form } from 'react-bootstrap';



export default function Footer() {
  const [email, setEmail] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handleSubscribe = async (e) => {
  //   e.preventDefault();
  //   // Envoyer la requête POST vers votre backend avec l'email en utilisant Axios
  //  await axios.post('http://votre-backend.com/newsletter/create', { email })
  //     .then(response => {
  //       // Gérer la réponse du backend (par exemple, afficher un message de succès)
  //       console.log('Réponse du backend:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Erreur lors de l\'envoi de la newsletter:', error);
  //     });
  // };




  return (
<div>
<footer className='mt-5'>
  <div className="Footer_Container">
   <br /> <br />
   {/* <!---------------- Debut Section Newsletters -------------> */}
    <div className="Section_Footer_Newsletters">
      <div className="Section_Footer_Containt">
        <div className="Section_Footer_Newsletters_Text">
          <h2>Inscrivez-Vous a la NewsLetters</h2>
          <p>Inscrivez-vous recevoir toutes les
            nouvelles Actualités !</p>
        </div>
        <div className="Section_Footer_Newsletters_Input">
          <Form>
            <Form.Group>
            <Form.Control
             type="e-mail" placeholder="Saisissez Votre e-mail" id="email" 
            //  value={email}
            //  onChange={handleEmailChange}
            
            />
            </Form.Group>
          <button  id="incription1">S'inscrire</button>
          </Form>
        </div>
      </div>
    </div>
    {/* <!--------------- Fin Section Newsletters ---------------> */}
    <div className="Section_Footer">
      <div className="Section_Footer_logo">
        <h3>Diaspora-Connect</h3>
        <p>Diaspora Connect vous accompagne sur vos projets d’investissement au sénégal</p>
        <span className='Social_Media d-flex'>
        <span className='content-icon-topbar'><FontAwesomeIcon icon={faFacebookF} className='icons-content1' /></span>
            <span className='content-icon-topbar'><FontAwesomeIcon icon={faTwitter} className='icons-content1' /></span>
            <span className='content-icon-topbar'><FontAwesomeIcon icon={faInstagram} className='icons-content1' /></span>
            <span className='content-icon-topbar'><FontAwesomeIcon icon={faLinkedinIn} className='icons-content1' /></span>
        </span>
      </div>
      <div>
        <h3>Liens Utiles</h3>
        <p> <Link to={'/contact'}>Contact</Link> </p>
        <p> <Link to={'/a-propos'}>a-propos</Link> </p>
        <p> <Link to={'/services'}>services</Link> </p>
        
      </div>
      <div>
        <h3>FAQ</h3>
        <p>Qui sommes nous ?</p>
        <p>FAQ</p>
      </div>
      <div>
        <h3>Autre</h3>
        <p><Link to={'/mentionlegal'}>Mention Légale</Link></p>
        <p><Link to={'/confidentialite'}>Confidentialité</Link></p>
        <p><Link to={'conditionutiliation'}>Condition d'utilisation</Link></p>
      </div>
    </div>
    <br />  <br />
    <hr  className='reference'/>
    <p className="Copyright">Copyright &nbsp;<i className="fa-solid fa-copyright"></i> &nbsp;2023 Diaspora-Connect</p>
    <br />
  </div>
</footer>
</div>
  )
}
