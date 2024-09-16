import React from 'react'
import { render, FramerMotion, useCasparData } from '@nxtedition/graphics-kit'
import { motion } from 'framer-motion'
import './style.css'

const FramerMotionExample = () => {
  const { name, title, source } = useCasparData()

  return (
    <FramerMotion hide={!title && !source}> {/* Hide if both title and source are not present */}
      {title && (
        <motion.div
          key={`title-${title}`}
          className="new-box"
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              opacity: {
                duration: 0.5
              },
              y: {
                duration: 0.7
              }
            }
          }}
          exit={{
            opacity: 0,
            y: 50,
            transition: {
              duration: 0.6
            }
          }}
        >
          {title}
        </motion.div>
      )}

      {name && (
        <motion.div
          key={`name-${name}`}
          className="container"
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              opacity: {
                duration: 0.5
              },
              y: {
                duration: 0.7
              }
            }
          }}
          exit={{
            opacity: 0,
            y: 100,
            transition: {
              duration: 0.6
            }
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: '100%'
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.2
              }
            }}
          >
            {name}
          </motion.div>
        </motion.div>
      )}

      {source && (
        <motion.div
          key={`source-${source}`}
          className="source-box" // Add new class for source styling
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5
            }
          }}
          exit={{
            opacity: 0,
            y: 50,
            transition: {
              duration: 0.6
            }
          }}
        >
          {source}
        </motion.div>
      )}
    </FramerMotion>
  )
}

render(FramerMotionExample)
