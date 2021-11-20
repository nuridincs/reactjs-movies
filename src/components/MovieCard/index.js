import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";
import Modal from "../Modal/index";
import './card.css';

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

  onPreviewImg = () => {
    this.showModal();
  }

  render() {
    const { movie } = this.props;
    return (
      <>
        <div className="movie-card">
          <div className="movie-header img-cover" style={{background: 'url(' + movie.Poster + ')'}}  onClick={this.onPreviewImg}>
          </div>
          <div className="movie-content">
            <div className="movie-content-header">
              <a href="#">
                <h3 className="movie-title">{ movie.Title }</h3>
              </a>
            </div>
            <div className="movie-info">
              <div className="info-section">
                <label>Type</label>
                <span>{ movie.Type }</span>
              </div>{/*date,time*/}
              <div className="info-section">
                <label>Year</label>
                <span>{ movie.Year }</span>
              </div>{/*screen*/}
            </div>

            <div className="text-center mt-5">
              <Link
                className="mt-auto btn btn-primary btn-sm btn-block"
                to={"/movie/" + movie.imdbID}
              >
                <span className="mr-2">Details</span>{" "}
                <FaChevronCircleRight size="15" />
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