import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './ButtonWatshapp.css';

export default function ButtonWatshapp() {
  return (
    <div>
       <div className="whatsapp-button"  data-tooltip-id="my-tooltip" data-tooltip-content="Hello to you too!" data-for="whatsapp-tooltip">
        <FontAwesomeIcon icon={faWhatsapp} />

      </div>
    </div>
  )
}
