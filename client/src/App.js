import React, { useEffect, useState } from "react";
import Loader from "./components/loader";
import HomePage from "./components/homePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserPage from "./components/userPage";

function App() {
  const [state, setState] = useState({ tweets: "", isLoading: true });

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(data => {
        setState({ tweets: data, isLoading: false });
      });
  }, []);

  if (state.isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/:username" exact component={UserPage} />
      </Router>
    </div>
  );
}

export default App;
