import React, { useState, useContext, useEffect } from "react";
import { locations as locations_array, reviews as reviews_array } from "./data";

import loc1 from "./images/loc-1.png";
import loc2 from "./images/loc-2.png";
import loc3 from "./images/loc-3.png";
import loc4 from "./images/loc-4.png";
import loc5 from "./images/loc-5.png";
import loc6 from "./images/loc-6.png";

import loc1big from "./images/loc-1-big.jpg";
import loc2big from "./images/loc-2-big.jpg";
import loc3big from "./images/loc-3-big.jpg";
import loc4big from "./images/loc-4-big.jpg";
import loc5big from "./images/loc-5-big.jpg";
import loc6big from "./images/loc-6-big.jpg";

import av1 from "./images/av-1.png";
import av2 from "./images/av-2.png";

const images = [loc1, loc2, loc3, loc4, loc5, loc6];
const bigimages = [loc1big, loc2big, loc3big, loc4big, loc5big, loc6big];
const avatars = [av1, av2];

const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locations, setLocations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState({});
  const [reviews, setReviews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const new_locations_array = locations_array
      .map((location, index) => {
        return { ...location, image_url: images[index] };
      })
      .filter(
        (item) =>
          item.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1
      );
    setLocations(new_locations_array);
    setIsLoading(false);
    setIsError(false);
  }, [searchTerm]);

  const getCurrentLocationInfo = (id) => {
    setIsLoading(true);
    const currentLocation = locations_array.find(
      (item) => item.id === parseInt(id)
    );
    if (currentLocation) {
      currentLocation.image_url = images[parseInt(id) - 1];
      currentLocation.bigimage_url = bigimages[parseInt(id) - 1];
      setCurrentLocation(currentLocation);
      setIsError(false);
    } else {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const getReviews = (id) => {
    setIsLoading(true);

    const new_reviews_array = reviews_array.map((review, index) => {
      return { ...review, image_url: avatars[index] };
    });

    setReviews(new_reviews_array);

    setIsError(false);
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isError,
        locations,
        isMenuOpen,
        setIsMenuOpen,
        getCurrentLocationInfo,
        currentLocation,
        reviews,
        getReviews,
        google_api_key,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
