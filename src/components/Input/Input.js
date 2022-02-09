import React from 'react';
import './Input.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function Input() {
  return <div className='inputContainer'>
      <div className='SearchIcon'>
      <FontAwesomeIcon icon={faMagnifyingGlass}/>  
      </div>
      <input  placeholder='Search'/>
  </div>;
}

export default Input;
