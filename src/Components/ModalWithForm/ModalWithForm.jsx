import { useEffect } from "react";
import "./ModalWithForm.css";
import closeButton from "../../assets/closeButton.svg";

function ModalWithForm({
  isOpen,
  onClose = () => {},
  title,
  onSubmit,
  children,
  onSwitch = () => {},
  switchText = "",
  isSubmitDisabled = false,
}) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__container">
        <button className="modal__close-desktop" onClick={onClose}>
          <img
            className="modal__close-button"
            src={closeButton}
            alt="closeButton"
          />
        </button>
        <button className="modal__close-mobile">
          <img
            className="modal__close-button"
            src={closeButton}
            alt="closeButton"
          />
        </button>

        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button
            type="submit"
            className={`modal__submit ${isSubmitDisabled ? "modal__submit--disabled" : ""}`}
            disabled={isSubmitDisabled}
          >
            {title}
          </button>
        </form>

        <p className="modal__switch">
          or{" "}
          <span className="modal__switch-link" onClick={onSwitch}>
            {switchText}
          </span>
        </p>
      </div>
    </div>
  );
}

export default ModalWithForm;
