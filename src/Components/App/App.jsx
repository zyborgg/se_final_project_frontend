import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import frontPageBackground from "../../assets/frontPageBackground.svg";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./HeroWrapper.css";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [userName, setUserName] = useState("");

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

  function handleLoginSubmit(email, password) {
    // mock login
    setIsLoggedIn(true);
    setUserName("Ziah"); // temporary until API
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
    setUserName("");
  }

  function handleSearch(term) {
    setHasSearched(true);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function handleSaveArticle(article) {
    setSavedArticles((prev) => [...prev, article]);
  }

  function handleDeleteArticle(article) {
    setSavedArticles((prev) => prev.filter((a) => a.title !== article.title));
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                className="hero-wrapper"
                style={{ backgroundImage: `url(${frontPageBackground})` }}
              >
                <Header
                  isLoggedIn={isLoggedIn}
                  onLoginClick={handleLoginClick}
                  onLogoutClick={handleLogout}
                  userName={userName}
                  isSavedNewsPage={false}
                />

                <Main
                  isLoading={isLoading}
                  articles={searchResults}
                  onSearch={handleSearch}
                  isLoggedIn={isLoggedIn}
                  onSavedArticle={handleSaveArticle}
                  hasSearched={hasSearched}
                />
              </div>
              <About />

              {/* MODALS */}
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
          }
        />

        <Route
          path="/saved-news"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <>
                <Header
                  isLoggedIn={isLoggedIn}
                  onLogout={handleLogout}
                  onLoginClick={handleLoginClick}
                  userName={userName}
                  isSavedNewsPage={true}
                />

                <SavedNews
                  savedArticles={savedArticles}
                  isLoggedIn={isLoggedIn}
                  onDeleteArticle={handleDeleteArticle}
                />

                <Footer />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
