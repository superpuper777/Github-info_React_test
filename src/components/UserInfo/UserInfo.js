import React from 'react';
import './UserInfo.scss';

const UserInfo = ({ user, loading }) => {
  const { name, avatar_url, login, html_url, followers, following } = user;
  console.log(user);
  if (loading) {
    return <h2>Loading...</h2>
  }

    return (
      <div className="user__profile">
        <div className="user__profile__photo">
          <img src={avatar_url} alt="user_photo" className="user__profile__photo-item" />
        </div>
        <div className="user__profile__user">
          <p className="user__profile__user__full-name">{name}</p>
          <p className="user__profile__user__nickname">
            <a className="user__profile__user__nickname-link" href={html_url}>{login}</a>
          </p>
        </div>
        <div className="user__profile__info">
          <p className="user__profile__info-followers"><span>{followers}&nbsp;</span>followers</p>
          <p className="user__profile__info-following"><span>{following}&nbsp;</span>following</p>
        </div>
      </div>
    )
}

export default UserInfo;