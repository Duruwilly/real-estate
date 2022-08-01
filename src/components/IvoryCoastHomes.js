import React from 'react'
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
import NigeriaCarousel from '../HomesCarousel/NigeriaCarousel'
import first from '../images/house 1.jpg';
import second from '../images/house 3.jpg';
import third from '../images/house 4.jpg';
import interior1 from '../images/interior.jpeg';
import interior2 from '../images/interior 2.jpeg';
import interior3 from '../images/interior 3.jpg';
import interior4 from '../images/interior 4.jpg';
import hero1 from '../images/hero 1.jpg';
import hero3 from '../images/hero 3.jpg';
import hero4 from '../images/hero 4.jpg';

const IvoryCoastHomes = () => {
  return (
    <div className='homesbox-section' >
      <div className="homesbox-container">
        <div className="homesbox-wrapper">
          <div className="homesbox-content">
            <button className='back-home'>
              <Link to='/'><BiArrowBack className='back-home-arrow'/>return back to home</Link>
            </button> 
            <div className="homes-box">
              <NigeriaCarousel>
                <img src={second} alt="" />
                <img src={interior4} alt="" />
                <img src={interior1} alt="" />
                <img src={interior2} alt="" />
              </NigeriaCarousel>
              <p>Bonoua, Ivory Coast</p>
              <p>$120,000</p>
              <p>3drm, 2bda</p>
            </div>

            <div className="homes-box">
              <NigeriaCarousel>
                  <img src={first} alt="" />
                  <img src={interior2} alt="" />
                  <img src={interior3} alt="" />
                  <img src={interior3} alt="" />
              </NigeriaCarousel>
              <p>Dabou, Ivory Coast</p>
              <p>$150,000</p>
              <p>4drm, 2bda</p>
            </div>

            <div className="homes-box">
              <NigeriaCarousel>
                  <img src={hero3} alt="" />
                  <img src={interior4} alt="" />
                  <img src={interior3} alt="" />
                  <img src={interior2} alt="" />
              </NigeriaCarousel>
              <p>BingerVille, Ivory Coast</p>
              <p>$120,000</p>
              <p>3drm, 2bda</p>
            </div>

            <div className="homes-box">
              <NigeriaCarousel>
                  <img src={third} alt="" />
                  <img src={hero4} alt="" />
                  <img src={interior1} alt="" />
                  <img src={interior2} alt="" />
                  </NigeriaCarousel>
                  <p>Dimbokro, Ivory Coast</p>
                  <p>$120,000</p>
                  <p>3drm, 2bda</p>
            </div>

            <div className="homes-box">
              <NigeriaCarousel>
                  <img src={second} alt="" />
                  <img src={interior4} alt="" />
                  <img src={interior1} alt="" />
                  <img src={interior2} alt="" />
              </NigeriaCarousel>
              <p>Gagona, Ivory Coast</p>
              <p>$120,000</p>
              <p>3drm, 2bda</p>
            </div>

            <div className="homes-box">
              <NigeriaCarousel>
                  <img src={hero4} alt="" />
                  <img src={interior4} alt="" />
                  <img src={interior1} alt="" />
                  <img src={interior2} alt="" />
              </NigeriaCarousel>
              <p>Divo, Ivory Coast</p>
              <p>$120,000</p>
              <p>3drm, 2bda</p>
            </div>

            <div className="homes-box">
              <NigeriaCarousel>
                  <img src={hero4} alt="" />
                  <img src={interior4} alt="" />
                  <img src={interior1} alt="" />
                  <img src={interior2} alt="" />
              </NigeriaCarousel>
              <p>Anyama, Ivory Coast</p>
              <p>$120,000</p>
              <p>3drm, 2bda</p>
            </div>

            <div className="homes-box">
              <NigeriaCarousel>
                  <img src={hero1} alt="" />
                  <img src={interior4} alt="" />
                  <img src={interior1} alt="" />
                  <img src={interior2} alt="" />
              </NigeriaCarousel>
              <p>San-Pedro, Ivory Coast</p>
              <p>$120,000</p>
              <p>3drm, 2bda</p>
            </div>

            <div className="homes-box">
              <NigeriaCarousel>
                  <img src={hero4} alt="" />
                  <img src={interior4} alt="" />
                  <img src={interior1} alt="" />
                  <img src={interior2} alt="" />
              </NigeriaCarousel>
              <p>Bouake, Ivory Coast</p>
              <p>$120,000</p>
              <p>3drm, 2bda</p>
            </div>

            <div className="homes-box">
              <NigeriaCarousel>
                  <img src={hero1} alt="" />
                  <img src={interior4} alt="" />
                  <img src={interior1} alt="" />
                  <img src={interior2} alt="" />
              </NigeriaCarousel>
              <p>Abidjan, Ivory Coast</p>
              <p>$120,000</p>
              <p>3drm, 2bda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IvoryCoastHomes
