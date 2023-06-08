import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewCardList = ({data}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-4 pt-6">
      {data.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}

export default ReviewCardList