import React from "react";
import "./ChatCardsListing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ChatCardsListing = () => {
  return (
    <div className="chat-cards-listing">
      {/* <h1>ChatCardsListing</h1> */}
      <div className="card">
        <div className="img-container">
          <img
            alt="card-icon"
            src="https://posts-cdn.kueez.net/OAyTRw3lzuXbeail/image-PsVOkM5mC70yIrht.jpg"
          />
        </div>
        <div className="card-detail">
          <h4 className="title">User</h4>
          <p className="desc">Hey there!!!</p>
        </div>
        <div className="time">5:00PM</div>
        <div className="action-btn">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img
            alt="card-icon"
            src="https://posts-cdn.kueez.net/OAyTRw3lzuXbeail/image-PsVOkM5mC70yIrht.jpg"
          />
        </div>
        <div className="card-detail">
          <h4 className="title">User</h4>
          <p className="desc">Hey there!!!</p>
        </div>
        <div className="time">5:00PM</div>
        <div className="action-btn">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
};

export default ChatCardsListing;
