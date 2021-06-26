import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import SearchBar from "./SearchBar";
import Asset from "./Asset";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>

        <Route path="/search" exact component={SearchBar} />
        <Route path="/asset/:id" component={Asset} />
      </BrowserRouter>
    </div>
  );
};

export default App;
