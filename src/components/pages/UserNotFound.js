import React, { Fragment } from "react";

import userNotFoundIcon from "../../assets/img/user_not_found.svg";
import "./UserNotFound.scss";
const UserNotFound = () => (
  <Fragment>
    <div className="user_not_found">
      <img src={userNotFoundIcon} alt="search_icon" />
      <span className="user_not_found__text">User not found</span>
    </div>
  </Fragment>
);

export default UserNotFound;
