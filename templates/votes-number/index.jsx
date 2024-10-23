import React from 'react';
import { render, FramerMotion, useCasparData } from '@nxtedition/graphics-kit';
import { motion } from 'framer-motion';
import './style.css';

const TeamPointsBox = () => {
  const { percent = '0', rate = '0', hiddenTitle = '' } = useCasparData();

  const isHiddenTitleNegative = hiddenTitle === '-';

  return (
    <FramerMotion>
      <div className="main-container">
        <motion.div
          className="percent-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <span className="percent-text">{percent}%</span>
        </motion.div>
        <motion.div
          className="rate-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <span className={`rate-arrow ${isHiddenTitleNegative ? 'negative' : 'positive'}`}>
            {isHiddenTitleNegative ? '▼' : '▲'}
          </span>
          <span className="rate-text">{rate}%</span>
        </motion.div>
      </div>
    </FramerMotion>
  );
};

render(TeamPointsBox);
