import { NavLink } from "react-router-dom";
import signOut from "../../assets/signOut.svg";
import "./Navigation.css";

function Navigation({
  isLoggedIn,
  onLoginClick,
  onLogoutClick,
  userName,
  isSavedNewsPage,
}) {
  return (
    <nav className={`navigation ${isSavedNewsPage ? "nav--light" : ""}`}>
      <ul className="navigation__list">
        {/* HOME LINK */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `navigation__link navigation__link--active ${
                    isSavedNewsPage ? "navigation__link--light" : ""
                  }`
                : `navigation__link ${isSavedNewsPage ? "navigation__link--light" : ""}`
            }
          >
            Home
          </NavLink>
        </li>

        {/* SAVED NEWS (only when logged in) */}
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

      {/* RIGHT-SIDE AUTH BUTTON */}
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
            className={`navigation__button ${
              isSavedNewsPage ? "navigation__button--light" : ""
            }`}
            onClick={onLogoutClick}
          >
            {userName}
            <img
              src={signOut}
              alt="signOutArrow"
              className={`navigation__arrow ${
                isSavedNewsPage ? "navigation__arrow--light" : ""
              }`}
              onClick={onLogoutClick}
            />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
