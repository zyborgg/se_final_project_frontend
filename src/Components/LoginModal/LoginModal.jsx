import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({
  isOpen,
  onClose: closeModal,
  onLogin,
  onSwitchToSignUp,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isFormValid =
    email.trim() && password.trim() && !emailError && !passwordError;

  function validateEmail(value) {
    if (!value) return setEmailError("Email is required");
    const regex = /\S+@\S+\.\S+/; // possible alternative regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(value)) return setEmailError("Enter a valid email");
    setEmailError("");
  }

  function validatePassword(value) {
    if (!value) return setPasswordError("Password is required");
    if (value.length < 6)
      return setPasswordError("Password must be at least 6 characters");
    setPasswordError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;
    onLogin(email, password);
  }

  function handleClose() {
    setEmail("");
    setPassword("");
    setEmailError("");
    setPasswordError("");
    closeModal();
  }

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title="Sign in"
      onSubmit={handleSubmit}
      onSwitch={onSwitchToSignUp}
      switchText="Sign up"
      isSubmitDisabled={!isFormValid}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className="modal__input"
          name="fake-email"
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
          name="fake-password"
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
    </ModalWithForm>
  );
}

export default LoginModal;
