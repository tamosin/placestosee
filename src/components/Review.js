import React from "react";
import "./Review.css"

function Review({ image_url, name, visited, review }) {
  return (
    <article className="review-article">
      <div className="review-avatar-div">
        <img className="avatar-img" src={image_url} alt={name} />
        <h4>{name}</h4>
        <h5>Visited: {visited}</h5>
      </div>
      <p className="review-p">{review}</p>
    </article>
  );
}

export default Review;
