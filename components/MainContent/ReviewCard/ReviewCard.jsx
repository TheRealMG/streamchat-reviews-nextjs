import React from "react";

const ReviewCard = ({ review }) => {
  return (
    // <div className="bg-white p-4 shadow">
    //   <div>
    //   <div className="">
    //       <img className="w-full h-40 object-cover mb-4" src={review.image} alt={review.game} />
    //     </div>
    //     <div className="">
    //       <h2 className="text-xl font-bold mb-2 text-black">{review.game}</h2>
    //       <p className="text-gray-600 mb-2">
    //         Developer: <span>{review.developer}</span>
    //       </p>
    //       <p className="text-gray-600 mb-2">
    //         Publisher: <span>{review.publisher}</span>
    //       </p>
    //       <div className="">
    //         <p className="text-gray-600 mb-2">{review.rating}</p>
    //         <span className="text-gray-600 mb-2">{review.author}</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="card">
      <div className="card-image">
        <img src={review.image} alt={review.game} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{review.game}</h2>
        <p className="card-label">
          Developer: <span className="card-span">{review.developer}</span>
        </p>
        <p className="card-label">
          Publisher: <span className="card-span">{review.publisher}</span>
        </p>
        <div className="overflow-hidden mt-2 gap-2">
          <p className="card-rating">{review.rating}</p>
          <span className="card-author">{review.author}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
