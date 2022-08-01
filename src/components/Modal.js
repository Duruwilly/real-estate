import React, { useRef } from 'react'
import ReactDOM  from 'react-dom';

const Modal = ({ setShowModal }) => {

 /* this close the modal when clicked outside the modal */
 const modalRef = useRef();
 const closeModal = (e) => {
  if (e.target === modalRef.current) {
   setShowModal(false);
  }
 };
 /* render the modal in the portal div in index.html*/
  return ReactDOM.createPortal(
    <div className='modal' ref={modalRef} onClick={closeModal}>
      <div className="modal-wrapper">
          <h1>Input your email to receive the latest update from century homes</h1>
        <form action="" className='newsletter-form'>
            <input type="text" name='email' placeholder='Enter your email'/>
            <button type='submt'>Submit</button>
        </form>
        <button onClick={() => setShowModal(false)} className='modal-close'>X</button>
     </div>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal