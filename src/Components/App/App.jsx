import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { searchNews } from "../../utils/api";
import { ERROR_MESSAGES } from "../../utils/errors";
import { fakeCheckToken, fakeLogin } from "../../utils/auth";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import frontPageBackground from "../../assets/frontPageBackground.svg";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SuccessModal from "../SuccessModal/SuccessModal";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./HeroWrapper.css";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleLogin(email, password) {
    setIsLoggedIn(true);
    setActiveModal(null);
  }

  function handleLoginClick() {
    setActiveModal("login");
    setUserName("Ziah");
  }

  function handleRegister(email, password, name) {
    setIsLoggedIn(true);
    setActiveModal("success");
  }

  async function handleLoginSubmit(email, password) {
    try {
      const data = await fakeLogin(email, password);

      localStorage.setItem("token", data.token);

      setIsLoggedIn(true);
      setUserName(data.name);

      setActiveModal(null);
    } catch (err) {
      console.error("Login failed:", err);
      setLoginError("Something went wrong. Please try again.");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fakeCheckToken(token).then((data) => {
        setIsLoggedIn(true);
        setUserName(data.name);
      });
    }
  }, []);

  function handleLogout() {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("token");
  }

  function handleLogoutClick() {
    setIsLoggedIn(false);
    setUserName("");
  }

  async function handleSearch(query) {
    if (!query.trim()) {
      setSearchError(ERROR_MESSAGES.emptySearch);
      return;
    }
    setSearchError("");
    setErrorMessage("");
    setHasSearched(true);
    setIsLoading(true);

    try {
      const results = await searchNews(query);

      if (results.length === 0) {
        setArticles([]);
        return;
      }

      setArticles(results);
    } catch (err) {
      setErrorMessage(ERROR_MESSAGES.requestFailed);
    } finally {
      setIsLoading(false);
    }
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

  // function handleDeleteArticle(article) {
  //   setSavedArticles((prev) => prev.filter((a) => a.title !== article.title));
  // }

  function handleDeleteArticle(article) {
    setSavedArticles((prev) => prev.filter((a) => a.link !== article.link));
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
                  articles={articles}
                  onSearch={handleSearch}
                  hasSearched={hasSearched}
                  searchError={searchError}
                  errorMessage={errorMessage}
                  isLoggedIn={isLoggedIn}
                  onSavedArticle={handleSaveArticle}
                />
              </div>

              {isLoading && <Preloader />}

              {!isLoading && articles.length > 0 && (
                <NewsCardList
                  articles={articles}
                  isLoggedIn={isLoggedIn}
                  onSave={handleSaveArticle}
                />
              )}
              <About />

              {activeModal === "login" && (
                <LoginModal
                  isOpen={true}
                  onClose={() => setActiveModal(null)}
                  onLogin={handleLoginSubmit}
                  onSwitchToSignUp={() => setActiveModal("register")}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
              )}

              {activeModal === "register" && (
                <RegisterModal
                  isOpen={true}
                  onClose={() => setActiveModal(null)}
                  onRegister={handleRegister}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  name={name}
                  setName={setName}
                />
              )}

              {activeModal === "success" && (
                <SuccessModal
                  isOpen={true}
                  onClose={() => setActiveModal(null)}
                  onSignIn={() => setActiveModal("login")}
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
                  onLogoutClick={handleLogout}
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
