import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, onLoginClick, onLogoutClick, userName }) {
  return (
    <header className="header">
      <div className="header__logo">NewsExplorer</div>
      <Navigation
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
        userName={userName}
      />
      {/* { SearchForm } */}
    </header>
  );
}

export default Header;
