import React,{useEffect} from 'react'
import "./ContactBodyStyles.css"
import { useGlobalState } from '../../store/appContext'

import ContactCard from './ContactCard.jsx'

const ContactBody = () => {
    const {store:{contactList},actions:{fetchAgenda}}=useGlobalState()
  useEffect(()=>{
fetchAgenda()
  },[])
    return (
    <div className='contactBody p-0 container-fluid d-flex flex-column'>
        {
            contactList.length !== 0 ? 
            contactList.map((elem)=>
            <ContactCard key={elem.id} {...elem}/>
            )
            :" Cargando"
        }
    </div>
  )
}

export default ContactBody