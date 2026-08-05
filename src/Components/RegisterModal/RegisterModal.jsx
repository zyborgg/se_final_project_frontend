import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({
  isOpen,
  onClose,
  onRegister,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  onSwitchToSignIn,
  onSwitch,
  switchText,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onRegister(email, password, name);
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign up"
      onSubmit={handleSubmit}
      onSwitch={onSwitchToSignIn}
      switchText="Log in"
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
