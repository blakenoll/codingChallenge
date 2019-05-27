import React, { useEffect, useState } from "react";
import Loader from "./components/loader";
import HomePage from "./components/homePage";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/user/:username" component={UserPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
