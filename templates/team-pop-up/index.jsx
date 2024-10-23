import React from 'react'
import { render, FramerMotion, useCasparData } from '@nxtedition/graphics-kit'
import { motion, AnimatePresence } from 'framer-motion'
import './style.css'

const TeamPointsBox = () => {
  const { title, title2, title3, title4, points1 = '0', points2 = '0', points3 = '0', points4 = '0' } = useCasparData()

  const teams = [
    { rank: 1, name: title || 'Team 1', points: points1 },
    { rank: 2, name: title2 || 'Team 2', points: points2 },
    { rank: 3, name: title3 || 'Team 3', points: points3 },
    { rank: 4, name: title4 || 'Team 4', points: points4 },
  ]

  return (
    <FramerMotion>
      <AnimatePresence>
        <motion.div
          className="points-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {teams.map((team) => (
            <motion.div
              key={`team${team.rank}`}
              className="team-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <span className="rank">{team.rank}</span>
              <span className="team-name">{team.name}</span>
              <span className="points">{team.points}</span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </FramerMotion>
  )
}

render(TeamPointsBox)
