import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "../components/SearchForm/index";
import Loader from "../components/Loader/index";
import MoviesContainer from "../components/MovieContainer/index";

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading === true ? <Loader /> : <MoviesContainer />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.movies.loading
  };
}

export default connect(mapStateToProps)(Landing);