import React from "react";
import "./Location.css";
import { ImLocation } from "react-icons/im";
import { Link } from "react-router-dom";

function Location({ id, image_url, name, nav, visits, likes, description }) {
  return (
    <Link to={"/loc/" + id}>
      <article className="location-article">
        <img src={image_url} alt={name} className="thumbnail" />
        <h3 className="location-name">{name}</h3>
        <div className="nav-container">
          <ImLocation className="nav-icon" />
          <p className="nav-text location-text">{nav}</p>
        </div>
        <p className="visits-likes location-text">
          {visits} visits / {likes} likes
        </p>
        <p className="location-text">{description}</p>
      </article>
    </Link>
  );
}

export default Location;
