import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import "./App.css";
import SavedNews from "../SavedNews/SavedNews";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  function handleLogin(email, password) {
    console.log("Logging in:", email, password);
    setIsLoggedIn(true);
    setActiveModal(null);
  }

  function handleLoginClick() {
    console.log("Login button clicked!");
    setActiveModal("login");
  }

  function handleRegister(email, password, name) {
    console.log("Registering:", email, password, name);
    setIsLoggedIn(true);
    setActiveModal(null);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function handleSearch(term) {
    setIsLoading(true);
    // mock search
    setTimeout(() => {
      const mockArticles = [
        { title: "Example Article", description: "Lorem ipsum..." },
      ];
      setSearchResults(mockArticles);
      setIsLoading(false);
    }, 1500);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleDeleteArticle(article) {
    setSavedArticles((prev) => prev.filter((a) => a.title !== article.title));
  }

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={handleLoginClick}
        onClick={() => setActiveModal("login")}
        onLogoutClick={handleLogout}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              isLoading={isLoading}
              articles={searchResults}
              onSearch={handleSearch}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route
          path="/saved-news"
          element={
            <SavedNews
              savedArticles={savedArticles}
              isLoggedIn={isLoggedIn}
              onDelete={handleDeleteArticle}
            />
          }
        />
      </Routes>
      {activeModal === "login" && (
        <LoginModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          onLogin={handleLogin}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          isOpen={true}
          onClose={() => setActiveModal(null)}
          onRegister={handleRegister}
        />
      )}
      <Footer />
    </>
  );
}

export default App;

//leave for now
{
  /* <button onClick={openModal}>Open</button>
{isModalOpen && <Modal onClose={closeModal} />} */
}
