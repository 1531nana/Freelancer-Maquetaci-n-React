import React from 'react';

export const Contactme = () => {
  return (
    <div className="sectionContact">
      <h1>CONTACT ME</h1>
      <div className='start3'>
      <hr className="rayita2"/>
      <p className="fa-solid fa-star start2"></p>
      <hr className="rayita2"/>

      </div>
      <input placeholder='Name'/>
      <input placeholder='Email Adress'/>
      <input placeholder='Phone number'/>
      <textarea placeholder='Message'/>
      <button className="buttonContact">Send</button>
    </div>
  )
}
