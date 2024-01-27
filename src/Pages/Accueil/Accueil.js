import React, { useEffect } from 'react'
import { Tooltip } from 'react-tooltip'
import NavbarAccueil from '../../Components/Navbars/NavbarAccueil/NavbarAccueil'
import Footer from '../../Components/Footer/Footer'
import { Button, Image } from 'react-bootstrap'
import bannier from '../../fichiers/bann accueil.jpeg'
import temoin5 from '../../fichiers/temoin5.png'
import temoin4 from '../../fichiers/temoin4.png'
import temoin6 from '../../fichiers/temoin6.png'
import temoin7 from '../../fichiers/temoin7.png'
import temoin8 from '../../fichiers/temoin8.png'
import temoinicon from '../../fichiers/icontmoignage.png'
import sipress from '../../fichiers/sipress.png'
import seneguindia from '../../fichiers/seneguindia.png'
import atepa from '../../fichiers/atepa.jpeg'
import siam from '../../fichiers/siam.jpeg'
import './Accueil.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faCheck, faHandHoldingHeart, faHandshake, faLightbulb, faPeopleArrows  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Underline from '../../Components/Underline/Underline'
import ButtonWatshapp from '../../Components/Buttons/BouttonWatshapp/ButtonWatshapp'
import Incrementation from '../../Components/Incrementation/Incrementation'

export default function Accueil() {
 




  return (
    <div>
      {/* Header*/}
      <header className='navbarcontenthome'>
      <NavbarAccueil />
      </header>
      {/* Header Fin */}


       {/* Main content  Debut*/}
      <main className='bodycontenthome mb-5'>
        {/* carrousel */}
        <Image  src={bannier}  alt='' className='bannaccueil'/>

        <div >
       <ButtonWatshapp />
      </div>

      {/* <Tooltip id="whatsapp-tooltip" place="left" effect="solid">
        <span>Envoyer un message à l'admin</span>
      </Tooltip> */}

        <div className='position-content-relative-parent'>
          <div className='text-relative-content'>
          <h5 className='text-center'>Construisez au Sénégal en <br></br>toute confiance</h5>
          <h6 className='text-center'>Vous souhaitez devenir propriétaire ou investisseur au Sénégal ?</h6>

          </div>
        <div className='d-flex justify-content-center  '> <Button id='btncarrousel'> <a href='#' className='btncarrousel'>Decouvrer nos offres</a></Button></div>
       </div>

      <div className='maincontenthome' id='maincontenthome'>
        {/* Diamond icon */}
        <Underline text='Nos offres' />
       
       <div className="Section_hand">
          <div className="Section_hand_Left" id='Section_hand_Left'>
            <div className="card-content-offre">
              <p className='title-content-home'>Maison à vendre</p>
              <p>Nous avons des duplex ou des villas extrement jolie que nous mettons à votre disposition à des pris défiants tou concurence.</p>
            </div>
            <div className="card-content-offre">
              <p className='title-content-home'>Terrain à vendre</p>
              <p>Nous avons des terrains ou des villas extrement jolie que nous mettons à votre disposition à des pris défiants tou concurence.</p>
            </div>
            <div className="card-content-offre">
             <p className='title-content-home'>Plan architectural de maison</p>
             <p>Nous vous proposons des maquettes, et des plans 3D pour la construction de vos maisons.</p>
            </div>
            <div className="card-content-offre">
                <p className='title-content-home'>Maison à construire</p>
                <p>Nous vous proposons des services de construction de maison avec des prix battants tout concurant.</p>
            </div>
            <div className="card-content-offre">
                <p className='title-content-home'>Devis de construction</p>
                <p>Nous vous proposons des services d'estimation du coût de votre maison. Configuration personnalisée de votre projet</p>
            </div>
            <div className="card-content-offre">
                <p className='title-content-home'>Conseil en immobilier</p>
                <p>Nous mettons à votre disposion des experts  qui vont vous aider à faire des investissement rentables.</p>
            </div>
          </div>
          <div className="Section_hand_Right">
     
          </div>
       </div>
      </div>

      {/* Nos objectifs */}
      <div className='mt-5 mb-5 '>
       <Underline  text='Nos objectifs'/>
      <div className='contentobjectifshome mt-5 '>
        <div className='cardobjecti1'>
          <span className='contenticonobjectif'> <FontAwesomeIcon icon={faCheck}  id='content-icon-check'/></span>
          <h5 className='mt-2'>Notre mission</h5>
          <p className='ms-2'>Faciliter l'accès à la propriété l
              et aux documents administratifs
              pour la diaspora sénégalaise </p>

        </div>
        <div className='cardobjecti1'>
          <span className='contenticonobjectif'> <FontAwesomeIcon icon={faLightbulb}  id='content-icon-check'/></span>
          <h5 className='mt-2'>Innovation Technologique</h5>
          <p className='ms-2'>Avec notre approche ,nous mettons  aux client au sein du projet en lui mettant au centre du projet </p>

        </div>
        <div className='cardobjecti1'>
          <span className='contenticonobjectif'> <FontAwesomeIcon icon={faBullseye}  id='content-icon-check'/></span>
          <h5 className='mt-2'>Objectif principale</h5>
          <p className='ms-2'>Faciliter l'accès à la propriété l
              et aux documents administratifs
              pour leurs maison ou terrain</p>

        </div>
        <div className='cardobjecti1'>
          <span className='contenticonobjectif'> <FontAwesomeIcon icon={faHandshake}  id='content-icon-check'/></span>
          <h5 className='mt-2'>Notre engagement</h5>
          <p className='ms-2'>plateforme vise à répondre à ses besoins spécifiques en matière de logement et de services administratifs pour la diaspora </p>

        </div>
        <div className='cardobjecti1'>
          <span className='contenticonobjectif'> <FontAwesomeIcon icon={faHandHoldingHeart}  id='content-icon-check'/></span>
          <h5 className='mt-2'>Notre impact</h5>
          <p className='ms-2'>Avec notre approche ;nous mettons  aux client au sein du projet en lui mettant au courant de ll’etat d’avancement du projet </p>

        </div>
        <div className='cardobjecti1'>
          <span className='contenticonobjectif'> <FontAwesomeIcon icon={faPeopleArrows}  id='content-icon-check'/></span>
          <h5 className='mt-2'>Le social au coeur de nos activités</h5>
          <p className='ms-2'>impact social de l’entreprise est devenu une préoccupation pour tous les acteurs concernés . </p>

        </div>

      </div>
      </div>
      
      {/* Section témoignage debut */}
      <div className='contenthome1 pt-5'>
      <Underline  text='Nos Témoignages'/>
      <div className='contenttemoignagehome'>
        <div className='cardtemoinhome' >
        <div className='cardtemoinhome1'><Image  src={temoin5}  className='cardtemoinhome1img'/></div>
        <div className='cardtemoinhome2'>
          <h6 className='text-center title-temoinhome text-light '>Moussa Bass</h6>
          <p className=' text-center text-light paratextcontenthome'> <span><Image  src={temoinicon} className='cardtemoinhome2icon' /></span> <br />Très satisfait, surtout toujours 
              disponible pour nous aider et
              répondre à nos questions
          </p>
          <div className='d-flex justify-content-center pb-5'>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faFacebookF} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faTwitter} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faInstagram} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faLinkedinIn} className='' /></div></div>
        </div>
        </div>
        <div className='cardtemoinhome'>
        <div className='cardtemoinhome1'><Image  src={temoin8}  className='cardtemoinhome1img'/></div>
        <div className='cardtemoinhome2'>
          <h6 className='text-center title-temoinhome text-light '>Amady Fall</h6>
          <p className=' text-center text-light paratextcontenthome'> <span><Image  src={temoinicon} className='cardtemoinhome2icon' /></span> <br />Très satisfait, surtout toujours 
              disponible pour nous aider et
              répondre à nos questions
          </p>
          <div className='d-flex justify-content-center pb-5'>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faFacebookF} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faTwitter} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faInstagram} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faLinkedinIn} className='' /></div></div>
        </div>
        </div>
        <div className='cardtemoinhome'>
        <div className='cardtemoinhome1'><Image  src={temoin4}  className='cardtemoinhome1img'/></div>
        <div className='cardtemoinhome2'>
          <h6 className='text-center title-temoinhome text-light '>Khady Dia</h6>
          <p className=' text-center text-light paratextcontenthome'> <span><Image  src={temoinicon} className='cardtemoinhome2icon' /></span> <br />Très satisfait, surtout toujours 
              disponible pour nous aider et
              répondre à nos questions
          </p>
          <div className='d-flex justify-content-center pb-5'>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faFacebookF} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faTwitter} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faInstagram} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faLinkedinIn} className='' /></div></div>
        </div>
        </div>
        <div className='cardtemoinhome'>
        <div className='cardtemoinhome1'><Image  src={temoin6}  className='cardtemoinhome1img'/></div>
        <div className='cardtemoinhome2'>
          <h6 className='text-center title-temoinhome text-light '>Moussa Bass</h6>
          <p className=' text-center text-light paratextcontenthome'> <span><Image  src={temoinicon} className='cardtemoinhome2icon' /></span> <br />Très satisfait, surtout toujours 
              disponible pour nous aider et
              répondre à nos questions
          </p>
          <div className='d-flex justify-content-center pb-5'>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faFacebookF} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faTwitter} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faInstagram} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faLinkedinIn} className='' /></div></div>
        </div>
        </div>
        <div className='cardtemoinhome'>
        <div className='cardtemoinhome1'><Image  src={temoin5}  className='cardtemoinhome1img'/></div>
        <div className='cardtemoinhome2'>
          <h6 className='text-center title-temoinhome text-light '>Sibo Balde</h6>
          <p className=' text-center text-light paratextcontenthome'> <span><Image  src={temoinicon} className='cardtemoinhome2icon' /></span> <br />Très satisfait, surtout toujours 
              disponible pour nous aider et
              répondre à nos questions
          </p>
          <div className='d-flex justify-content-center pb-5'>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faFacebookF} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faTwitter} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faInstagram} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faLinkedinIn} className='' /></div></div>
        </div>
        </div>
        <div className='cardtemoinhome'>
        <div className='cardtemoinhome1'><Image  src={temoin7}  className='cardtemoinhome1img'/></div>
        <div className='cardtemoinhome2'>
          <h6 className='text-center title-temoinhome text-light '>Ibrahima Dia</h6>
          <p className=' text-center text-light paratextcontenthome'> <span><Image  src={temoinicon} className='cardtemoinhome2icon' /></span> <br />Très satisfait, surtout toujours 
              disponible pour nous aider et
              répondre à nos questions
          </p>
          <div className='d-flex justify-content-center pb-5'>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faFacebookF} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faTwitter} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faInstagram} className='' /></div>
            <div className='cardtemoinsociau'><FontAwesomeIcon icon={faLinkedinIn} className='' /></div></div>
        </div>
        </div>

      </div>
      </div>
      {/* section Temoignage fin */}

      {/* section impact  début*/}
      
      <div className="mb-3 mt-5">
      <Underline  text='Quelques chiffres clés'/>
      </div>
      <div className='contentimpact'>
        
        <div className='bannerimpact'>
        <div className='contentimpact1'>
        {/* <Incrementation duration={9000} toValue={1000} fromValue={0} delimiter="+"> */}
        {/* <h1 className='contentimpactcolor' data-duration="9000" data-to-value="1000" data-from-value="0" data-delimiter="+">1000 +</h1> */}
        <Incrementation duration={9000} toValue={1000} fromValue={0} delimiter="+"/>
        {/* </Incrementation> */}
          <p className='contentimpactcolor'>Nombre de Maison vendu</p>
        </div>
        <div className='linebeteween'></div>
        <div className='contentimpact1'>
          {/* <h1 className='contentimpactcolor' data-duration="9000" data-to-value="1577" data-from-value="0" data-delimiter="+">1577 +</h1> */}
          <Incrementation duration={9000} toValue={1577} fromValue={0} delimiter="+"/>
          <p className='contentimpactcolor'>Nombre de terrain vendu</p>
          {/* <div className='linebeteween'></div> */}
        </div>
        <div className='linebeteween'></div>
        <div className='contentimpact1'>
          {/* <h1 className='contentimpactcolor'> 87,6 %</h1> */}
          <Incrementation duration={9000} toValue={86} fromValue={0} delimiter="%"/>
          <p className='contentimpactcolor'> Taux nombre de maison  construtes</p>
          {/* <div className='linebeteween'></div> */}
        </div>
        <div className='linebeteween'></div>
        <div className='contentimpact1'>
          {/* <h1 className='contentimpactcolor'> 75%</h1> */}
          <Incrementation duration={9000} toValue={75} fromValue={0} delimiter="%"/>
          <p className='contentimpactcolor'> Taux de plan de maison livré</p>
          {/* <div className='linebeteween'></div> */}
        </div>
        </div>
        </div>
      {/* section impact  fin*/}


      {/* section nos partenaire  debut*/}
      <div className='mt-5 mb-4'>
      <Underline  text='Ils nous font confiance'/>
      </div>
      <div className="Section_partenaire">
        <div className="partenaire">
          <div className="card_partenaire">
        <Image src={sipress} alt=""  className='card-partenaire-img'/>
          </div>
          <div className="card_partenaire">
        <Image src={seneguindia} alt=""  className='card-partenaire-img'/>
          </div>
          <div className="card_partenaire">
        <Image src={atepa} alt="" className='card-partenaire-img' />
          </div>
          <div className="card_partenaire">
        <Image src={siam} alt="" className='card-partenaire-img' />
          </div>
          <div className="card_partenaire">
        <Image src={atepa} alt="" className='card-partenaire-img' />
          </div>
          <div className="card_partenaire">
        <Image src={seneguindia} alt=""  className='card-partenaire-img'/>
          </div>
        </div>
     </div>
      {/* section nos  partenaire  fin*/}
        </main>
        {/* Main content Fin */}
       
     {/* Footer Debut */}
     <footer className='footercontenthome'>
      <Footer/>
     </footer>
     {/* Footer Fin */}
    </div>
  )
}
