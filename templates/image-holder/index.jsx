import React from 'react'
import { render, FramerMotion } from '@nxtedition/graphics-kit'
import './style.css'

const MapLayout = () => {
  return (
    <FramerMotion>
      <div className="map-container">
        <div className="left-box">
          <img src="azerbaijanmap.gif" alt="Inset Map" className="inset-map" />
        </div>
        <div className="right-box">
          <img src="mapimage.jpeg" alt="Main Map" className="main-map" />
        </div>
      </div>
    </FramerMotion>
  )
}

render(MapLayout)
