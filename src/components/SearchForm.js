import React from "react";
import "./SearchForm.css";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <section className="search-section">
      <form className="search-form">
        <FaSearch className="search-icon" />
        <input
          id="search-term"
          type="text"
          placeholder="search locations"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
      </form>
    </section>
  );
}

export default SearchForm;
