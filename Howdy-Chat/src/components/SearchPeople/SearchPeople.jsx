import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchPeople.scss";

const SearchPeople = () => {
  return (
    <div className="search">
      {/* <h1>SearchPeople</h1> */}
      <FontAwesomeIcon className="icon-block" icon={faSearch} />
      <input placeholder="search" />
    </div>
  );
};

export default SearchPeople;
