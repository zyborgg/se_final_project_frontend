import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { searchNews } from "../../utils/api";
import { ERROR_MESSAGES } from "../../utils/errors";
import { fakeCheckToken, fakeLogin } from "../../utils/auth";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SuccessModal from "../SuccessModal/SuccessModal";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [lastSearchQuery, setLastSearchQuery] = useState("");
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const [userName, setUserName] = useState("");

  const location = useLocation();

  function handleLoginClick() {
    setActiveModal("login");
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

    if (!token) {
      setIsUserLoaded(true);
      return;
    }

    fakeCheckToken(token)
      .then((data) => {
        setIsLoggedIn(true);
        setUserName(data.name);
      })
      .finally(() => {
        setIsUserLoaded(true);
      });
  }, []);

  function handleLogout() {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("token");
  }

  async function handleSearch(query) {
    setLastSearchQuery(query);
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

  function handleSaveArticle(article) {
    const articleWithKeyword = {
      ...article,
      keyword:
        lastSearchQuery.charAt(0).toUpperCase() + lastSearchQuery.slice(1),
    };

    setSavedArticles((prev) => [...prev, articleWithKeyword]);
  }

  function handleDeleteArticle(article) {
    setSavedArticles((prev) => prev.filter((a) => a.link !== article.link));
  }

  if (!isUserLoaded) {
    return null;
  }

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={handleLoginClick}
        onLogoutClick={handleLogout}
        userName={userName}
        isSavedNewsPage={location.pathname === "/saved-news"}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
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
                  isOpen
                  onClose={() => setActiveModal(null)}
                  onLogin={handleLoginSubmit}
                  onSwitchToSignUp={() => setActiveModal("register")}
                />
              )}

              {activeModal === "register" && (
                <RegisterModal
                  isOpen
                  onClose={() => setActiveModal(null)}
                  onRegister={handleRegister}
                  onSwitchToSignIn={() => setActiveModal("login")}
                />
              )}

              {activeModal === "success" && (
                <SuccessModal
                  isOpen
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
