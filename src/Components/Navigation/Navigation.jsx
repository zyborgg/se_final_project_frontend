import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, onLoginClick, onLogoutClick, userName }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {/* HOME LINK */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link--active"
                : "navigation__link"
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
                  ? "navigation__link navigation__link--active"
                  : "navigation__link"
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
          <button className="navigation__button" onClick={onLoginClick}>
            Sign in
          </button>
        ) : (
          <button className="navigation__button" onClick={onLogoutClick}>
            {userName} <span className="navigation__arrow">⌄</span>
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
