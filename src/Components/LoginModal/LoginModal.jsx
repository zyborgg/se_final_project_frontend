import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Log in"
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
