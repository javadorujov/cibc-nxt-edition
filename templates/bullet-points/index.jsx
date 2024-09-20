import React from 'react'
import { render, FramerMotion, useCasparData } from '@nxtedition/graphics-kit'
import { motion } from 'framer-motion'
import './style.css'

const TeamPointsBox = () => {
  const { title, title2, title3, title4, title5, title6 } = useCasparData()

  const teams = [
    { rank: 1, name: title },
    { rank: 2, name: title2 },
    { rank: 3, name: title3 },
    { rank: 4, name: title4 },
    { rank: 5, name: title5 },
    { rank: 6, name: title6 },
  ]

  return (
    <FramerMotion>
      <div className="points-box">
        {teams.map((team) => (
          team.name && (
            <motion.div
              key={`team${team.rank}`}
              className="team-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <span className="bullet-point" /> 
              <span className="team-name">{team.name}</span>
            </motion.div>
          )
        ))}
      </div>
    </FramerMotion>
  )
}

render(TeamPointsBox)
