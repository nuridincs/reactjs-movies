import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";
import Modal from "../Modal/index";

export class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  onPreviewImg = (imgUrl) => {
    this.showModal();
    console.log('onPreviewImg imgUrl', imgUrl);
  }

  render() {
    const { movie } = this.props;
    return (
      <>
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="text-center h-100 bg-light card">
            <img
              className="w-50 img-fluid mt-4 mx-auto"
              src={movie.Poster}
              onClick={() => this.onPreviewImg(movie.Poster)}
              alt="Movie Cover" />
            <div className="card-body d-flex flex-column">
              <h5 className=" card-title">
                {movie.Title} - {movie.Year}
              </h5>
              <Link
                className="mt-auto btn btn-primary btn-lg"
                to={"/movie/" + movie.imdbID}
              >
                <span className="mr-2">Details</span>{" "}
                <FaChevronCircleRight size="18" />
              </Link>
            </div>
          </div>
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal} data={movie} />
      </>
    );
  }
}

export default MovieCard;