import React from 'react';
import { SliderData } from '../Data/Sliderdata';
import Herosection from './Herosection'
import About from './About'
import Homessection from './Homessection';
import Newsletter from './Newsletter';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <Herosection slides={SliderData}/>
      <About />
      <Homessection />
      <Newsletter />
      <Contact />
    </div>
  )
}

export default Home