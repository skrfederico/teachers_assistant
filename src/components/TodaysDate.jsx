import React from 'react'

export default function TodaysDate() {
  const today = new Date()
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const formattedDate = today.toLocaleDateString('en-US', options)

  return (
    <div>
      <p>Today's Date: {formattedDate}</p>
    </div>
  )
}
