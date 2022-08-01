import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { HomesData } from '../Data/Sliderdata'
import { Link } from 'react-router-dom';

const Homessection = (props) => {

  const slideLeft = () => {
    var slida = document.querySelector('.slida');
    slida.scrollLeft = slida.scrollLeft + 500;
  }

  const slideRight = () => {
    var slida = document.querySelector('.slida');
    slida.scrollLeft = slida.scrollLeft - 500;
  }

  return (
    <div className='section-home' id='homes'>
      <div className="container-home">
        <div className="homes-content">
          <h1>Explore homes on century homes</h1>
          <p>Take a deep dive and browse homes for sale, original neighbourhood photos, resident review and local insights to find what is right for you.</p>
        <div id='body'>
          <div className='main-slider-container'>
            <MdChevronLeft size={40} className='slider-icon left' onClick={slideLeft}/>
            <div className="slida">
            {
              HomesData.map((slide, index) => {
              return (
                <div className="slider-card" key={index}>

                  <img src={slide.url} alt={slide.alt} className='homes-image'/>
                  <h3 className="card-slider-location">{slide.location}</h3>
                  <button className='card-slider-btn'>
                    <Link to={slide.path} target='_blank'>{slide.label}</Link>
                  </button>
                </div>
                )
              })
            }
        </div>
        <MdChevronRight size={40} className='slider-icon right' onClick={slideRight}/>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Homessection