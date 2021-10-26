import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import "./LocationPage.css";

import Review from "./Review";

function LocationPage() {
  const { id } = useParams();
  const { getCurrentLocationInfo, currentLocation, getReviews, reviews, google_api_key } =
    useGlobalContext();

  useEffect(() => {
    getCurrentLocationInfo(id);
    getReviews();
    window.scrollTo(0, 0);
  }, []);

  const { name, likes, visits, bigimage_url, description, directions } =
    currentLocation;

  return (
    <section className="location-page-section">
      <h3 className="location-page-h3">{name}</h3>
      <p className="location-page-visits-likes">
        {visits} visits, {likes} likes
      </p>
      <article className="location-page-description">
        <img src={bigimage_url} alt={name} className="location-page-image" />
        <p className="location-page-description-text">{description}</p>
      </article>
      <article className="location-page-directions">
        <div className="location-page-map-div">
          <h3 className="location-page-h3">On map</h3>
          <GoogleMapReact
            className="location-page-map"
            bootstrapURLKeys={{
              key: google_api_key,
              language: "ru",
              region: "ru",
            }}
            defaultZoom={14}
            defaultCenter={[55.72629577100727, 37.3991615043706]}
          >
            <Marker
              key="1"
              text="Our office"
              lat="55.72629577100727"
              lng="37.3991615043706"
            />
          </GoogleMapReact>
        </div>
        <div className="location-page-directions-div">
          <h3 className="location-page-h3">Directions</h3>
          <p className="location-page-directions-text">{directions}</p>
        </div>
      </article>
      <article className="location-page-reviews">
        <h3 className="location-page-h3">Reviews</h3>
        <div className="location-page-review-div">
          {reviews &&
            reviews.map((review) => {
              return <Review key={review.id} {...review} />;
            })}
        </div>
      </article>
    </section>
  );
}

export default LocationPage;
