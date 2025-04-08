import React from 'react'
import "./ContactCardStyles.css"

const ContactCard = ({address, email,id,name,phone}) => {
  return (
    <div className='contactCardBody container-fluid'>
        <div className="row"></div>
        <div className="row">
            <div className="col-1 p-0">
                iconPLaceholder
            </div>
            <div className="col  p-0 justify-content-start"> {address}</div>
            </div>
        <div className="row">{phone}</div>
        <div className="row">{email}</div>

    </div>
  )
}

export default ContactCard