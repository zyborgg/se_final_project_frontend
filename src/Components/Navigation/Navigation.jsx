import { Link } from "react-router-dom";

function Navigation({ isLoggedIn, onLoginClick, onLogoutClick }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          <Link to="/" className="navigation__link">
            Home
          </Link>
        </li>

        {isLoggedIn && (
          <li>
            <Link to="/saved-news" className="navigation__link">
              Saved News
            </Link>
          </li>
        )}
      </ul>

      <div className="navigation__auth">
        {!isLoggedIn ? (
          <button className="navigation__button" onClick={onLoginClick}>
            Log In
          </button>
        ) : (
          <button className="navigation__button" onClick={onLogoutClick}>
            Log Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
