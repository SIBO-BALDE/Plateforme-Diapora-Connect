import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import photo from '../../fichiers/profile.png'
import { Button, Form, Image } from 'react-bootstrap';
import { emailPattern} from '../../Components/Regex/Regex.js' 
import axios from 'axios';
import './Auth.css'; 

export default function Inscription() {
  // cration des varaibles d'etat pour stocker les information du formulaires avec des function setter pour mettre à jour
  // les valeurs
  const [nom,setNom]=useState("");
  const [prenom,setPrenom]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [telephone,setTelephone]=useState("");
  const [passwordConf,setPasswordConf]=useState("");
  const [image,setImage]=useState(null);

  // state pour la validation des erreur de formulaire
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  
  // declarer la variable pour permetre la redirection dans un autre composant
  const navigate = useNavigate(); 
  

  const handleSubmit = async (e)=>{
    e.preventDefault();
     try {
        if(nom==='' || prenom==='' || email==='' || password==='' || passwordConf==='' || telephone==='' || image==='') {
            Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Vueillez remplir tous les champs",
          });
          return
          // la fonction return est utilisée pour sortir 
          // prématurément de la fonction handleSubmit afin d'éviter l'exécution des étapes suivantes du traitement du
          //  formulaire.
    
          } else if (!emailPattern.test(email) ) {
            setEmailErr(true); 
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "votre email est invalide",
            });
            return  
            }else if (passwordConf !== password) {
                setPwdError(true); 
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "la confirmation  du mot de pass à échouer",
                });
                return  
                }else{
                  // console.log(image, 'avant formData');
                  const formData = new FormData();
                    formData.append('nom', nom);
                    formData.append('prenom', prenom);
                    formData.append('email', email);
                    formData.append('password', password);
                    formData.append('telephone', telephone);
                    // formData.append('image', image);
                    formData.append('image', image, image.name);

                    // console.log(formData, 'formData inscription')
                    // creer un obect dans la base de donnée
                    const response = await axios.post('http://localhost:8000/api/register', formData, {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                      },
                    });
                    // console.log(response.data.status, 'response inscription')
                    // console.log(formData, 'formData inscription')
                    if (response.status === 200) {
                      // Succès - L'utilisateur a été enregistré
                      Swal.fire({
                        icon: 'success',
                        title: 'Succès!',
                        text: 'Utilisateur enregistré avec succès!',
                      });
                
                      setNom('');
                      setPrenom('');
                      setEmail('');
                      setPassword('');
                      setPasswordConf('');
                      setTelephone('');
                      setImage('');
                      navigate('/connexion');
                    }
                     
                }
        
     } catch (error) {   
     }
      }
      const handleCancel =async (e) => {
        e.preventDefault();
        Swal.fire({
          title: "Vous etes sur?",
          text: "De vouvoiloir annuler votre inscription!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#D46F4D",
          cancelButtonColor: "#d33",
          confirmButtonText: "Oui, annuler!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Annulé!",
              text: "La requete à été annulé.",
              icon: "success"
            });
          }
        });
        setEmail("");
          setPassword("");
    
      }

      
        

  return (
<div className='container  content-flex-signin'>
  <div className='img-content-form1'>
    <Image src={photo} alt='' />
  </div>
  <div className='content-left-form'>
    <Form >
    <h3 className='text-center mt-3 mb-3'> INSCRIPTION</h3>
    <div className='d-flex justify-content-around '>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nom</Form.Label><span style={{color:'red'}}>*</span>
            <Form.Control type="text" onChange={(e)=>setNom(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Prenom</Form.Label><span style={{color:'red'}}>*</span>
            <Form.Control type="text"  onChange={(e)=>setPrenom(e.target.value)} />
        </Form.Group>
    </div>
    <div className='d-flex justify-content-around '>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Email</Form.Label><span style={{color:'red'}}>*</span>
            <Form.Control type="text" onChange={(e)=>setEmail(e.target.value)}   />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Mot de passe</Form.Label><span style={{color:'red'}}>*</span>
            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)}  />
        </Form.Group>
    </div>
    <div className='d-flex justify-content-around '>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label> Confirmation  mot de passe </Form.Label><span style={{color:'red'}}>*</span>
            <Form.Control type="password" onChange={(e)=>setPasswordConf(e.target.value)}  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
            <Form.Label> Télephone </Form.Label><span style={{color:'red'}}>*</span>
            <Form.Control type="tel"  onChange={(e)=>setTelephone(e.target.value)}/>
        </Form.Group>
    </div>

        <Form.Group className="mb-3  " controlId="exampleForm.ControlInput7">
            <Form.Label> Profile </Form.Label><span style={{color:'red'}}>*</span>
            <Form.Control type='file'  
            // onChange={(e) => setImage(e.target.files[0];

            //   console.log(selectedImage, 'selected  image');
            //   setImage(selectedImage);
            //   )
            
            // }
            onChange={(e) => {
              const selectedImage = e.target.files[0];
              console.log(selectedImage, 'selected image');
              setImage(selectedImage);
            }}
            
             className='d-flex  justify-content-around'/>
        </Form.Group>
        <div className='btn-content-position'>
        <Button  onClick={ handleSubmit} type='submit'  className='btn-colour'>S'inscrire</Button>
        <Button type='' onClick={handleCancel}  className='btn-colour1' id='btn-colour1' style={{marginLeft:'10px'}} >Annuler</Button>
        {/* onClick={handleCancel} */}
        </div>
        <Link to={'/connexion'} className='content-link' style={{color:'#D46F4D'}}>Vous avez dejas un? connectez vous</Link>
    </Form>
  </div>
</div>
    
  )
}

