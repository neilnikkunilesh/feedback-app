import FeedbackContext from "../context/FeedbackContext";
import React, { useContext } from 'react'


export default function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)

  // Calculate ratings avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}