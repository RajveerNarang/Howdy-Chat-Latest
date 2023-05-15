import React from "react";
import "./ProfileSection.scss";

const ProfileSection = () => {
  return (
    <div className="profile-section">
      {/* <h1> ProfileSection</h1> */}
      <div className="img-container">
        <img
          src="https://posts-cdn.kueez.net/OAyTRw3lzuXbeail/image-PsVOkM5mC70yIrht.jpg"
          alt="profile-icon"
        />
      </div>
      <div className="action-items">Logout</div>
    </div>
  );
};

export default ProfileSection;
