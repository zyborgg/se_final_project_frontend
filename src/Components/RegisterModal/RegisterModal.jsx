import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

function RegisterModal({
  isOpen,
  onClose: closeModal,
  onRegister,
  onSwitchToSignIn,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isFormValid =
    name.trim() &&
    email.trim() &&
    password.trim() &&
    !nameError &&
    !emailError &&
    !passwordError;

  function validateEmail(value) {
    if (!value) return setEmailError("Email is required");
    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(value)) return setEmailError("Enter a valid email");
    setEmailError("");
  }

  function validatePassword(value) {
    if (!value) return setPasswordError("Password is required");
    if (value.length < 6)
      return setPasswordError("Password must be at least 6 characters");
    setPasswordError("");
  }

  function validateName(value) {
    if (!value.trim()) return setNameError("Name is required");
    if (value.length < 2)
      return setNameError("Name must be at least 2 characters");
    setNameError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;
    onRegister(email, password, name);
  }

  function handleClose() {
    setEmail("");
    setPassword("");
    setName("");
    setEmailError("");
    setPasswordError("");
    setNameError("");
    closeModal();
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title="Sign up"
      onSubmit={handleSubmit}
      onSwitch={onSwitchToSignIn}
      switchText="Sign in"
      isSubmitDisabled={!isFormValid}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          name="fake-register-email"
          autoComplete="new-email"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          placeholder="Enter email"
        />
        {emailError && <span className="modal__error">{emailError}</span>}
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          name="fake-register-password"
          autoComplete="new-password"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(e.target.value);
          }}
          placeholder="Enter password"
        />
        {passwordError && <span className="modal__error">{passwordError}</span>}
      </label>

      <label className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          name="fake-register-name"
          autoComplete="new-name"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateName(e.target.value);
          }}
          placeholder="Enter your name"
        />
        {nameError && <span className="modal__error">{nameError}</span>}
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
