import React from 'react'
import Background from '../images/interior.jpeg';

var aboutStyle = {
 width: '100%',
 
 padding: '0',
 backgroundImage: `url(${Background})`,
 backgroundPosition: 'center',
 backgroundSize: 'cover',
 backgroundRepeat: 'no-repeat',
}

const About = () => {
  return (
    <div style={ aboutStyle } id='about'>
     <div className='overlay'>
      <div className='aboutcontainer'>
        <p>Century homes is a real estate company based in Nigeria with branches that span across other part of Africa with the aim of making home search easier. We engage in real estate development, sales, lease and management. We offer flexible payment plans on all our products and servics. We are positioned to deliver cutting egde and competitve real estate solutions to our valued clients.</p>
     </div>
    </div>
  </div>
  )
}

export default About