import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({ isOpen, onClose, title, onSubmit, children }) {
  // close on ESC key
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

  // If modal is closed, render nothing
  if (!isOpen) return null;

  return (
    <div className="modal">
      {/* {overlay} */}
      <div className="modal__overlay" onClick={onClose}></div>
      {/* {modal content} */}
      <div className="modal__container">
        <button className="modal__close" onClick={onClose}>
          X
        </button>

        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}

          <button type="submit" className="modal__submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
