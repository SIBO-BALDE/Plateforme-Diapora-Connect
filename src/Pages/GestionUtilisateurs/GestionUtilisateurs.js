import React from 'react'
import "./GestionUtilisateurs"
import { Button, Form, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUserLock } from '@fortawesome/free-solid-svg-icons';
import profileuser from '../../fichiers/profile.png'

export default function GestionUtilisateurs() {
  return (
    <div className='container'>
        <div className='d-flex justify-content-between mt-5'>
          <div><Button className='ms-4'style={{backgroundColor:'#d46f4d', border :'none'}}>Voir liste utilisateur bloqués</Button></div>
          <div className='flex-grow-1 d-flex justify-content-end '>
            <div className="champsRecherche mt-2 mb-3 w-50">
              <Form>
                <div
                  class="input-group flex-nowrap "
                  style={{borderColor:'#d46f4d'}}
                >
                  <Form.Control
                    type="search"
                    className="form-control w-50   "
                    placeholder="Rechercher un utilisateur"
                    aria-label="user"
                    aria-describedby="addon-wrapping"
                  />
                  <span
                    className="input-group-text text-white me-4"
                    id="addon-wrapping"
                    style={{backgroundColor:'#d46f4d'}}
                    ><FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className='mt-4 ms-3  me-3 '>
          <table className="table border  border-2 ">
            <thead className="" id='hearder-color' style={{backgroundColor:'#d46f4d'}}>
             <tr >
                <th className='header-color' style={{backgroundColor:'#d46f4d' ,color:'#fff'}} >Profile</th>
                <th style={{backgroundColor:'#d46f4d' , color:'#fff'}}>Prenom</th>
                <th style={{backgroundColor:'#d46f4d', color:'#fff' }}>Nom</th>
                <th style={{backgroundColor:'#d46f4d', color:'#fff' }}>Email</th>
                <th style={{backgroundColor:'#d46f4d', color:'#fff' }}>Téléphone</th>
                <th style={{backgroundColor:'#d46f4d', color:'#fff' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <Image src={profileuser} className="img-profile-tab-user" id='img-profile-tab-user' 
                  style={{height: "30px", width: "30px", borderRadius:"50%"}} />
                </td>
                <td>Amady</td>
                <td>Fall</td>
                <td>bass@gmail.com</td>
                <td>778529967</td>
                <td>
                  <Button style={{backgroundColor:'#fff' , border:'1px solid #d46f4d', color:'#d46f4d'}}>
                    <FontAwesomeIcon icon={faUserLock} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                <Image src={profileuser} className="img-profile-tab-user" id='img-profile-tab-user' 
                  style={{height: "30px", width: "30px", borderRadius:"50%"}} />
                </td>
                <td>Amady</td>
                <td>Fall</td>
                <td>bass@gmail.com</td>
                <td>778529967</td>
                <td>
                  <Button style={{backgroundColor:'#fff' , border:'1px solid #d46f4d', color:'#d46f4d'}}>
                    <FontAwesomeIcon icon={faUserLock} />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}
