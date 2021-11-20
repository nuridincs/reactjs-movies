import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMovie, setLoading } from "../../stores/actions/search";
import { FaChevronCircleLeft } from "react-icons/fa";
import Loader from "../Loader/index";

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;
    let movieInfo = (
      <div className="container">
        <Link to="/" className="btn btn-dark mr-3">
          <FaChevronCircleLeft size="16" /> Back
        </Link>
        <div className="row">
          <h2 className="col-12 text-center mb-4">{movie.Title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 mb-3">
            <div className="text-center">
              <img
                src={movie.Poster}
                className="img-fluid img-thumbnail"
                alt="Poster"
              />
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Type:</strong> {movie.Type}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Awards:</strong> {movie.Awards}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );

    let content = loading === true ? <Loader /> : movieInfo;
    return <div>{content}</div>;
  }
}

function mapStateToProps(state) {
  return {
    loading: state.movies.loading,
    movie: state.movies.movie
  };
}

export default connect(mapStateToProps, { fetchMovie, setLoading })(Movie);