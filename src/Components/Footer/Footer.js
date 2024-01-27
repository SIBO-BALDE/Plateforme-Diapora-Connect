import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';



export default function Footer() {
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
          <input type="e-mail" placeholder="Saisissez Votre e-mail" id="email" />
          <button id="incription1">S'inscrire</button>
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
        <p>Mention Légale</p>
        <p>Confidentialité</p>
        <p>Condition d'utilisation</p>
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
