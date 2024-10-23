import React from 'react'
import { render, FramerMotion, useCasparData } from '@nxtedition/graphics-kit'
import { motion } from 'framer-motion'
import './style.css'

const FramerMotionExample = () => {
  const { previewImages } = useCasparData()

  return (
    <FramerMotion>
      <div className="map-container">
        <div className="left-box">
          <img src="Screenshot (2).png" alt="Inset Map" className="inset-map" />
        </div>
      </div>
    </FramerMotion>
  )
}

render(FramerMotionExample)

