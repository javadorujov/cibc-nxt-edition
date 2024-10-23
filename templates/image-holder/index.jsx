import React from 'react'
import { render, FramerMotion } from '@nxtedition/graphics-kit'
import './style.css'

const MapLayout = () => {
  const image1 = useImage({ src: 'saurus1.jpg' })
  const image2 = useImage({ src: 'saurus2.jpg' })

  return (
    <FramerMotion>
      <div className="map-container">
        <div className="left-map-section">
           <motion.img src={image1?.src} initial={{ scale: 0 }} animate={{ scale: 1 }} />
        </div>
        <div className="right-map-section">
          <motion.img src={image2?.src} initial={{ scale: 0 }} animate={{ scale: 1 }} />
          </div>
        </div>
    </FramerMotion>
  )
}

render(MapLayout)
 