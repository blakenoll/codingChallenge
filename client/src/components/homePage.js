import React, { useEffect, useState } from "react";
import Loader from "./loader";
import Tweet from "./tweet";
import Navbar from "./navbar";

function HomePage() {
  const [state, setState] = useState({ tweets: "", isLoading: true });

  useEffect(() => {
    fetch("/home")
      .then(res => res.json())
      .then(data => {
        setState({ tweets: data, isLoading: false });
      });
  }, []);

  if (state.isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar user={state.tweets[0].user.name} />
      <div style={{ padding: "0 10px" }}>
        {state.tweets.map(tweet => (
          <Tweet key={tweet.id} data={tweet} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
