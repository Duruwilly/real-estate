import React, { useEffect, useState } from 'react'

const NigeriaCarousel = (props) => {
  const {children} = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)
  /* adding handler for onTouchPosition - onTouchStart is an event listener that triggers a touchstart event*/
   const [touchPosition, setTouchPosition] = useState(null)

   /* the function for the onTouchPosition */
    const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
    }

    /* function for onTouchMove - this is an event listener that will trigger a touchMove event every time the user move their finger on the screen, it check for current position of user's finger */
    const handleTouchMove = (e) => {
      const touchDown = touchPosition

      if(touchDown === null) {
        return
      }

      const currentTouch = e.touches[0].clientX
      const diff = touchDown - currentTouch
      
      /* to determine the direction of the swipe, we need a minimum speed of the finger's movement in which 5 and -5 suits because negative value means the user swipe to the right */
      if (diff > 5) {
        next()
      }

      if (diff < -5) {
        prev()
      }

      setTouchPosition(null)
    }

    /* set the length to match the current children from props */
  useEffect(() => {
   setLength(children.length)
  }, [children])

  const next = () => {
   if (currentIndex < (length - 1)) {
    setCurrentIndex(prevState => prevState + 1)
   }
  }

  const prev = () => {
   if (currentIndex > 0) {
    setCurrentIndex(prevState => prevState - 1)
   }
  }

 
 return (
    <div className='carousel-container'>
     <div className="carousel-wrapper">
      { /* hiding the control button when not needed */
       currentIndex > 0 &&
        <button className="left-arrow" onClick={prev}>
       &#10094;
      </button>
      }
      <div className="carousel-content-wrapper" onTouchStart={handleTouchStart}
      /* binding the handleTouchStart to onTouchStart listener */
      onTouchMove={handleTouchMove}>
       <div className="carousel-content"
       style={{ transform: `translate(-${currentIndex * 100}%)`}}>
        {children}
       </div>
      </div>
      { /* hiding the control button when not needed */
       currentIndex < (length - 1) &&
        <button className="right-arrow" onClick={next}>
       &#10095;
      </button>
      }
     </div>

    </div>
  )
}

export default NigeriaCarousel