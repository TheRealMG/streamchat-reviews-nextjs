import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewCardList = ({data}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}

export default ReviewCardList