import { useState } from "react";
import { NavLink } from "react-router-dom";
import signOut from "../../assets/signOut.svg";
import menu from "../../assets/menu.svg";
import closeButton from "../../assets/closeButton.svg";
import NewsExplorerWhite from "../../assets/NewsExplorerWhite.svg";
import "./Navigation.css";

function Navigation({
  isLoggedIn,
  onLoginClick,
  onLogoutClick,
  userName,
  isSavedNewsPage,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`navigation ${isSavedNewsPage ? "nav--light" : ""}`}>
      <div className="navigation__menu-wrapper">
        <button
          className={`navigation__menu-button ${
            isSavedNewsPage ? "navigation__menu-button--light" : ""
          }`}
          onClick={() => setIsMenuOpen(true)}
        >
          <img src={menu} alt="menu" />
        </button>
      </div>

      <ul className="navigation__list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link--active"
                : `navigation__link ${
                    isSavedNewsPage ? "navigation__link--light" : ""
                  }`
            }
          >
            Home
          </NavLink>
        </li>

        {isLoggedIn && (
          <li>
            <NavLink
              to="/saved-news"
              className={({ isActive }) =>
                isActive
                  ? `navigation__link navigation__link--active ${
                      isSavedNewsPage ? "navigation__link--light" : ""
                    }`
                  : `navigation__link ${isSavedNewsPage ? "navigation__link--light" : ""}`
              }
            >
              Saved Articles
            </NavLink>
          </li>
        )}
      </ul>

      <div className="navigation__auth">
        {!isLoggedIn ? (
          <button
            className={`navigation__button ${
              isSavedNewsPage ? "navigation__button--light" : ""
            }`}
            onClick={onLoginClick}
          >
            Sign in
          </button>
        ) : (
          <button
            className={`navigation__button navigation__button--signed-in ${
              isSavedNewsPage ? "navigation__button--light" : ""
            }`}
            onClick={onLogoutClick}
          >
            <span className="navigation__username">{userName}</span>
            <img
              src={signOut}
              alt="signOutArrow"
              className={`navigation__arrow ${
                isSavedNewsPage ? "navigation__arrow--light" : ""
              }`}
            />
          </button>
        )}
      </div>
      <div
        className={`navigation__overlay ${
          isMenuOpen ? "navigation__overlay--open" : ""
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`navigation__mobile-menu ${
          isMenuOpen ? "navigation__mobile-menu--open" : ""
        } ${isSavedNewsPage ? "navigation__mobile-menu--light" : ""}`}
      >
        <div className="navigation__mobile-header">
          <img
            src={NewsExplorerWhite}
            alt="NewsExplorer logo"
            className="navigation__mobile-logo"
          />

          <button
            className="navigation__close-button"
            onClick={() => setIsMenuOpen(false)}
          >
            <img src={closeButton} alt="close menu" />
          </button>
        </div>

        <div className="navigation__mobile-separator"></div>

        <ul className="navigation__mobile-list">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="navigation__mobile-link"
            >
              Home
            </NavLink>
          </li>

          {isLoggedIn && (
            <li>
              <NavLink
                to="/saved-news"
                onClick={() => setIsMenuOpen(false)}
                className="navigation__mobile-link"
              >
                Saved Articles
              </NavLink>
            </li>
          )}
        </ul>

        {!isLoggedIn ? (
          <button
            className="navigation__mobile-button"
            onClick={() => {
              setIsMenuOpen(false);
              onLoginClick();
            }}
          >
            Sign in
          </button>
        ) : (
          <button
            className="navigation__mobile-button"
            onClick={() => {
              setIsMenuOpen(false);
              onLogoutClick();
            }}
          >
            <span>{userName}</span>
            <img src={signOut} alt="logout" />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
