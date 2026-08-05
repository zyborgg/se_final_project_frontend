import "./SuccessModal.css";
import closeButton from "../../assets/closeButton.svg";

function SuccessModal({ isOpen, onClose, onSignIn }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>

      <div className="modal__container-success">
        <button className="modal__close" onClick={onClose}>
          <img
            className="modal__close-button"
            src={closeButton}
            alt="closeButton"
          />
        </button>

        <h2 className="modal__title">
          Registration successfully <br /> completed!
        </h2>

        <button className="modal__submit-success" onClick={onSignIn}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
