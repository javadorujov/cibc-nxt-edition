import React from 'react'
import { render, FramerMotion, useCasparData } from '@nxtedition/graphics-kit'
import { motion } from 'framer-motion'
import './style.css'

const TeamPointsBox = () => {
  const { title, title2, title3, title4, title5, title6, points1 = '0', points2 = '0', points3 = '0', points4 = '0', points5 = '0', points6 = '0',} = useCasparData()

  const teams = [
    { rank: 1, name: title || 'Team 1', points: points1 },
    { rank: 2, name: title2 || 'Team 2', points: points2 },
    { rank: 3, name: title3 || 'Team 3', points: points3 },
    { rank: 4, name: title4 || 'Team 4', points: points4 },
    { rank: 5, name: title5 || 'Team 5', points: points5 },
    { rank: 6, name: title6 || 'Team 6', points: points6 },
  ]

  return (
    <FramerMotion>
      <div className="points-box">
        {teams.map((team) => (
          <motion.div
            key={`team${team.rank}`}
            className="team-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <span className="rank">{team.rank}°</span>
            <span className="team-name">{team.name}</span>
            <span className="points">{team.points} pts</span>
          </motion.div>
        ))}
      </div>
    </FramerMotion>
  )
}

render(TeamPointsBox)
