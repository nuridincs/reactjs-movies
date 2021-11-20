import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/index";
import Landing from "./pages/index";
import Movie from "./components/Movie/index";
import store from "./stores/store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Nav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;