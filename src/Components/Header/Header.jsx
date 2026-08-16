import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import NewsExplorerWhite from "../../assets/NewsExplorerWhite.svg";
import NewsExplorerBlack from "../../assets/NewsExplorerBlack.svg";
import closeButton from "../../assets/closeButton.svg";
import "./Header.css";

function Header({
  isLoggedIn,
  onLoginClick,
  onLogoutClick,
  userName,
  isSavedNewsPage,
  isOpen,
  onClose,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 480);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`header ${isSavedNewsPage ? "header--light" : ""}`}>
      <div className="header__logo-wrapper">
        <img
          className="header__logo"
          src={isSavedNewsPage ? NewsExplorerBlack : NewsExplorerWhite}
          alt="NewsExplorer"
        />
      </div>

      <div className="header__nav">
        {isMobile && isOpen ? (
          <button
            className="header__close-button"
            onClick={() => {
              onClose();
            }}
          >
            <img src={closeButton} alt="close" />
          </button>
        ) : (
          <Navigation
            isLoggedIn={isLoggedIn}
            userName={userName}
            onLoginClick={onLoginClick}
            onLogoutClick={onLogoutClick}
            isSavedNewsPage={isSavedNewsPage}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
