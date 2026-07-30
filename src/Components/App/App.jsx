import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);

  function handleLogin() {
    setIsLoggedIn(true);
    setActiveModal(null);
  }

  function handleLoginClick() {
    console.log("Login button clicked!");
    setActiveModal("login");
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
      </Routes>
      // TEMP FOR TESTING
      {activeModal === "login" && (
        <div className="modal-placeholder">
          <div className="modal-placeholder__content">
            <h2>Login Modal Placeholder</h2>
            <button onClick={() => setActiveModal(null)}>Close</button>
          </div>
        </div>
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
