import React from 'react';
import './user-info.scss';

const UserInfo = () => {
  return (
    <div className="user__profile">
      <div className="user__profile__photo">
        <img src="https://avatars.githubusercontent.com/u/31541313?v=4" alt="user_photo" className="user__profile__photo-item" />
      </div>
      <div className="user__profile__user">
        <p className="user__profile__user__full-name">Dan Abramov</p>
        <p className="user__profile__user__nickname">
          <a className="user__profile__user__nickname-link" href="https://github.com/superpuper777">gaearon</a>
        </p>
      </div>
      <div className="user__profile__info">
        <p className="user__profile__info-followers"><span>65.8k</span>followers</p>
        <p className="user__profile__info-following"><span>171</span>following</p>
      </div>
    </div>
  )
}

export default UserInfo;