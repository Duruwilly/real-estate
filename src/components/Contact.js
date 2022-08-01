import React from 'react'
import {FaInstagram, FaTwitter, FaFacebook, FaLinkedinIn} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
     <div className="contact-wrapper">
         <div className="mission">
            <h2>our mission</h2>
            <p>To make home search easier across Africa, to provide skilled analysis and sound real estate advice.</p>
         </div>
         <div className="contact">
            <h2>contact us</h2>
            <p>info@centuryhomes.com.ng</p>
            <br />
            <p>24, Drive park way, Ikoyi Lagos</p>
            <br />
            <p>01-24xxxxx, 09034031589</p>
         </div>
         <div className='social-icons'>
            <a href='https://facebook.com/prince.duru.355' target='_blank' rel='noreferrer noopener' style={{backgroundColor: '#0a3b52'}}>
               <FaFacebook />
            </a>
            <a href='https://instagram.com/theprincewillduru' target='_blank' rel='noreferrer noopener' style={{backgroundColor: '#a70f17'}}>
               <FaInstagram />
            </a>
            <a href='https://twitter.com/PrincewillDuruU' target='_blank' rel='noreferrer noopener' style={{backgroundColor: '#085b7c'}}>
               <FaTwitter />
            </a>
            <a href='https://linkedin.com/in/Princewill4Duru' target='_blank' rel='noreferrer noopener' style={{backgroundColor: '#0a3b52'}}>
               <FaLinkedinIn />
            </a>
        </div>
      </div>
    </div>
  )
}

export default Contact