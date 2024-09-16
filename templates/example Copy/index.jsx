import React from 'react'
import { render, FramerMotion, useCasparData } from '@nxtedition/graphics-kit'
import { motion } from 'framer-motion'
import './style.css'

const FramerMotionExample = () => {
  const { title, title2, title3, title4, title5, title6, title7, title8, title9, title10, title11, title12, title13, title14, title15, title16, time1, time2, time3, time4, time5, time6, time7, time8 } = useCasparData()

  const matches = [
    { left: title, time: time1, right: title2 },
    { left: title3, time: time2, right: title4 },
    { left: title5, time: time3, right: title6 },
    { left: title7, time: time4, right: title8 },
    { left: title9, time: time5, right: title10 },
    { left: title11, time: time6, right: title12 },
    { left: title13, time: time7, right: title14 },
    { left: title15, time: time8, right: title16 },
  ]

  return (
    <FramerMotion>
      <div className="match-container">
        {matches.map(
          (match, index) =>
            (match.left || match.right) && (
              <motion.div
                key={`row${index}`}
                className="match-row"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
              >
                <div className="team-left">{match.left}</div>
                {match.time && (
                  <div className="time-box">
                    <div className="time">{match.time}</div>
                  </div>
                )}
                <div className="team-right">{match.right}</div>
              </motion.div>
            )
        )}
      </div>
    </FramerMotion>
  )
}

render(FramerMotionExample)
