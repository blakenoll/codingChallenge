import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LoadedUserModal from "./loadedUserModal";
import Loader from "./loader";
import { Link } from "react-router-dom";

const UserModal = ({ className, user }) => {
  const [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const username = user.substring(1, user.length);

  useEffect(() => {
    fetch(`/mention/${username}`)
      .then(res => res.json())
      .then(data => {
        setUserData(data);
        setLoading(false);
      });
  }, [username]);

  if (isLoading) {
    return (
      <div className={className}>
        <Link to={`${username}`}>{username}</Link>
        {user}
        <div className="modal">
          <Loader />
        </div>
      </div>
    );
  }

  return <LoadedUserModal username={user} user={userData} />;
};

const StyledModal = styled(UserModal)`
  display: inline;
  color: blue;
  position: relative;
  .modal {
    width: 200px;
    display: none;
    position: absolute;
    top: -40px;
    left: 0;
    background: #fff;
  }
  &:hover {
    .modal {
      display: block;
    }
  }
`;

export default StyledModal;
