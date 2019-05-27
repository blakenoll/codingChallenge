import React from "react";
import styled from "styled-components";
import Linkify from "react-linkify";
import UserModal from "./userModal";

const Tweet = ({ className, data }) => {
  const timeStamp = new Date(data.created_at).toLocaleDateString();
  let withMentions = data.text.split(/([@][a-z]\w+)/gi);
  for (let i = 1; i < withMentions.length; i += 2) {
    withMentions[i] = <UserModal key={i} user={withMentions[i]} />;
  }

  return (
    <div className={className}>
      <img src={data.user.profile_image_url} alt={data.user.name} />
      <h2>{data.user.name}</h2>
      <p>
        <Linkify>{withMentions}</Linkify>
      </p>
      <p>Posted: {timeStamp}</p>
    </div>
  );
};

const StyledTweet = styled(Tweet)`
  padding: 10px;
  border-radius: 20px;
  margin: 10px auto;
  max-width: 500px;
  box-shadow: 0 7px 13px -3px rgba(45, 35, 66, 0.3),
    0 2px 4px 0 rgba(45, 35, 66, 0.4);
  h2 {
    font-size: 1rem;
    margin: 0 0 5px;
  }
  p {
    font-size: 16px;
  }
  img {
    border-radius: 50%;
  }
`;

export default StyledTweet;
