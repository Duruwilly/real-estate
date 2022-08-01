import React,{ useState } from 'react'
import Modal from './Modal'
import Background from '../images/interior.jpeg';

var newsLetterStyle = {
 width: '100%',
 padding: '0',
 backgroundImage: `url(${Background})`,
 backgroundPosition: 'center',
 backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat',
}

const Newsletter = () => {
 const [showModal, setShowModal] = useState(false);

 const openModal = () => {
  setShowModal(true);
 };
  return (
   <div style={newsLetterStyle}>
    <div className="overlay">
     <div className="newslettercontainer">
        <h1>Newsletter</h1>
     <p>Click the button below to input your Email</p>
     <button onClick={openModal} className='newsletter-btn'>Open Newsletter</button>
     
     {
      showModal ? <Modal setShowModal={setShowModal} /> : null
     } 
     </div>
    </div>
   </div>
/*     <div className='newslette' style={newsLetterStyle}>
     <div className="newsletter-container">
     <div className="newsletter-wrapper">
     <h1>Newsletter</h1>
     <p>CLick the button below to input your Email</p>
     <button onClick={openModal} className='newsletter-btn'>Open Newsletter</button>
     {
      showModal ? <Modal setShowModal={setShowModal} /> : null
     }
    </div>
    </div>
    </div> */
  );
}

export default Newsletter