import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(email, password, name);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="register"
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

      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
