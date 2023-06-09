import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'

export default function StarRating() {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="star-review">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              className='star'
              size={25}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })
      }
      {/* <p>The rating is {rating}.</p> */}
    </div>



  );
};