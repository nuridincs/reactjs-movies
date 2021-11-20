import './modal.css';

const Modal = ({ handleClose, show, data }) => {
  return (
    show ? (
      <div className="modal-custom">
        <div className="modal-custom-content">
          <span className="close" onClick={() => handleClose()}>&times;</span>
          <div className="text-center">
            <h4>{data.Title}</h4>
            <img src={data.Poster} alt="" />
          </div>
        </div>

      </div>
    )
    : null
  );
};

export default Modal;