import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Header } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import Asset from "./Asset";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header as="h3" style={{ marginTop: "20px" }}>
          NASA API SEARCH
        </Header>

        <Route exact path="/">
          <Redirect to="/search" />
        </Route>

        <Route path="/search" exact component={SearchBar} />
      </BrowserRouter>
    </div>
  );
};

export default App;
