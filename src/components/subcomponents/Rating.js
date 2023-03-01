import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


function Rating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index} >
          <FaStar
            className="star"
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(ratingValue)}
          />
        </label>
        );
      })}
    </>
  );
}

export default Rating;
