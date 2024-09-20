import React from 'react'
import { render, FramerMotion, useCasparData } from '@nxtedition/graphics-kit'
import { motion } from 'framer-motion'
import './style.css'

const TeamPointsBox = () => {
  const { 
    title, title2, title3, title4, title5, 
    number1 = '0', number2 = '0', number3 = '0', number4 = '0', number5 = '0',
    points1 = '0', points2 = '0', points3 = '0', points4 = '0', points5 = '0',
    triangle1, triangle2, triangle3, triangle4, triangle5
  } = useCasparData()

  const getTriangle = (color) => {
    if (color === '-') {
      return <span className="triangle-down">▼</span>
    }
    return <span className="triangle-up">▲</span>
  }

  const getPointsClass = (color) => {
    return color === '-' ? 'negative' : 'positive'
  }

  const teams = [
    { name: title || 'Team 1', number: number1, points: points1, triangle: triangle1 },
    { name: title2 || 'Team 2', number: number2, points: points2, triangle: triangle2 },
    { name: title3 || 'Team 3', number: number3, points: points3, triangle: triangle3 },
    { name: title4 || 'Team 4', number: number4, points: points4, triangle: triangle4 },
    { name: title5 || 'Team 5', number: number5, points: points5, triangle: triangle5 }
  ]

  return (
    <FramerMotion>
      <div className="points-box">
        {teams.map((team, index) => (
          <motion.div
            key={`team${index}`}
            className="team-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <span className="team-name">{team.name}</span>
            <div className={`team-info ${getPointsClass(team.triangle)}`}>
              <span className="team-number">{team.number}</span>
              <span className={`triangle ${team.triangle === '-' ? 'negative' : 'positive'}`}>
                {getTriangle(team.triangle)}
              </span>
              <span className={`points ${getPointsClass(team.triangle)}`}>{team.points}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </FramerMotion>
  )
}

render(TeamPointsBox)
