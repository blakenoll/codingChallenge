import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoadedUserModal = ({ className, user, username }) => (
  <div className={className}>
    <Link to={`${username}`}>{username}</Link>
    <div className="modal">
      <img src={user.profile_image_url} alt={username} />
      <h2>{user.screen_name}</h2>
      Followers: {user.followers_count}
      <br />
      Tweets: {user.statuses_count}
    </div>
  </div>
);

const StyledLoadedUserModal = styled(LoadedUserModal)`
  display: inline;
  color: blue;
  position: relative;
  .modal {
    width: 200px;
    display: none;
    position: absolute;
    z-index: 100;
    bottom: 125%;
    left: 0;
    padding: 10px;
    border-radius: 20px;
    background: #fff;
    color: black;
    box-shadow: 0 7px 13px -3px rgba(45, 35, 66, 0.3),
      0 2px 4px 0 rgba(45, 35, 66, 0.4);
    h2 {
      margin: 5px 0;
    }
  }
  &:hover {
    .modal {
      display: block;
    }
  }
`;

export default StyledLoadedUserModal;
