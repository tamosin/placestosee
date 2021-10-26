import React from "react";
import Location from "./Location";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import "./Locations.css";

function Locations() {
  const { locations, isLoading } = useGlobalContext();
  
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="locations-section">      
      {locations.map((location) => {
        return <Location key={location.id} {...location} />;
      })}
    </section>
  );
}

export default Locations;
