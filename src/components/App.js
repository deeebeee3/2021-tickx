import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Header } from "semantic-ui-react";
import MenuBar from "./MenuBar";
import SearchBar from "./SearchBar";
import Asset from "./Asset";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <>
          <MenuBar />
          <Header as="h3">NASA API SEARCH</Header>

          <Route exact path="/">
            <Redirect to="/search" />
          </Route>

          <Route path="/search" exact component={SearchBar} />
          <Route path="/asset:id" component={Asset} />
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;
