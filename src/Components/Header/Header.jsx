import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({
  isLoggedIn,
  onLoginClick,
  onLogoutClick,
  userName,
  isSavedNewsPage,
}) {
  return (
    <header className={`header ${isSavedNewsPage ? "header--light" : ""}`}>
      <div className="header__logo">NewsExplorer</div>

      <div className="header__nav">
        <Navigation
          isLoggedIn={isLoggedIn}
          userName={userName}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
          isSavedNewsPage={isSavedNewsPage}
        />
      </div>
    </header>
  );
}

export default Header;
