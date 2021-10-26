import React from "react";
import Hero from "./Hero"
import SearchForm from "./SearchForm"
import Locations from "./Locations"

function Home() {
  return <div className="home">
    <Hero />
    <SearchForm />
    <Locations />
  </div>;
}

export default Home;
